import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Alert,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import {
  TypeTransaction,
  WalletDigital,
} from "../../config/interfaces/WalletDgital";
import { carteira } from "../../config/data/carteira.data";
import { useAppDispatch } from "../../store/hooks";
import {
  decrementByAmount,
  incrementByAmount,
} from "../../store/modules/accountbalance/accountBalanceSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalTransferProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTransfer({ isOpen, onClose }: ModalTransferProps) {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [type, setType] = React.useState<TypeTransaction>(
    TypeTransaction.Entrada
  );
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState<number>(0);

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value as TypeTransaction);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const validateInputs = (data: WalletDigital): boolean => {
    if (!data.description || !type || !data.value) {
      setAlertOpen(true);
      return false;
    }
    setAlertOpen(false);
    return true;
  };

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: WalletDigital = {
      id: uuidv4(),
      value: amount,
      description: description,
      type: type,
    };

    if (!validateInputs(data)) {
      return;
    }

    carteira.push(data);

    if (type === "Entrada") {
      dispatch(incrementByAmount(amount));
    } else {
      dispatch(decrementByAmount(amount));
    }

    console.log(carteira);

    setAlertOpen(false);
    setType(TypeTransaction.Entrada);
    setDescription("");
    setAmount(0);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Nova Transferência
        </Typography>

        {alertOpen && (
          <Alert severity="error" onClose={() => setAlertOpen(false)}>
            Todos os campos são obrigatórios!
          </Alert>
        )}
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleTypeChange}
          fullWidth
        >
          <MenuItem value={TypeTransaction.Entrada}>Entrada</MenuItem>
          <MenuItem value={TypeTransaction.Saida}>Saida</MenuItem>
        </Select>
        <TextField
          margin="normal"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          label="Descrição"
          type="text"
          id="description"
        />
        <TextField
          margin="normal"
          fullWidth
          value={amount}
          onChange={handleAmountChange}
          name="amount"
          label="Valor"
          type="number"
          id="value"
          autoComplete="value"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Modal>
  );
}
