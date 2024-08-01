import { Box, Container, Stack, Typography } from "@mui/material";
import TableTransections from "../components/functional/TableTransactions";
import { carteira } from "../config/data/carteira.data";
import { useEffect, useState } from "react";
import { WalletDigital } from "../config/interfaces/WalletDgital";

export function Home() {
  const [walletDigital, setwalletDigital] = useState<Array<WalletDigital>>([]);

  useEffect(() => {
    setwalletDigital([...carteira]);
  }, []);

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
          <Typography>{`AINDA NÃO FOI EFETUADA NENHUMA TRANSFERÊNCIA`}</Typography>
          <TableTransections listTransfer={walletDigital}></TableTransections>
        </Box>
      </Stack>
    </Container>
  );
}
