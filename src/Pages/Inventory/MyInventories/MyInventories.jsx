import {
    Avatar,
    Container,
    Group,
    Menu,
    ScrollArea,
    Table,
    Text,
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Messages, Note, Trash } from "tabler-icons-react";
import auth from "../../../firebase.init";

const MyInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;

    useEffect(() => {
        const getInventories = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/myItems?email=${email}`
            );
            setInventories(data);
        };
        getInventories();
    }, [inventories, user, email]);

    // rows for data
    const rows = inventories.map((item) => (
        <tr key={item._id}>
            <td>
                <Group spacing="sm">
                    <Avatar size={40} src={item.img} radius={40} />
                    <div>
                        <Text size="sm" weight={500}>
                            {item.name}
                        </Text>
                        <Text color="dimmed" size="xs">
                            {item.supplier}
                        </Text>
                    </div>
                </Group>
            </td>
            <td>
                <Text size="sm" weight={500} color="gray">
                    {email}
                </Text>
                <Text size="xs" color="dimmed">
                    Creator's Email
                </Text>
            </td>
            <td>
                <Text size="sm" weight={500} color="gray">
                    ${item.price}
                </Text>
                <Text size="xs" color="dimmed">
                    Rate
                </Text>
            </td>
            <td>
                <Text size="sm" weight={500} color="gray">
                    {item.quantity}
                </Text>
                <Text size="xs" color="dimmed">
                    quantity
                </Text>
            </td>
            <td>
                <Text size="sm" weight={500} color="gray">
                    Available
                </Text>
                <Text size="xs" color="dimmed">
                    status
                </Text>
            </td>
            <td>
                <Group spacing={0} position="right">
                    <Menu transition="pop" withArrow placement="end">
                        <Menu.Item icon={<Messages size={16} />}>
                            Delivered Item
                        </Menu.Item>
                        <Menu.Item icon={<Note size={16} />}>
                            Add New Item
                        </Menu.Item>
                        <Menu.Item icon={<Trash size={16} />} color="red">
                            Delete Item
                        </Menu.Item>
                    </Menu>
                </Group>
            </td>
        </tr>
    ));
    return (
        <div>
            <Container>
                <h1>my inventories </h1>

                <ScrollArea>
                    <Table sx={{ minWidth: 800 }} verticalSpacing="md">
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Container>
        </div>
    );
};

export default MyInventories;
