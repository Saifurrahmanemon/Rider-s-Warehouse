import { Anchor, Container, createStyles, Group } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 20,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: theme.spacing.md,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.sm,
        },
    },
}));
const links = [
    {
        link: "#",
        label: "Contact",
    },
    {
        link: "#",
        label: "Privacy",
    },
    {
        link: "#",
        label: "Blog",
    },
    {
        link: "#",
        label: "Careers",
    },
];
export default function Footer() {
    const { classes } = useStyles();
    const items = links.map((link) => (
        <Anchor
            color="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <h1>logo</h1>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}
