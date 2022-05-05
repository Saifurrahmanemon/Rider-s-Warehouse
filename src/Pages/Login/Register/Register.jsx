import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import SocialLogin from "../../Shared/SocialLogin";

export default function Register(props) {
    // for creating user
    const [createUserWithEmailAndPassword, , loading] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    // for from validation
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            terms: true,
        },

        validate: ({ name, email, password, confirmPassword }) => ({
            name: name.length < 3 ? "Too short name" : null,
            email: /^\S+@\S+$/.test(email)
                ? null
                : "Please Provide a valid email",
            password:
                password.length < 6
                    ? "Password should include at least 6 characters"
                    : null,
            confirmPassword:
                password !== confirmPassword ? "Passwords did not match" : null,
        }),
    });

    const handleRegisterOnSubmit = async ({ name, password, email }) => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("profile updated");
        navigate("/");
    };

    if (loading || updating) {
        return <Loading></Loading>;
    }

    return (
        <Container size={420} my={50}>
            <Paper radius="md" p="xl" withBorder>
                <Text size="md" weight={500}>
                    Welcome to{" "}
                    <Text
                        mx={1}
                        component="span"
                        variant="gradient"
                        gradient={{ from: "pink", to: "violet" }}
                    >
                        Rider's Warehouse
                    </Text>
                    , Register with
                </Text>

                <SocialLogin />

                <Divider
                    label="Or continue with email"
                    labelPosition="center"
                    my="lg"
                />

                <form onSubmit={form.onSubmit(handleRegisterOnSubmit)}>
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
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            required
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "name",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("name")}
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
                            {...form.getInputProps("password")}
                        />
                        <PasswordInput
                            required
                            label="confirmPassword"
                            placeholder="confirm password"
                            value={form.values.confirmPassword}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "confirmPassword",
                                    event.currentTarget.value
                                )
                            }
                            {...form.getInputProps("confirmPassword")}
                        />

                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "terms",
                                    event.currentTarget.checked
                                )
                            }
                        />
                    </Group>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="gray"
                            size="xs"
                            onClick={() => navigate("/login")}
                        >
                            Already have an account? Login
                        </Anchor>
                        <Button
                            disabled={!form.values.terms}
                            type="submit"
                            gradient={{ from: "pink", to: "violet" }}
                            variant="gradient"
                        >
                            Register
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}
