import React, { useState } from "react";
import NotificationContext from "./NotificationContext";

export default function NotificationProvider({ children }) {
    const [count, setCount] = useState(0);

    const addNotification = () => setCount((prev) => prev + 1)
    const clearNotification = () => setCount(0)

    const contextValue = { count, addNotification, clearNotification }

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    )
}
