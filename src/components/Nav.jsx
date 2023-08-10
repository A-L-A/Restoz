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
        <Heading as="h1" size="lg" color="white">
          Restoz
        </Heading>
        <IconButton
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
          aria-label="Toggle Navigation"
          variant="unstyled"
        />
        <Collapse in={isOpen} animateOpacity>
          <VStack
            display={{ base: 'block', md: isOpen ? 'flex' : 'none' }}
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
                <a href={link.url}>{link.label}</a>
              </Text>
            ))}
          </VStack>
        </Collapse>
      </Flex>
  
      <HStack
        display={{ base: 'none', md: 'flex' }}
        justifyContent="flex-end"
        alignItems="center"
        px={[4, 6, 8]}
        py={2}
      >
        {links.map((link, index) => (
          <Text
            key={index}
            color="white"
            fontWeight="bold"
            _hover={{ color: 'gray.300' }}
          >
            <a href={link.url}>{link.label}</a>
          </Text>
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
