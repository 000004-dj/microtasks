import React from "react";
import './NewComponent.module.css'

export type NewComponentType = {
    topCars: Array<TopCarsType>
}
export type TopCarsType = {
    manufacturer: string
    model: string
}


export const NewComponent = () => {
        const topCars = [
            {manufacturer: 'BMW', model: 'm5cs'},
            {manufacturer: 'Mercedes', model: 'e63s'},
            {manufacturer: 'Audi', model: 'rs6'}
        ]

        return (
            <>
                <table>
                    <tr>
                        {topCars.map((car, index) => {
                            return (
                               <th>{car.manufacturer}</th>
                            )
                        })}
                    </tr>

                    <tr>
                        {topCars.map((car, index) => {
                            return (
                                 <td>{car.model}</td>
                            )
                        })}
                    </tr>

                </table>


            </>

        )
    }
;
