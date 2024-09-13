import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Hero({ scrollToSearchSelect }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minHeight={"100vh"}  // Ensures the entire container takes up full viewport height
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      {/* Image Section */}
      <Box
        p={350}
        w={{ base: "100%", md: "50%" }}
        position="relative"
        borderRadius="md"
        overflow="hidden"  // Ensures the image stays within the bounds
      >
        <Image
          borderRadius="md"
          position="absolute"
          top={-10}
          bottom={5}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"  // Ensures the image covers the box without distortion
          src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg"
        />
      </Box>

      {/* Text Section */}
      <Box
        w={{ base: "100%", md: "50%" }}
        p={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"  
        alignItems="flex-start"  
      >
        <Heading size="2xl">Discover Your Culinary Delight</Heading>
        <Text fontSize="xl" mt={4}>
          Embark on a delightful journey to find and savor your cherished
          restaurants, beautifully laid out on the interactive map.
        </Text>
        <Button mt={8} colorScheme="gray" onClick={scrollToSearchSelect}>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
}

export default Hero;
