import React from 'react';
import { Box, Center, Heading, Text, Image, Flex, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={8}>
      <Center>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
      </Center>
      <Center>
        <Image
          src="./lyse.png"
          alt="Your Name"
          boxSize="200px"
          rounded="full"
          mb={4}
        />
      </Center>
      <Center>
        <Text textAlign="center" fontSize="lg">
        I am a junior front-end web designer & developer. I love playing chess and singing ☘️
        </Text>
      </Center>

<Stack spacing={8} mx={'auto'} mt='4' maxW={'lg'} py={12} px={6}>
    <Heading textAlign='center' fontSize={'3xl'}>My Skills</Heading>

      <Flex my={8} flexDirection={{ base: 'column', md: 'row' }}>
        <Box flex="1" textAlign="center" pr={{ base: 0, md: 4 }}>
          <Image
            src={'./design.png'}
            alt="Web Development"
            boxSize="150px"
            mx="auto"
            mb={{ base: 4, md: 0 }}
          />
        </Box>
        <Box flex="2" pl={{ base: 0, md: 4 }}>
          <Heading as="h3" size="md" mb={2}>
            Web Design
          </Heading>
          <Text fontSize="md">
          I design websites using UI/UX principles and human-centred design. I'll deliver a website that brings your brand/vision to life in ways you wouldn't have imagined possible.
          </Text>
        </Box>
      </Flex>

      <Flex my={8} flexDirection={{ base: 'column', md: 'row' }}>
        <Box flex="2" pl={{ base: 0, md: 4 }}>
          <Heading as="h3" size="md" mb={2}>
            Web Development
          </Heading>
          <Text fontSize="md">
          I use up-to-date technologies to create not only a great looking but also functioning website. I am passionate about creating a smooth experience for your visitors.
          </Text>
        </Box>
        <Box flex="1" textAlign="center" pr={{ base: 0, md: 4 }}>
          <Image
            src={'./dev.png'}
            alt="Web Development"
            boxSize="150px"
            mx="auto"
            mb={{ base: 4, md: 0 }}
          />
        </Box>
      </Flex>
        </Stack>
    </Box>
  );
};

export default About;