import React, { use, useState }from "react";

function SyntheicEvent() {
    const [inputValue, setInputValue] = useState("");

    // Tangani klik pada link
    function handleLinkClick() {
        event.preventDefault();
        console.log("Link diklik! (default action dibatalkan)");
    }

    // Tangani perubahan teks pada input
    function handleInputChange(event) {
        console.log("Isi input:", event.target.value)
        setInputValue(event.target.value);
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "20px"}}>
            <h1>Soal 2</h1>
            <h2>SyntheticEvent di React</h2>

            {/* Link dengan preventDefault */}
            <a href="https://www.google.com/?hl=id" onClick={handleLinkClick} style={{color: "blue", textDecoration: "none", fontSize: "18px"}}>Klik link ini </a>

            <div style={{marginTop: "20px"}}>
                <input type="text" placeholder="Ketik sesuatu..." onChange={handleInputChange} value={inputValue} style={{padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", width: "250px"}} />

                <p style={{marginTop: "10px"}}>
                    Nilai input saat ini: <b>{inputValue}</b>
                </p>
            </div>
        </div>
    );
}

export default SyntheicEvent;