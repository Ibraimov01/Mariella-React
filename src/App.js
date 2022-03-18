import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Mainitem/MainItem";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="all">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
