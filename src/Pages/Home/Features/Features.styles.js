import { createStyles } from "@mantine/core";

export const useFeatureStyles = createStyles((theme) => ({
    feature: {
        position: "relative",
        paddingTop: theme.spacing.xl,
        paddingLeft: theme.spacing.xl,
    },

    overlay: {
        position: "absolute",
        height: 100,
        width: 160,
        top: 0,
        left: 0,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors.violet[9], 0.25)
                : theme.colors.violet[0],
        zIndex: 1,
    },

    content: {
        position: "relative",
        zIndex: 2,
    },

    icon: {
        color: theme.colors.violet[theme.colorScheme === "dark" ? 4 : 6],
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
}));
