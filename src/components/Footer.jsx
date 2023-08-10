'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {  FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box
      bg={"gray.800"}
      color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}>
        <Text>© 2023 Lyse A. Aneze. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link to= "https://www.linkedin.com/in/lyseaneze/" target="_blank">
            <FaLinkedin />
          </Link>

          <Link to= "https://github.com/A-L-A" target="_blank">
            <FaGithub />
          </Link>

        </Stack>
      </Container>
    </Box>
  );
}