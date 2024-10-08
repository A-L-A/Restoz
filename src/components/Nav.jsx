import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Collapse,
  VStack,
  HStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [links] = useState([
    { label: 'Home', url: '/' },
    { label: 'Author', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ]);

  return (
    <Box bg="gray.800" py={3}>
      <Flex
        px={[4, 6, 8]}
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        {/* Left side: Restoz */}
        <Flex alignItems="center">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Heading as="h1" size="lg" color="white" mr={8}>
              Restoz
            </Heading>
          </Link>
        </Flex>

        {/* Right side: Icon button for mobile and the links */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
          aria-label="Toggle Navigation"
          variant="unstyled"
        />

        {/* Links for desktop */}
        <HStack
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          spacing={8}
        >
          {links.map((link, index) => (
            <Text
              key={index}
              color="white"
              fontWeight="bold"
              _hover={{ color: 'gray.300' }}
            >
              <Link href={link.url}>{link.label}</Link>
            </Text>
          ))}
        </HStack>

        {/* Collapse for mobile view */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            display={{ base: 'block', md: 'none' }}
            alignItems="center"
            mt={{ base: 2, md: 0 }}
            spacing={4}
          >
            {links.map((link, index) => (
              <Text
                key={index}
                color="white"
                fontWeight="bold"
                _hover={{ color: 'gray.300' }}
              >
                <Link href={link.url}>{link.label}</Link>
              </Text>
            ))}
          </VStack>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Navbar;
