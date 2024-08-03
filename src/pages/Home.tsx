import { Box, Container, Stack, Typography } from "@mui/material";
import TableTransections from "../components/functional/TableTransactions";
import { useSelector } from "react-redux";
import { listTransfers } from "../store/modules/transfer/transferSlice";
import { store } from "../store";

export function Home() {

  const transfers = useSelector(() => listTransfers(store.getState().transfers));

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        width: "97vw",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "row",
        paddingTop: "5%",
      }}
    >
      <Stack maxWidth="lg" spacing={4} sx={{ width: "100%" }}>
        <Box component="section">
          <Typography>
            {transfers.length === 0
              ? "AINDA NÃO FOI EFETUADA NENHUMA TRANSFERÊNCIA"
              : `TOTAL DE TRANSFERÊNCIAS REALIZADAS: ${transfers.length}`}
          </Typography>
          <TableTransections listTransfer={transfers}></TableTransections>
        </Box>
      </Stack>
    </Container>
  );
}
