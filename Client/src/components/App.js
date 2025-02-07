import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "../scenes/NavBar/Navbar";
import WelcomePage from "../scenes/HomePage/WelcomePage";
import Bmi from "../scenes/BMIPage/Bmi";
import Nurtition from "../scenes/NurtitionalAnalysis/NurtitionalAnalysis";
import Login from "../scenes/Login/Login";
import Register from "../scenes/Register/Register";
import PersonalMeal from "../scenes/PersonalMealPage/PersonalMeal";
import Recipe from "../scenes/RecipeManagment/Recipe";
// import MouseTracker from "./Test";

function App() {
  return (<>
    {/* <MouseTracker /> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/analysis" element={<Nurtition />} />
        <Route path="/meal" element={<PersonalMeal />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/support" element={<Contact />} />

        <Route path="/bmi" element={<Bmi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}


export default App;
