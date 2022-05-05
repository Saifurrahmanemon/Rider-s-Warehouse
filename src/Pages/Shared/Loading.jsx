import { Group, Loader } from "@mantine/core";

function Loading() {
    return (
        <Group position="center" m="sm">
            <Loader color="violet" variant="dots" />
        </Group>
    );
}
export default Loading;
