import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import DataTable from "./components/DataTable";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<DataTable />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}