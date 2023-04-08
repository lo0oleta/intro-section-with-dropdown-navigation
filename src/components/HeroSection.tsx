import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const LoginImage = "/images/image-hero-desktop.png";
import Audiophile from "./svg/client-audiophile";
import Databiz from "./svg/client-databiz";
import Maker from "./svg/client-maker";
import Meet from "./svg/client-meet";


export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} p={20}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}>
            Make <br /> remote work
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
             colorScheme={'#fff'} 
              backgroundColor={"#000"}
              size="lg"
              borderRadius={10}
              mt={5}
              mb ={20}
            >
              Learn more
            </Button>
          </Stack>

<HStack spacing={12} >
          <Audiophile />
          <Databiz />
          <Meet />
          <Maker />
    </HStack>

        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} height={600} src={LoginImage} />
      </Flex>
    </Stack>
  );
}
