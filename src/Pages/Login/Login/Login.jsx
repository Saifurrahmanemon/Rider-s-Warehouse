import {
    Anchor,
    Button,
    Container,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { FacebookButton, GoogleButton } from "../../Shared/SocialButtons";

export default function Login(props) {
    // for form validation
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 6,
        },
    });

    

    return (
        <Container size={420} my={40}>
            <Paper radius="md" p="xl" withBorder>
                <Text size="lg" weight={500}>
                    Welcome to Motors, Login with
                </Text>

                <Group grow mb="md" mt="md">
                    <GoogleButton radius="xl">Google</GoogleButton>
                    <FacebookButton radius="xl">Twitter</FacebookButton>
                </Group>

                <Divider
                    label="Or continue with email"
                    labelPosition="center"
                    my="lg"
                />

                <form onSubmit={form.onSubmit(() => {})}>
                    <Group direction="column" grow>
                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "email",
                                    event.currentTarget.value
                                )
                            }
                            error={form.errors.email && "Invalid email"}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "password",
                                    event.currentTarget.value
                                )
                            }
                            error={
                                form.errors.password &&
                                "Password should include at least 6 characters"
                            }
                        />
                    </Group>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="gray"
                            size="xs"
                        >
                            Already have an account? Login
                        </Anchor>
                        <Button type="submit">Login</Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}
