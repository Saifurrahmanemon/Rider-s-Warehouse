import {
    Button,
    Container,
    createStyles,
    Group,
    NumberInput,
    Select,
    Text,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import React from "react";
import { dropzoneChildren } from "../../../utils/DropZoneConfig";
const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },

    input: {
        height: "auto",
        paddingTop: 18,
    },

    label: {
        position: "absolute",
        pointerEvents: "none",
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
    title: {
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("sm")]: {
            marginBottom: theme.spacing.sm,
            fontSize: theme.spacing.md,
        },
    },
    control: {
        [theme.fn.smallerThan("sm")]: {
            flex: 1,
        },
    },
    descriptionInput: {
        height: "100px",
    },
}));

export default function AddInventory() {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Container my={20} size="xs" px="xs">
            <Text size="lg" weight={700} className={classes.title}>
                Add New Item
            </Text>
            <TextInput
                label="Name"
                placeholder="Name of your bike"
                classNames={classes}
            />

            <Select
                style={{ marginTop: 20, zIndex: 2 }}
                data={["Honda", "Suzuki", "Kawasaki", "Husqvarna"]}
                placeholder="Pick one"
                label="Company Name"
                classNames={classes}
            />
            <NumberInput
                classNames={classes}
                my={20}
                label="Price"
                defaultValue={1000}
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                formatter={(value) =>
                    !Number.isNaN(parseFloat(value))
                        ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : "$ "
                }
            />
            <NumberInput
                classNames={classes}
                my={20}
                max={50}
                min={0}
                label="Quantity"
            />

            <TextInput
                label="Description"
                placeholder="About your product"
                classNames={{
                    input: classes.descriptionInput,
                    label: classes.label,
                }}
                minRows={4}
            />

            <Dropzone
                onDrop={(files) => {
                    console.log(files);
                }}
                onReject={(files) => console.log("rejected files", files)}
                maxSize={1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                my={20}
            >
                {(status) => dropzoneChildren(status, theme)}
            </Dropzone>
            <Group position="center" mt="md">
                <Button
                    type="submit"
                    variant="outline"
                    color="violet"
                    className={classes.control}
                >
                    Add Item
                </Button>
            </Group>
        </Container>
    );
}
