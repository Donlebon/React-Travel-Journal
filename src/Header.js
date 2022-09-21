import React from 'react'
import world from "./world.png"

export default function Header(){
    return (
        <header>
            <img src = {world}  alt = "world"/>
            <h1> my travel journal.</h1>
        </header>
    )
}