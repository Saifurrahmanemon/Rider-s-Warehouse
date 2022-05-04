import { Button, Container, Text, Title } from "@mantine/core";
import React from "react";
import { useBannerStyles } from "./Banner.styles";

export default function Banner() {
    const { classes } = useBannerStyles();
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
                            motorcycle supplier
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Rider's Warehouse is one of the top motorcycle
                            supplier in the world.Rider’s Warehouse is proud
                            dealers for Honda motorcycles, Husqvarna motorcycles
                            and Suzuki Motorcycles. We also offer various
                            quality imported motorcycles.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: "pink", to: "violet" }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
