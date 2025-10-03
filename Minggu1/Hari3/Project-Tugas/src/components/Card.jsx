import React from "react";

function Card ({ children }) {
    return (
        <div style={{
            border: "1px solid #333",
            borderradius: "8px",
            padding: "16px",
            margin: "10px",
            maxWidth: "300px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
        }}>
            {children}
        </div>
    )
}

export default Card;