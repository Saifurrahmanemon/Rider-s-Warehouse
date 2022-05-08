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
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Login, Logout } from "tabler-icons-react";
import auth from "../../firebase.init";
import CustomLink from "../Shared/CustomLink";
import ThemeToggleButton from "../Shared/ThemeToggleButton";
import { HEADER_HEIGHT, useAppHeaderStyles } from "./Header.styles";

const links = [
    {
        link: "/home",
        label: "Home",
    },
    {
        link: "/contact",
        label: "Contact",
    },
    {
        link: "/blog",
        label: "Blog",
    },
];
const linkForUsers = [
    {
        link: "/inventory/manageInventories",
        label: "Manage Inventories",
    },
    {
        link: "/inventory/addInventory",
        label: "Add Items",
    },
    {
        link: "/inventory/myInventories",
        label: "My Items",
    },
];

export default function AppHeader() {
    const [user] = useAuthState(auth);
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes } = useAppHeaderStyles();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
    };

    // fixed navigation  links
    const items = links.map((link) => (
        <CustomLink key={link.link} className={classes.link} to={link.link}>
            {link.label}
        </CustomLink>
    ));
    // changeable
    const itemsForUsers = linkForUsers.map((link) => (
        <CustomLink key={link.link} className={classes.link} to={link.link}>
            {link.label}
        </CustomLink>
    ));

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Text
                    className={classes.logo}
                    component="h1"
                    onClick={() => navigate("/")}
                    inherit
                    variant="gradient"
                    gradient={{ from: "pink", to: "violet" }}
                >
                    Rider's Warehouse
                </Text>
                <Group spacing={1} className={classes.links}>
                    {items}
                    {user && itemsForUsers}
                </Group>
                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    {!user ? (
                        <ActionIcon mr="xs" size="lg">
                            <Login
                                onClick={() => navigate("/login")}
                                size={20}
                                strokeWidth={2}
                                color={"purple"}
                            />
                        </ActionIcon>
                    ) : (
                        <ActionIcon mr="xs" size="lg">
                            <Logout
                                onClick={handleSignOut}
                                size={20}
                                strokeWidth={2}
                                color={"red"}
                            />
                        </ActionIcon>
                    )}

                    <ThemeToggleButton />
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
                            {user && itemsForUsers}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}
