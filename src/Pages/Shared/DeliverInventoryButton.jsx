import { Button, createStyles, Progress } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TruckDelivery } from "tabler-icons-react";
import updateInventoryQuantityApi from "../../api/updateInventoryQuantityApi";
import useInventoryDetails from "../../Hooks/useInventoryDetails";

const useStyles = createStyles((theme) => ({
    button: {
        position: "relative",
        transition: "background-color 150ms ease",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            margin: "10%",
        },
    },

    progress: {
        position: "absolute",
        bottom: -1,
        right: -1,
        left: -1,
        top: -1,
        height: "auto",
        backgroundColor: "transparent",
        zIndex: 0,
    },

    label: {
        position: "relative",
        zIndex: 1,
    },
}));

export default function DeliverInventoryButton() {
    const { classes, theme } = useStyles();
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const { quantity, name } = inventory;
    useEffect(() => {
        if (loaded) {
            updateInventoryQuantityApi(inventoryId, -1);
            showNotification({
                title: "Delivered 😀",
                message: `we successfully delivered ${name}`,
                color: "violet",
            });
        }
    }, [inventoryId, loaded, name]);

    const interval = useInterval(
        () =>
            setProgress((current) => {
                if (current < 100) {
                    return current + 1;
                }

                interval.stop();
                setLoaded(true);
                return 0;
            }),
        20
    );
    return (
        <Button
            leftIcon={
                <TruckDelivery
                    size={20}
                    strokeWidth={2}
                    color={loaded ? "green" : "violet"}
                />
            }
            variant="outline"
            my={20}
            disabled={quantity <= 0}
            className={classes.button}
            onClick={() =>
                loaded ? setLoaded(false) : !interval.active && interval.start()
            }
            color={loaded ? "green" : "violet"}
        >
            <div className={classes.label}>
                {progress !== 0
                    ? "Delivering"
                    : loaded
                    ? "Delivered"
                    : "Deliver"}
            </div>
            {progress !== 0 && (
                <Progress
                    value={progress}
                    className={classes.progress}
                    color={theme.fn.rgba(theme.colors.violet[2], 0.35)}
                    radius="sm"
                />
            )}
        </Button>
    );
}
