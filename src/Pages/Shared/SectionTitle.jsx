import { Text } from "@mantine/core";
import React from "react";
import { useAppHeaderStyles } from "../Header/Header.styles";

const SectionTitle = ({ children }) => {
    const { classes } = useAppHeaderStyles();
    return (
        <Text
            className={classes.logo}
            component="h2"
            align="center"
            inherit
            variant="gradient"
            gradient={{ from: "pink", to: "violet", deg: 45 }}
        >
            {children}
        </Text>
    );
};

export default SectionTitle;
