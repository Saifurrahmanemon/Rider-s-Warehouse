import { createStyles } from "@mantine/core";

export const useInventoryDetailsStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing.lg,
        padding: theme.spacing.xl * 2,
        borderRadius: theme.radius.md,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[3]
        }`,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: "40%",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: "100%",
        },
    },

    body: {
        paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyItems: "center",
            margin: 10,
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 17,
        },
    },

    controls: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        width: "400px",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            justifyContent: "center",
        },
    },

    inputWrapper: {
        width: "50%",
        flex: "1",
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        fontSize: 15,
    },
    text: {
        color: theme.colorScheme === "dark" ? "white" : "black",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 12,
            margin: 20,
        },
    },

  
}));
