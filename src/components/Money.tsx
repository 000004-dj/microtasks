import React, {useState} from "react";
import {ComponentForHW} from "./ComponentForHW";

export const FilterType = "All" | "Ruble" | "Dollar"

export const Money = () => {
    let [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a1234567890"},
        {banknote: "dollar", nominal: 50, number: "z1234567890"},
        {banknote: "ruble", nominal: 100, number: "w1234567890"},
        {banknote: "dollar", nominal: 100, number: "e1234567890"},
        {banknote: "dollar", nominal: 50, number: "c1234567890"},
        {banknote: "ruble", nominal: 100, number: "r1234567890"},
        {banknote: "dollar", nominal: 50, number: "x1234567890"},
        {banknote: "ruble", nominal: 50, number: "v1234567890"},
    ])

    let [filter, setFilter] = useState("all")


     let currentMoney = money;

    if (filter === "Ruble") {
        currentMoney = money.filter(item => item.banknote === "ruble")
    }

    if (filter === "Dollar") {
        currentMoney = money.filter(item => item.banknote === "dollar")
    }


    const onClickFilterHandler = (nameOfButton: FilterType) => {
        setFilter(nameOfButton)
    }


    return (
        <div>
            {/*<ul>*/}
            {/*    {currentMoney.map((objFormMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objFormMoneyArr.banknote}</span>*/}
            {/*                <span>{objFormMoneyArr.nominal}</span>*/}
            {/*                <span>{objFormMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<button onClick={() => onClickFilterHandler("All")}>All</button>*/}
            {/*<button onClick={() => onClickFilterHandler("Ruble")}>Ruble</button>*/}
            {/*<button onClick={() => onClickFilterHandler("Dollar")}>Dollar</button>*/}
            <ComponentForHW filtration={onClickFilterHandler} moneyObj={currentMoney}/>
        </div>


    )
}

