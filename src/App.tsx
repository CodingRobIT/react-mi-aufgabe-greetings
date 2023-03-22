import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import GreetingsList from "./GreetingsList";

function App() {

    const names: string []= ["Bolor", "Julian", "Hozan", "Robin"]

    return(
        <div className="App">
            <GreetingsList allNamesToGreet={names}/>
        </div>
    );
}


export default App;
