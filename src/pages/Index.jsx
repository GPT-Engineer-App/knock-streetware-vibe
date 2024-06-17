import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { FaTshirt, FaRegGrinBeamSweat } from "react-icons/fa";
import logo from "../public/images/school-of-hard-knocks-logo.png";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="gray.800" color="white">
          <Image src={logo} alt="School of Hard Knocks Logo" mx="auto" mb={4} />
          <Heading as="h1" size="2xl" mb={4}>Knock Streetware</Heading>
          <Text fontSize="xl">High-Style Clothing for the Modern Individual</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Our Collection</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack>
              <FaRegGrinBeamSweat size="4em" />
              <Heading as="h3" size="lg">Hoodies</Heading>
              <Text>Stay warm and stylish with our exclusive hoodies.</Text>
              <Button colorScheme="teal" variant="outline">Shop Hoodies</Button>
            </VStack>
            <VStack>
              <FaTshirt size="4em" />
              <Heading as="h3" size="lg">Shirts</Heading>
              <Text>Discover our range of trendy shirts.</Text>
              <Button colorScheme="teal" variant="outline">Shop Shirts</Button>
            </VStack>
            <VStack>
              <FaRegGrinBeamSweat size="4em" />
              <Heading as="h3" size="lg">Pants</Heading>
              <Text>Find the perfect pair of pants for any occasion.</Text>
              <Button colorScheme="teal" variant="outline">Shop Pants</Button>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box textAlign="center" py={10} bg="gray.800" color="white">
          <Heading as="h2" size="xl" mb={4}>About Knock Streetware</Heading>
          <Text fontSize="lg" maxW="3xl" mx="auto">
            Knock Streetware is dedicated to providing high-quality, stylish clothing for the modern individual. Our collection features a range of hoodies, shirts, and pants designed to keep you looking your best.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;