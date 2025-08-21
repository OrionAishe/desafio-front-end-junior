import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CatList from "./pages/CatList"
import Form from "./pages/Form"
import { Box, Stack } from "@mui/material"


function App() {
  return (
    <BrowserRouter>
      <Stack direction="row" spacing={5} marginBottom={"20px"}>
        <Box border={"1px solid black"} padding={"10px"} fontFamily={"Arial"}>
          <Link to={"/CatList"}>Cat List</Link>
        </Box>
        <Box border={"1px solid black"} padding={"10px"} fontFamily={"Arial"}>
          <Link to={"/Form"}>Form</Link>
        </Box>
      </Stack>
      <Routes>
        <Route Component={CatList} path="/CatList" />
        <Route Component={Form} path="/Form" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
