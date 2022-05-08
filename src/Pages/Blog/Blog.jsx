import { Container } from "@mantine/core";
import BlogItem from "./BlogItem";

const BlogData = [
    {
        title: "Difference between javascript and nodejs",
        description:
            "JavaScript is a Single Threaded programming language that runs in any browser . Whereas Node JS is a run time environment which allow JavaScript programming language to run in server-side, Node.js comes with many libraries that can easily be accessed by using Javascript for better use.",
    },
    {
        title: "When should you use nodejs and when should you use mongodb",
        description:
            "Node.js is javascript run time environment. It runs your Javascript code. it is used to build servers that can respond to web requests. whereas MongoDB is a nosql  database engine. Code from an  application or server uses MongoDB to save data , query data or update data in a database.",
    },
    {
        title: "Differences between sql and nosql databases.",
        description:
            "SQL databases use SQL or structured query language and got scheme defined. noSQL databases do not use SQL and usually scheme is unstructured. SQL databases are table  base whereas noSQL databases are document base. SQL databases are relational whereas noSQL databases are non-relational ",
    },
    {
        title: "What is the purpose of jwt and how does it work",
        description:
            " jwt which is basically short form of jsonwebtoken, and the purpose of jwt is to securely transmit information between parties.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JSON Web Tokens consist of three parts separated by dots  which are:Header,Payload,Signature.",
    },
];
const Blog = () => {
    return (
        <Container>
            {BlogData.map(({ title, description }) => (
                <BlogItem
                    key={title}
                    title={title}
                    description={description}
                ></BlogItem>
            ))}
        </Container>
    );
};

export default Blog;
