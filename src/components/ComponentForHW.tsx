import React from "react";
import {FilterType} from "./Money";

type MoneyType = {
    filtration: () => void
    moneyObj: any
}



export const ComponentForHW = (props: MoneyType) => {

    return (
        <div>
            <ul>
                {props.moneyObj.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknote}</span>
                            <span>{item.nominal}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.filtration("All")}>All</button>
            <button onClick={() => props.filtration("Ruble")}>Ruble</button>
            <button onClick={() => props.filtration("Dollar")}>Dollar</button>
        </div>
    )

}