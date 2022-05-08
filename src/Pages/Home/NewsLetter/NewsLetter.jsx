import { Box, Button, Image, Text, TextInput, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import img from "../../../Assets/Logos/newsLatter.svg";
import auth from "../../../firebase.init";
import SectionTitle from "../../Shared/SectionTitle";
import { useNewsLetterStyles } from "./NewsLetter.styles";

export default function NewsLetterBanner() {
    const { classes } = useNewsLetterStyles();
    const [user] = useAuthState(auth);
    const name = user?.displayName.split(" ")[0];

    const handleShowNotify = () => {
        showNotification({
            color: "grape",
            title: `Thank You ${name} 💖 `,
            message: "For subscribing",
        });
    };
    return (
        <Box my={50}>
            <SectionTitle>NewsLetter</SectionTitle>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>
                        Wait a minute {name}.. 😀
                    </Title>
                    <Text weight={500} size="lg" mb={5}>
                        Subscribe to our newsletter!
                    </Text>
                    <Text size="sm" color="dimmed">
                        You will never miss important product updates, latest
                        news and community QA sessions. Our newsletter is once a
                        week, every Sunday.
                    </Text>

                    <div className={classes.controls}>
                        <TextInput
                            placeholder="Your email"
                            classNames={{
                                input: classes.input,
                                root: classes.inputWrapper,
                            }}
                        />
                        <Button
                            color="violet"
                            variant="light"
                            className={classes.control}
                            onClick={handleShowNotify}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
                <Image src={img} className={classes.image} />
            </div>
        </Box>
    );
}
