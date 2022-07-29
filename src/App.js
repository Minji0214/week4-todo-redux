
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import styled from "styled-components"
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {
 
 
return (
    <Layout className="App">
     <Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/detail/:id" element={<Detail></Detail>}></Route>



     </Routes>
    </Layout>
  );
}


const Layout = styled.div`
width: 100%
`;

export default App;
