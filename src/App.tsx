import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CatList from "./pages/CatList"
import FormPage from "./pages/FormPage"
import { Box, Stack } from "@mui/material"


function App() {
  return (
    <BrowserRouter>
      <Stack sx={{ marginBottom: '20px'}} direction= {'row'} spacing={5}>
        <Box sx={{border: '1px solid black', padding: '10px', fontFamily: 'Arial'}}>
          <Link to={"/CatList"}>Lista de Gatos</Link>
        </Box>
        <Box sx={{border: '1px solid black', padding: '10px', fontFamily: 'Arial'}}>
          <Link to={"/Form"}>Formulário</Link>
        </Box>
      </Stack>
      <Routes>
        <Route Component={CatList} path="/CatList" />
        <Route Component={FormPage} path="/Form" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
