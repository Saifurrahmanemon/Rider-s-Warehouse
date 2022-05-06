import {
    ActionIcon,
    Anchor,
    Badge,
    Box,
    Button,
    Group,
    Image,
    NumberInput,
    Text,
    Title,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TruckDelivery } from "tabler-icons-react";
import useInventoryDetails from "../../../Hooks/useInventoryDetails";
import { useInventoryDetailsStyles } from "./InventoryDetails.styles";

const InventoryDetails = () => {
    const navigate = useNavigate();
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const { classes } = useInventoryDetailsStyles();
    const [value, setValue] = useState(0);
    const handlers = useRef();
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
                    <Group spacing={5} my={10}>
                        <ActionIcon
                            size={22}
                            variant="default"
                            onClick={() => handlers.current.decrement()}
                        >
                            –
                        </ActionIcon>

                        <NumberInput
                            hideControls
                            value={value}
                            onChange={(val) => setValue(val)}
                            handlersRef={handlers}
                            max={10}
                            min={0}
                            step={1}
                            styles={{
                                input: { width: 34, textAlign: "center" },
                            }}
                        />

                        <ActionIcon
                            size={22}
                            variant="default"
                            onClick={() => handlers.current.increment()}
                        >
                            +
                        </ActionIcon>
                    </Group>
                    <Button
                        variant="subtle"
                        color="grape"
                        size="xs"
                        mx="md"
                        compact
                        uppercase
                    >
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

                <Box>
                    <Anchor
                        align="center"
                        inline="false"
                        color="gray"
                        component={Link}
                        to="/inventory/manageInventories"
                    >
                        Manage inventories
                    </Anchor>
                </Box>
            </div>
            <Image src={img} withPlaceholder className={classes.image} />
        </div>
    );
};

export default InventoryDetails;
