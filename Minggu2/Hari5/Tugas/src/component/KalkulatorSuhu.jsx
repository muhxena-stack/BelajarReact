import React, { useState } from "react";
import { tryConvert, toCelsius, toFahrenheit } from "../utils/conversion";
import TemperatureInput from "./TemperatureInput";

export default function KalkulatorSuhu() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale('c');
    };

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale('f');
    };

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
         <div className="calculator-container" >
            <h1>Soal 1</h1>
      <h2>Kalkulator Suhu 🌡️ (Lifting State Up)</h2>

      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />

      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <div className="result-box">
        <p>
          <strong>Suhu dalam Celsius:</strong> {celsius || "-"}
        </p>
        <p>
          <strong>Suhu dalam Fahrenheit:</strong> {fahrenheit || "-"}
        </p>
      </div>
    </div>
    )
}
