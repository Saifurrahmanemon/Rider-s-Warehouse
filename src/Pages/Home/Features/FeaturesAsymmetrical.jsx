import { Box, SimpleGrid } from "@mantine/core";
import { Certificate, Coin, Truck } from "tabler-icons-react";
import SectionTitle from "../../Shared/SectionTitle";
import Feature from "./Features";
const featureData = [
    {
        icon: Truck,
        title: "Free Worldwide shipping",
        description: "Rider's warehouse handle Worldwide shipping for free!!",
    },
    {
        icon: Certificate,
        title: "Keep Your Record Safe",
        description:
            "Wether the world exists or not ,but your data wont get lost",
    },
    {
        icon: Coin,
        title: "Very Affordable Pricing",
        description: "Manage all your inventories at a very low cost!!",
    },
];

export function FeaturesAsymmetrical() {
    const items = featureData.map((item) => (
        <Feature {...item} key={item.title} />
    ));

    return (
        <Box mt={30} mb={80}>
            <SectionTitle>Features</SectionTitle>
            <SimpleGrid
                mt={50}
                cols={3}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                spacing={50}
            >
                {items}
            </SimpleGrid>
        </Box>
    );
}
