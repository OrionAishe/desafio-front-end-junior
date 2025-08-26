import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CatList from "./pages/CatList"
import FormPage from "./pages/FormPage"
import { Card, Stack } from "@mui/material"


function App() {
  return (
    <BrowserRouter>
      <Stack sx={{ marginBottom: '20px', display: "flex", justifyContent: 'center',  a:{textDecoration: 'none', color: 'black'}}} direction= {'row'} spacing={5}>
        <Card sx={{border: '1px solid black', padding: '10px', fontFamily: 'Arial'}}>
          <Link to={"/CatList"}>Lista de Gatos</Link>
        </Card>
        <Card sx={{border: '1px solid black', padding: '10px', fontFamily: 'Arial'}}>
          <Link to={"/Form"}>Formulário</Link>
        </Card>
      </Stack>
      <Routes>
        <Route Component={CatList} path="/CatList" />
        <Route Component={FormPage} path="/Form" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
