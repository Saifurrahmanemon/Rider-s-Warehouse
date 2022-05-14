import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";

function ShowModal() {
    const modals = useModals();
    const [value, setValue] = useState(false);
    modals.openConfirmModal({
        title: "Delete your profile",
        centered: true,
        children: (
            <Text size="sm">
                Are you sure you want to delete your profile? This action is
                destructive and you will have to contact support to restore your
                data.
            </Text>
        ),
        labels: { confirm: "Delete account", cancel: "No don't delete it" },
        confirmProps: { color: "red" },
        onCancel: () => setValue(false),
        onConfirm: () => setValue(true),
    });

    return value === true ? true : false;
}

export default ShowModal;
