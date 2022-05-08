import { createStyles } from "@mantine/core";

export const useFooterStyles = createStyles((theme) => ({
    footer: {
        marginTop: 50,
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
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
    logo: {
        fontFamily: "Caveat",
        fontWeight: 500,
        fontSize: theme.spacing.xl,
        marginTop: 8,
        paddingRight: 10,
    },
}));
