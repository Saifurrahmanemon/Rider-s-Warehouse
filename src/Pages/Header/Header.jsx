import {
    ActionIcon,
    Burger,
    Container,
    Group,
    Header,
    Paper,
    Text,
    Transition,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrandInstagram, BrandTwitter, BrandYoutube } from "tabler-icons-react";
import { HEADER_HEIGHT, useAppHeaderStyles } from "./Header.styles";

const links = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "about",
        label: "About",
    },
    {
        link: "login",
        label: "Login",
    },
    {
        link: "blog",
        label: "Blog",
    },
];

export function AppHeader() {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useAppHeaderStyles();

    // for navigating to different pages
    const items = links.map((link) => (
        <Link
            key={link.link}
            to={link.link}
            className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
            })}
            onClick={() => {
                setActive(link.link);
                toggleOpened(false);
            }}
        >
            {link.label}
        </Link>
    ));

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Text
                    className={classes.logo}
                    component="h1"
                    inherit
                    variant="gradient"
                    gradient={{ from: "pink", to: "violet" }}
                >
                    Rider's Warehouse
                </Text>
                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>

                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                />

                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}
