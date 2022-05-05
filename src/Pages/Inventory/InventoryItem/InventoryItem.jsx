import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useInventoryItemStyles } from "./InventoryItem.styles";

function InventoryItem({ item }) {
    const { name, img, description, price, _id, supplier, quantity } = item;
    const { classes } = useInventoryItemStyles();
    const navigate = useNavigate();

    return (
        <Card
            shadow="sm"
            p="lg"
            withBorder
            radius="md"
            className={classes.card}
        >
            <Card.Section component="a" target="_blank">
                <Card.Section pb="md" className={classes.imageSection}>
                    <Image
                        p={3}
                        src={img}
                        alt="Tesla Model S"
                        height={200}
                        withPlaceholder
                        radius="md"
                    />
                </Card.Section>
            </Card.Section>

            <Group position="apart" pt="md" style={{ marginBottom: 5 }}>
                <Text weight={500}>{name}</Text>
                <Badge color="pink" variant="light">
                    {supplier}
                </Badge>
            </Group>

            <Text lineClamp={4} mt="xl" mb="xl" color="dimmed" size="xs">
                {description}
            </Text>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                            ${price}
                        </Text>
                        <Text
                            size="sm"
                            color="dimmed"
                            weight={500}
                            sx={{ lineHeight: 1 }}
                            mt={4}
                        >
                            {quantity}/pcs
                        </Text>
                    </div>

                    <Button
                        variant="gradient"
                        gradient={{ from: "pink", to: "violet", deg: 45 }}
                        radius="xl"
                        style={{ flex: 1 }}
                        onClick={() => navigate(`/inventory/${_id}`)}
                    >
                        Manage Stock
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}

export default InventoryItem;
