import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Hero({scrollToSearchSelect}) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height={"100vh"}
      justifyContent={"center"}
      p={4}>
      <Box
        p={"12"}
        w={{ base: "100%", md: "50%" }}
        position="relative"
        borderRadius={"md"}>
        <Image
          borderRadius={"md"}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          src={
            "https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg"
          }
        />
      </Box>
      <Box w={{ base: "100%", md: "50%" }} p={"12"}>
        <Heading size={"2xl"}>Discover Your Culinary Delight</Heading>
        <Text fontSize={"xl"} mt={"4"}>
          Embark on a delightful journey to find and savor your cherished
          restaurants, beautifully laid out on the interactive map.
        </Text>
        <Button mt={"8"} colorScheme={"gray"} onClick={scrollToSearchSelect}>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
}

export default Hero;
