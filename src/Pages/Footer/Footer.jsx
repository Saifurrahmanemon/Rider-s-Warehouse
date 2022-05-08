import { ActionIcon, Anchor, Group, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { BrandInstagram, BrandTwitter, BrandYoutube } from "tabler-icons-react";
import img from "../../Assets/Logos/check.png";
import { useFooterStyles } from "./Footer.styles";
const links = [
    {
        link: "/contact",
        label: "Contact",
    },
    {
        link: "/home",
        label: "Home",
    },
    {
        link: "/blog",
        label: "Blog",
    },
    {
        link: "/home",
        label: "Store",
    },
    {
        link: "/home",
        label: "Careers",
    },
];

export default function Footer() {
    const { classes } = useFooterStyles();
    const items = links.map((link) => (
        <Anchor
            component={Link}
            color="dimmed"
            key={link.label}
            to={link.link}
            sx={{ lineHeight: 1 }}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group spacing={0} noWrap position="left">
                    <img src={img} alt="logo" />{" "}
                    <Text
                        variant="gradient"
                        gradient={{ from: "pink", to: "violet" }}
                        weight={500}
                        className={classes.logo}
                    >
                        Ride's Warehouse
                    </Text>
                </Group>
                <Group className={classes.links}>{items}</Group>
                <Group spacing={0} position="right" noWrap>
                    <ActionIcon
                        href="https://github.com/Saifurrahmanemon"
                        component="a"
                        size="lg"
                    >
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon
                        href="https://github.com/Saifurrahmanemon"
                        component="a"
                        size="lg"
                    >
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon
                        href="https://github.com/Saifurrahmanemon"
                        component="a"
                        size="lg"
                    >
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}
