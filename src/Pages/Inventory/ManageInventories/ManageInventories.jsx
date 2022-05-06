import {
    ActionIcon,
    Anchor,
    Avatar,
    Badge,
    Container,
    Group,
    ScrollArea,
    Table,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Pencil, Trash } from "tabler-icons-react";
import useInventories from "../../../Hooks/useInventories";

const companyColors = {
    honda: "purple",
    kawasaki: "cyan",
    suzuki: "pink",
};

const itemStatus = {
    available: "green",
    notAvailable: "red",
};

export default function ManageInventories() {
    const [inventories] = useInventories();

    const theme = useMantineTheme();
    const rows = inventories.map((item) => (
        <tr key={item._id}>
            <td>
                <Group spacing="sm">
                    <Avatar size={30} src={item.img} />
                    <Text size="sm" weight={500}>
                        {item.name}
                    </Text>
                </Group>
            </td>

            <td>
                <Badge
                    color={companyColors[item.supplier.toLowerCase()]}
                    variant={theme.colorScheme === "dark" ? "light" : "outline"}
                >
                    {item.supplier}
                </Badge>
            </td>
            <td>
                <Badge
                    toLowerCase
                    size="sm"
                    color="green"
                    variant={theme.colorScheme === "dark" ? "light" : "outline"}
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
                    {item.quantity}
                </Anchor>
            </td>
            <td>
                <Text size="sm" weight={500} color="gray">
                    ${item.price}
                </Text>
            </td>
            <td>
                <Group spacing={0} position="right">
                    <ActionIcon>
                        <Pencil size={16} />
                    </ActionIcon>
                    <ActionIcon color="red">
                        <Trash size={16} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));

    return (
        <Container>
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
