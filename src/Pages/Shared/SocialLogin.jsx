import { Group } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { GoogleButton } from "./SocialButtons";

const SocialLogin = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
    useEffect(() => {
        if (user) {
            showNotification({
                color: "violet",
                title: `Welcome ${user?.user?.displayName}`,
                message: "You have successfully logged in! 😊",
            });
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

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
