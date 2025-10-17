import React from "react";

function ChildWithoutMemo({ count }) {
    console.log("ChildWithoutMem di-render")
    return <p>Child tanpa memo, count: {count}</p>
}

export default ChildWithoutMemo;

