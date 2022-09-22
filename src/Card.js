import React from 'react';
import CardData from './CardData';
import TravelLog from "./Data";

export default function Card(){
    let travelPlaces = TravelLog.map(item => {
        return (
            <CardData 
                key = {item.id}
                item = {item}
            />
        )
    })
    return travelPlaces
}

