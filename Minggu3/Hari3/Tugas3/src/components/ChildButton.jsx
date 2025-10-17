import React from "react";

function ChildButton({ onclick, label }) {
    console.log(`ChildButton "${label}" di-render`);
    return (
        <button onClick={onclick} style={{ marginRight: "10px"}}>
            {label}
        </button>
    );
}

// Gunakan React.memo agar hanya re-render jika props berubah
export default React.memo(ChildButton);
