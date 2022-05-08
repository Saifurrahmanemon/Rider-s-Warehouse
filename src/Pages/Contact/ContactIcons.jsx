import { Box, createStyles, Group, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { At, MapPin, Phone, Sun } from "tabler-icons-react";

const useStyles = createStyles((theme, { variant }) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === "gradient"
                ? `linear-gradient(135deg, ${theme.colors.violet[4]} 0%, ${theme.colors.violet[6]} 100%)`
                : "none",
        backgroundColor: "transparent",
    },

    title: {
        color:
            variant === "gradient"
                ? theme.colors.gray[6]
                : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === "gradient" ? theme.black : theme.white,
    },
}));

function ContactIcon({
    icon: Icon,
    title,
    description,
    variant = "gradient",
    className,
    ...others
}) {
    const { classes, cx } = useStyles({ variant });
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === "gradient" ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size={24} />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size={24} />
                </Box>
            )}

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: "Email", description: "riders@warehouse.dev", icon: At },
    { title: "Phone", description: "+32 (200) 420 20 35", icon: Phone },
    { title: "Address", description: "844 Sylhet Park avenue", icon: MapPin },
    { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: Sun },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
    const items = data.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
    ));
    return <Group direction="column">{items}</Group>;
}
