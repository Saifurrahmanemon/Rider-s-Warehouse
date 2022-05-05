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
import { showNotification } from "@mantine/notifications";
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import SocialLogin from "../../Shared/SocialLogin";
function Login(props) {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    showNotification({
                        color: "red",

                        message: "Invalid email, please provide a valid email",
                    });
                    break;
                case "auth/invalid-password":
                    showNotification({
                        color: "red",

                        message: "invalid password.😒",
                    });
                    break;
                case "auth/user-not-found":
                    showNotification({
                        color: "red",

                        message: "User not found. 🤔",
                    });
                    break;
                case "auth/wrong-password":
                    showNotification({
                        color: "red",
                        message: "Wrong password. 😑",
                    });
                    break;

                default:
                    showNotification({
                        color: "red",
                        title: `Opps!`,
                        message: "something went wrong. 🤯",
                    });
            }
        }
    }, [error]);

    // for form validation
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: ({ email, password }) => ({
            email: /^\S+@\S+$/.test(email)
                ? null
                : "Please Provide a valid email",
            password:
                password.length < 6
                    ? "Password should include at least 6 characters"
                    : null,
        }),
    });
    if (loading) {
        return <Loading />;
    }
    const handleLoginOnSubmit = async ({ email, password }) => {
        await signInWithEmailAndPassword(email, password);
    };

    return (
        <Container size={420} my={40}>
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
                    , Login with
                </Text>
                <SocialLogin />
                <Divider
                    label="Or continue with email"
                    labelPosition="center"
                    my="lg"
                />

                <form onSubmit={form.onSubmit(handleLoginOnSubmit)}>
                    <Group direction="column" grow>
                        <TextInput
                            required
                            label="Email"
                            placeholder="rider@warehouse.dev"
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
                    <Group position="apart" mt="md">
                        <Anchor
                            component="button"
                            onClick={() => navigate("/login/forgotpassword")}
                            color="gray"
                            size="xs"
                        >
                            Forgot password? 😕
                        </Anchor>
                    </Group>
                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="gray"
                            size="xs"
                            onClick={() => navigate("/register")}
                        >
                            Dont have an account? Register
                        </Anchor>
                        <Button
                            type="submit"
                            gradient={{ from: "pink", to: "violet" }}
                            variant="gradient"
                        >
                            Login
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}
export default Login;
