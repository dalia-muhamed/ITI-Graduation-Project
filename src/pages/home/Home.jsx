import React from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import Navbar from "../../components/navbar/Navbar";
import Owl from "../../components/owl/Owl";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Footer from "../../components/footer/footer";
import SlickComponent from "../../slickComponent/SlickComponent";

const Home = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="165093153283-shjo35g4u2vh5tughu7i1ei04eaq4urc.apps.googleusercontent.com">
        <Navbar />
        <SearchComponent />
        <Owl />
        <SlickComponent />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Home;
