import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SignInPage from "./signpage";
import Home from './home'
import NavPage from "./nav";
import Support from "./supportpage";
import Info from "./informationpage";
import Footer from "./footerpage";
import Search from "./searchpage";
import Contact from "./contactpage";
import FakeApp from "./fakeflightapi";


const Navigation=()=>{
    return( 
        <>
        <BrowserRouter>
       <NavPage/>
       <Routes>
       
     
        <Route path="/" element={<Home/>}/>
        <Route path='/support'element={<Support/>}/>
        <Route path='/info'element={<Info/>}/>
        <Route path="/signpage" element={<SignInPage/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/signout" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/fakeapi" element={<FakeApp/>}/>
       </Routes>
       <Footer/>
        </BrowserRouter>
        </>

    )
} 
export default Navigation
