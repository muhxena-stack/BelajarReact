import { useState } from "react";
import { tryConvert, toCelsius, toFahrenheit} from "../Utils/lupa";
import TemperatureInput from "./TemperatureInput";


export default function Kalkulator() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelciusChange = (temp) => {
        setTemperature(temp);
        setScale('c');
    }

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale('f');
    }

    const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={handleCelciusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
        </div>
    )
}