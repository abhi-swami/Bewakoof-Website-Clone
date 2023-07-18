import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Input,
  Button,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import {MensTopwear,MensBottamwear,WomensTopWear,WomensBottamWear,MobileCover} from "../Utils/data.js"
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2} color="lightcoral">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("rgb(24,24,24)")}
      color={useColorModeValue("white")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Heading size={"md"} color={"lightcoral"} my={"4"}>
          BeCool
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          <Stack align={"flex-start"}>
            <ListHeader>CUSTOMER SERVICE</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Track Order</Link>
            <Link href={"#"}>Return Order</Link>
            <Link href={"#"}>Cancel Order</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>COMPANY</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>We're Hiring</Link>
            <Link href={"#"}>Terms & Condition</Link>
            <Link href={"#"}>Privacy Policey</Link>
            <Link href={"#"}>Blog</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>CONNECT WITH US</ListHeader>
            <HStack spacing={"10px"}>
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <Text fontSize={"14px"}>4.7M People Like this</Text>
            </HStack>
            <HStack spacing={"10px"}>
            <i class="fa fa-instagram" aria-hidden="true"></i>
              <Text fontSize={"14px"}>1M Followers</Text>
            </HStack>
            <HStack spacing={"10px"}>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-pinterest" aria-hidden="true"></i>
            <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
            <i class="fa fa-apple" aria-hidden="true"></i>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>KEEP UP TO DATE</ListHeader>
            <HStack>
              <Input
                variant="flushed"
                placeholder="Enter Emaild Id"
                borderColor={"lightcoral"}
                w={"45%"}
              />
              <Button bgColor={"lightcoral"}>SUBSCRIBE</Button>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          <Stack align={"flex-start"}>
            <HStack>
            <i class="fa fa-repeat" aria-hidden="true"></i>
            <Link href={"#"}>15 Days return policy*</Link>
            </HStack>
            <HStack>
            <i class="fa fa-inr" aria-hidden="true"></i>
            <Link href={"#"}>Cash on delivery*</Link>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>DOWNLOAD THE APP</ListHeader>
            <HStack w="65%">
              <Link href={"#"}>
                <Image
                  src="https://images.bewakoof.com/web/app_android_v1.png"
                  alt="andriod"
                ></Image>
              </Link>
              <Link href={"#"}>
                <Image
                  src="https://images.bewakoof.com/web/app_ios_v1.png"
                  alt="ios"
                ></Image>
              </Link>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>100% SECURE PAYMENT</ListHeader>
            <HStack w="65%">
              <Link href={"#"}>
                <Image
                  src="https://images.bewakoof.com/web/secure-payments-image.png"
                  alt="andriod"
                ></Image>
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box border={"1px solid white"} w={"85%"} m={"auto"} my={6}></Box>
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={0}>
          <Stack align={"flex-start"}>
            <ListHeader>MEN'S CLOTHING</ListHeader>
            <Text
              my={-10}
              fontSize={"lg"}
              color={"yellow.300"}
              _hover={{ cursor: "pointer" }}
            >
              Top Wear
            </Text>
            {MensTopwear.map((el) => (
              <Text _hover={{ cursor: "pointer" }} key={el.id}>
                {el.text}
              </Text>
            ))}
            <Text fontSize={"lg"} color={"yellow.300"}>
              Bottam Wear
            </Text>
            {MensBottamwear.map((el) => (
              <Text _hover={{ cursor: "pointer" }} key={el.id}>
                {el.text}
              </Text>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>WOMEN'S CLOTHING</ListHeader>
            <Text fontSize={"lg"} color={"yellow.300"}>
              Women's Top Wear
            </Text>
            {WomensTopWear.map((el) => (
              <Text _hover={{ cursor: "pointer" }} key={el.id}>
                {el.text}
              </Text>
            ))}
            <Text fontSize={"lg"} color={"yellow.300"}>
              Women's Bottam Wear
            </Text>
            {WomensBottamWear.map((el) => (
              <Text _hover={{ cursor: "pointer" }} key={el.id}>
                {el.text}
              </Text>
            ))}
            <Text fontSize={"lg"} color={"yellow.300"}>
              BAGS
            </Text>
            <Text _hover={{ cursor: "pointer" }}>Laptop Bags</Text>
            <Text _hover={{ cursor: "pointer" }}>Small Bags</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>MOBILE COVERS</ListHeader>
            {MobileCover.map((el) => (
              <Text _hover={{ cursor: "pointer" }} key={el.id}>
                {el.text}
              </Text>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <Text
              _hover={{ cursor: "pointer" }}
              fontSize={"xl"}
              color={"yellow.300"}
            >
              FANBOOK
            </Text>
            <Text
              _hover={{ cursor: "pointer" }}
              fontSize={"xl"}
              color={"yellow.300"}
            >
              OFFERS
            </Text>
            <Text
              _hover={{ cursor: "pointer" }}
              fontSize={"xl"}
              color={"yellow.300"}
            >
              SITEMAP
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container as={Stack} maxW={"6xl"} mt={6}>
        <Text fontWeight={"500"} fontSize={"xl"} mb={2} color="lightcoral">
          BECOOL THE NEW AGE ONLINE SHOPPING EXPERIENCE
        </Text>
        <Text mb={9}>
          Founded in 2012, Bewakoof is a lifestyle fashion brand that makes
          creative, distinctive fashion for the trendy, contemporary Indian.
          Bewakoof was created on the principle of creating impact through
          innovation, honesty and thoughtfulness.
        </Text>

        <Text>
          With a team of 400 members, and 2mn products sold till date. We like
          to experiment freely, which allows us to balance creativity and
          relatability, and our innovative designs. Our range of products is
          always fresh and up-to-date, and we clock sales of over 1 lakh
          products a month. Our innovation focus extends to our operations as
          well. We are vertically integrated, manufacture our own products, and
          cut out the middleman wherever possible. This direct-to-consumer model
          allows us to create high-quality fashion at affordable prices. A
          thoughtful brand, we actively attempt to minimize our environmental
          footprint and maximize our social impact. These efforts are integrated
          right into our day-to-day operations, from rainwater harvesting to
          paper packaging to employee benefits. To create an accessible,
          affordable and thoughtful experience of online shopping in India.
        </Text>
      </Container>
    </Box>
  );
}
