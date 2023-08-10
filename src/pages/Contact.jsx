import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";

function Contact () {
    return (
        <Box p="12" minH="100vh">
            <Heading size="2xl" mb="8">Contact Us</Heading>
        <ContactForm />
        </Box>
    )
}

export default Contact