import {
    ActionIcon,
    Anchor,
    Avatar,
    Badge,
    Button,
    Container,
    Group,
    ScrollArea,
    Table,
    Text,
    useMantineTheme,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import deleteInventoryApi from "../../../api/deleteInventory";
import useInventories from "../../../Hooks/useInventories";

const companyColors = {
    honda: "purple",
    kawasaki: "cyan",
    suzuki: "pink",
};

//for future use
// const itemStatus = {
//     available: "green",
//     notAvailable: "red",
// };

export default function ManageInventories() {
    const navigate = useNavigate();
    const [inventories, setInventories] = useInventories();
    const modals = useModals();

    const theme = useMantineTheme();

    const handleDeleteItem = async (id) => {
        modals.openConfirmModal({
            title: "Delete Item",
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete this item? This action is
                    destructive and you will have to contact support to restore
                    your data.
                </Text>
            ),
            labels: { confirm: "Delete Item", cancel: "No don't delete it" },
            confirmProps: { color: "red" },
            onCancel: () =>
                showNotification({
                    color: "red",
                    title: `Canceled`,
                    message: "Deletion canceled",
                }),
            onConfirm: () => {
                deleteInventoryApi(id);
                const remainingInventories = inventories.filter(
                    (inventory) => inventory._id !== id
                );
                setInventories(remainingInventories);
            },
        });
    };

    const rows = inventories.map(
        ({ _id, img, name, supplier, quantity, price }) => (
            <tr key={_id}>
                <td>
                    <Group spacing="sm">
                        <Avatar size={30} src={img} />
                        <Text size="sm" weight={500}>
                            {name}
                        </Text>
                    </Group>
                </td>

                <td>
                    <Badge
                        color={companyColors[supplier?.toLowerCase()]}
                        variant={
                            theme.colorScheme === "dark" ? "light" : "outline"
                        }
                    >
                        {supplier}
                    </Badge>
                </td>
                <td>
                    <Badge
                        size="sm"
                        color="green"
                        variant={
                            theme.colorScheme === "dark" ? "light" : "outline"
                        }
                    >
                        Available
                    </Badge>
                </td>
                <td>
                    <Anchor
                        size="sm"
                        href="#"
                        onClick={(event) => event.preventDefault()}
                    >
                        {quantity}
                    </Anchor>
                </td>
                <td>
                    <Text size="sm" weight={500} color="gray">
                        ${price}
                    </Text>
                </td>
                <td>
                    <Group spacing={0} position="right">
                        <ActionIcon
                            onClick={() => handleDeleteItem(_id)}
                            color="red"
                        >
                            <Trash size={16} />
                        </ActionIcon>
                    </Group>
                </td>
            </tr>
        )
    );

    return (
        <Container>
            <Button
                onClick={() => navigate("/inventory/addInventory")}
                my={10}
                variant="light"
                color="violet"
                radius="md"
            >
                Add item
            </Button>
            <ScrollArea>
                <Table
                    sx={{ minWidth: 800 }}
                    horizontalSpacing="md"
                    verticalSpacing="xs"
                    fontSize="xs"
                    striped
                    highlightOnHover
                >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </Container>
    );
}
