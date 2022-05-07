import { useMantineTheme } from "@mantine/core";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    let theme = useMantineTheme();
    return (
        <div>
            <Link
                style={{
                    backgroundColor:
                        match &&
                        theme.colors.violet[
                            theme.colorScheme === "dark" ? 5 : 0
                        ],
                    color:
                        match &&
                        theme.colors.violet[
                            theme.colorScheme === "dark" ? 2 : 7
                        ],
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;
