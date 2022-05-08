import { Button, Container, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBannerStyles } from "./Banner.styles";

export default function Banner() {
    const { classes } = useBannerStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            World's{" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "pink", to: "violet" }}
                            >
                                Number One
                            </Text>{" "}
                            motorcycle Warehouse
                        </Title>

                        <Text
                            lineClamp={5}
                            className={classes.description}
                            mt={30}
                        >
                            Rider's Warehouse is one of the top motorcycle
                            Warehouse management service in the world.Rider’s
                            Warehouse is proud dealer for Honda motorcycles,
                            Husqvarna motorcycles and Suzuki Motorcycles. We
                            also work with various quality imported motorcycles.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: "pink", to: "violet" }}
                            size="lg"
                            radius={10}
                            className={classes.control}
                            mt={40}
                            onClick={() => navigate("/inventory/myInventories")}
                        >
                            <Text>Manage Your Items</Text>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
