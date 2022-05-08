import { createStyles } from "@mantine/core";

export const useBannerStyles = createStyles((theme) => ({
    root: {
        backgroundColor: "#11284b",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
            "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1611241443322-b5524914fe20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        paddingTop: theme.spacing.xl * 3,
        paddingBottom: theme.spacing.xl * 3,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("md")]: {
            flexDirection: "column",
        },
    },

    image: {
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    content: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan("md")]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: 500,
        fontSize: 43,

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: 34,
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: 500,

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
        },
    },

    control: {
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 18,

        [theme.fn.smallerThan("md")]: {
            width: "100%",
        },
    },
}));
