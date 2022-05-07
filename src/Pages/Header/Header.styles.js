import { createStyles } from "@mantine/core";
export const HEADER_HEIGHT = 60;
export const useAppHeaderStyles = createStyles((theme) => ({
    root: {
        position: "relative",
        zIndex: 1,
    },

    dropdown: {
        position: "absolute",
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginRight: "auto",
        },
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.violet[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.violet[0],
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors.violet[0],
            color: theme.colors.violet[theme.colorScheme === "dark" ? 3 : 7],
        },
    },
    social: {
        width: 260,

        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginRight: "auto",
        },
    },
    logo: {
        fontFamily: "Caveat",
        fontWeight: 800,
        marginRight: 10,
        paddingRight: 10,
        fontSize: theme.fontSizes.xl * 1.8,
        [theme.fn.smallerThan("sm")]: {
            fontSize: theme.fontSizes.xl * 1.3,
        },
    },
}));
