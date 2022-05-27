import {
   Button,
   Container,
   Group,
   NumberInput,
   Select,
   Text,
   TextInput,
   useMantineTheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import React, { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { API } from "../../../api/root";
import auth from "../../../firebase.init";
import { toBase64 } from "../../../utils/toBase64Converter";
import { dropzoneChildren } from "../../Shared/DropZoneConfig";
import { useAddInventoryStyles } from "./AddInventory.styles";

export default function AddInventory() {
   const { classes } = useAddInventoryStyles();
   const theme = useMantineTheme();
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

   const onDrop = useCallback(
      async (acceptedFiles) => {
         const [file] = acceptedFiles;

         const img = await toBase64(file);
         form.setFieldValue("img", img);
      },
      [form]
   );

   const onReject = (files) => {
      showNotification({
         color: "red",
         title: "Oops!!",
         message: `${files[0]?.errors[0]?.code} 😕`,
      });
   };
   const handleOnSubmit = async (values) => {
      console.log(values);
      const { data } = await axios.post(`${API}/addInventory`, values);

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

            <Dropzone
               onDrop={onDrop}
               onReject={onReject}
               maxSize={512 ** 2}
               accept={IMAGE_MIME_TYPE}
               my={20}
            >
               {(status) => dropzoneChildren(status, theme)}
            </Dropzone>

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
