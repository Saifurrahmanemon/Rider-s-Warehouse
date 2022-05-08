import { showNotification } from "@mantine/notifications";
import React from "react";

const WelcomeNotify = ({ name }) => {
    console.log(name);
    return (
        <>
            {showNotification({
                color: "violet",
                title: `Welcome ${name}`,
                message: "You have successfully logged in! 😊",
            })}
        </>
    );
};

export default WelcomeNotify;
