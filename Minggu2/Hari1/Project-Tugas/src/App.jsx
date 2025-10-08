import React from "react";
import EventHandler from "./components/EventHandler.jsx";
import SyntheicEvent from "./components/SyntheticEvent.jsx";
import Controlled from "./components/Controlled.jsx";
import Uncontrolled from "./components/Uncontrolled.jsx";
import Validation from "./components/Validation.jsx";




function App() {
    return (
        <div>
            <EventHandler />
            <SyntheicEvent />
            <Controlled />
            <Uncontrolled />
            <Validation />
        </div>
    );
}

export default App;