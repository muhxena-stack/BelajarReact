import React, { useState } from "react";

export default function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    const scaleName  = {
        c:'Celsius',
        f:'Fahrenheit'

    }


    return (
        <fieldset>
            <legend>Masukan dalam {scaleName[scale]}:</legend>
            <input type="Number"  value={temperature} onChange={(e) => onTemperatureChange (e.target.value)}/>
        </fieldset>
    )
}
  