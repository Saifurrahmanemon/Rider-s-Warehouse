import { Text } from "@mantine/core";
import React from "react";
import { useFeatureStyles } from "./Features.styles";

export default function Feature({
    icon: Icon,
    title,
    description,
    className,
    ...others
}) {
    const { classes, cx } = useFeatureStyles();

    return (
        <div className={cx(classes.feature, className)} {...others}>
            <div className={classes.overlay} />

            <div className={classes.content}>
                <Icon size={38} className={classes.icon} />
                <Text
                    weight={700}
                    size="lg"
                    mb="xs"
                    mt={5}
                    className={classes.title}
                >
                    {title}
                </Text>
                <Text color="dimmed" size="sm">
                    {description}
                </Text>
            </div>
        </div>
    );
}
