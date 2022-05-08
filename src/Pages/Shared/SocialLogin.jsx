import { Group } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "./Loading";
import { GoogleButton } from "./SocialButtons";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user);
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            showNotification({
                color: "violet",
                title: `Welcome back ${user?.user?.displayName}`,
                message: "You have successfully logged in! 😊",
            });
            navigate(from, { replace: true });
        }
    }, [user, token, from, navigate]);
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/popup-closed-by-user":
                    showNotification({
                        color: "red",
                        title: `Opps!`,
                        message:
                            "You closed the popup window, please try again",
                    });
                    break;
                default:
                    showNotification({
                        color: "red",
                        title: `Opps!`,
                        message: "Something went wrong",
                    });
            }
        }
    }, [error]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Group grow mb="md" mt="md">
                <GoogleButton radius="xl" onClick={() => signInWithGoogle()}>
                    Google
                </GoogleButton>
            </Group>
        </div>
    );
};

export default SocialLogin;
