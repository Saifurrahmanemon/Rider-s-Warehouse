import {
    Badge,
    Button,
    createStyles,
    Image,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import { TruckDelivery } from "tabler-icons-react";
import useInventoryDetails from "../../../Hooks/useInventoryDetails";

const useStyles = createStyles((theme) => ({
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
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: "flex",
        marginTop: theme.spacing.xl,
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
    },
    text: {
        color: theme.colorScheme === "dark" ? "white" : "black",
    },
}));
const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const { classes } = useStyles();
    const { img, price, quantity, description, name, supplier } = inventory;
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>{name}</Title>
                <div>
                    <Badge
                        color="violet"
                        size="lg"
                        variant="light"
                        my={2}
                        mb={5}
                    >
                        {supplier}
                    </Badge>
                    <Badge color="green" variant="light" my={2} ml={20} mb={5}>
                        available
                    </Badge>
                </div>
                <Text weight={500} size="sm" mb={5} color="dimmed">
                    Price:{" "}
                    <Text className={classes.text} component="span" size="md">
                        ${price}/pc
                    </Text>
                </Text>
                <Text weight={500} size="sm" mb={5} color="dimmed">
                    Quantity:{" "}
                    <Text component="span" className={classes.text} size="md">
                        {quantity}
                    </Text>
                </Text>
                <Text size="sm" lineClamp={4} color="dimmed">
                    {description}
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Your email"
                        classNames={{
                            input: classes.input,
                            root: classes.inputWrapper,
                        }}
                    />
                    <Button className={classes.control}>
                        restock the items
                    </Button>
                </div>
                <Button
                    leftIcon={
                        <TruckDelivery
                            size={20}
                            strokeWidth={2}
                            color={"violet"}
                        />
                    }
                    variant="outline"
                    color="violet"
                    my={20}
                >
                    Delivered
                </Button>
            </div>
            <Image src={img} withPlaceholder className={classes.image} />
        </div>
    );
};

export default InventoryDetails;
