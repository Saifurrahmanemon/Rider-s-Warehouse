import {
    Button,
    Container,
    Group,
    NumberInput,
    Select,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import React from "react";
import FileBase64 from "react-file-base64";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useAddInventoryStyles } from "./AddInventory.styles";

//? 🚧 dropzone is under construction 🚧
//* kept it for future reference
export default function AddInventory() {
    const { classes } = useAddInventoryStyles();
    // const theme = useMantineTheme();
    const [user] = useAuthState(auth);
    let email = user?.email;

    const form = useForm({
        initialValues: {
            name: "",
            supplier: "",
            price: 1000,
            quantity: 0,
            description: "",
            email: email,
            img: "",
        },
    });
    const handleOnSubmit = async (values) => {
        const { data } = await axios.post(
            "https://radiant-anchorage-61997.herokuapp.com/addInventory",
            values
        );

        if (data.insertedId) {
            showNotification({
                color: "green",
                title: "Yeah!!",
                message: "uploaded successfully 😀",
            });
        }
    };

    return (
        <Container my={20} size="xs" px="xs">
            <Text size="lg" weight={700} className={classes.title}>
                Add New Item
            </Text>
            <form onSubmit={form.onSubmit(handleOnSubmit)}>
                <TextInput
                    label="Name"
                    placeholder="Name of your bike"
                    classNames={classes}
                    required
                    {...form.getInputProps("name")}
                />

                <Select
                    style={{ marginTop: 20, zIndex: 2 }}
                    data={["Honda", "Suzuki", "Kawasaki", "Husqvarna"]}
                    placeholder="Pick one"
                    label="Company Name"
                    classNames={classes}
                    required
                    {...form.getInputProps("supplier")}
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
                    required
                    {...form.getInputProps("price")}
                />
                <NumberInput
                    classNames={classes}
                    my={20}
                    max={50}
                    min={0}
                    label="Quantity"
                    required
                    {...form.getInputProps("quantity")}
                />

                <TextInput
                    label="Description"
                    placeholder="About your product"
                    classNames={{
                        input: classes.descriptionInput,
                        label: classes.label,
                    }}
                    required
                    {...form.getInputProps("description")}
                />
                {/*! dropzone under construction  */}
                {/* <Dropzone
                    onDrop={(files) => {
                        console.log(files);
                    }}
                    onReject={(files) => console.log("rejected files", files)}
                    maxSize={1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    my={20}
                    disabled
                    label="under construction"
                >
                    {(status) => dropzoneChildren(status, theme)}
                </Dropzone> */}
                <Group my={20}>
                    <FileBase64
                        multiple={false}
                        onDone={({ base64 }) =>
                            form.setFieldValue("img", base64)
                        }
                    />
                </Group>
                <Group position="center" mt="md">
                    <Button
                        type="submit"
                        variant="light"
                        color="violet"
                        className={classes.control}
                    >
                        Add Item
                    </Button>
                </Group>
            </form>
        </Container>
    );
}
