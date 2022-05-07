import { Affix, Anchor, Container, Group } from "@mantine/core";
import React from "react";
import { useFooterStyles } from "./Footer.styles";

//TODO: make the links working
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
    const { classes } = useFooterStyles();
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
                    <h3>logo</h3>
                    <Group className={classes.links}>{items}</Group>
                </Container>
            </div>
   
    );
}
