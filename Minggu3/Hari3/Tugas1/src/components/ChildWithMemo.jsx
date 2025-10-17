import React from "react";

const ChildWithMemo = React.memo(function ChildWithMemo({ count }) {
    console.log("ChildWithMemo di-render")
    return <p>Child dengan memo, count: {count}</p>
})

export default ChildWithMemo;
