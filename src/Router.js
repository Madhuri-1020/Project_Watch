import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./Component/Signin";
import { Register } from "./Component/Register";
import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";


function Router() {

  return (
    <div>
    <ToastContainer theme="colored"></ToastContainer>
        <BrowserRouter>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Signin" element={<Signin />} />
                <Route exact path="/Register" element={<Register />} />

            </Routes>

        </BrowserRouter>

    </div>
  )
}

export default Router;