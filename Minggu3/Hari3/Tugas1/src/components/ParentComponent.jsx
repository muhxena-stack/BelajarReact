import React, { useState } from "react";
import ChildWithoutMemo from "./ChildWithoutMemo"; // Tanpa memo 
import ChildWithMemo from "./ChildWithMemo";

export default function ParentComponent() {
    const [parentCount, setParentCount] = useState(0);
    const [otherState, setOtherState] =  useState(0)
    console.log("ParentComponent di-render")

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif"}}>
            <h2> Soal 1 Implementasikan React memo</h2>
            <p>Parent Count: {parentCount}</p>
            <p>Other State: {otherState}</p>

            <button onClick={() => setParentCount(parentCount + 1)}> Tambah Parent Count</button>
            <button onClick={() => setOtherState(otherState + 1)}>Tambah Other State</button>
            <hr />

            <ChildWithoutMemo count={parentCount} />
            <ChildWithMemo count={parentCount} />
        </div>
    )
}