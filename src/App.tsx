import React, {useState} from 'react';
import './App.css';
import {Money} from "./components/Money";
// import {Header} from "./components/site/header/header";
// import {Body} from "./components/site/body/body";
// import {Footer} from "./components/site/footer/footer";
// import {NewComponent} from "./components/NewComponent";
// import {YouTube} from "./components/YouTube";
// import {Button} from "./components/Button/Button"; import {Money} from "./Money";


function App() {
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ];
    // const someDate = (subsc: string) => {
    //      console.log(subsc)
    // }
    //
    // const someDate2 = (subsc1: string) => {
    //      console.log(subsc1)
    // }
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},

    ])

    return (
        <div className="App">
            <div>
                <input/>
                <button>+</button>
            </div>
            {message.map((el, i) => {
                return (
                    <div key={i}>
                        {el.message}
                    </div>
                )
            })}


            {/*<Header titleForHeader = {"New Header"}/>*/}
            {/*<Body titleForBody = {"New Body"}/>*/}
            {/*<Footer titleForFooter = {"New Footer"}/>*/}
            {/*<NewComponent />*/}
            {/*<YouTube  />*/}
            {/*<Button name={"Latte"} callBack={() => someDate("Ama Vasia!")}/>*/}
            {/*<Button name={"RED BUTTON!"} callBack={() => someDate2("Ama Piotrek!")}/>*/}
            {/*<UseState />*/}
            {/*<Money />*/}
        </div>
    );
}

export default App;
