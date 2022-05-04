import { Button, Container, Group, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotFoundStyles } from "./NotFound.styles";

// mantime custom design

function NotFound() {
    const { classes } = useNotFoundStyles();
    const navigate = useNavigate();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>
                You have found a secret place.
            </Title>
            <Text
                color="dimmed"
                size="lg"
                align="center"
                className={classes.description}
            >
                Unfortunately, this is only a 404 page. You may have mistyped
                the address, or the page has been moved to another URL.
            </Text>
            <Group position="center">
                <Button
                    variant="subtle"
                    onClick={() => navigate("/")}
                    size="md"
                >
                    Take me back to home page
                </Button>
            </Group>
        </Container>
    );
}
export default NotFound;
