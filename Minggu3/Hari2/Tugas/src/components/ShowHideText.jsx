import React from "react";
import useToggle from "../hooks/useToggle";

export default function ShowHideText() {
    const [isVisible, toggleVisible] = useToggle(false);
    
    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? "Sembuyikan" : "Tampilkan"}
            </button>

            {isVisible && <p>Sudahkah kamu bersyukur hari ini?
              Kalau belum, yuk ucapkan Alhamdulillah 3x.</p>}
        </div>
    )
}