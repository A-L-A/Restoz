import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { FaAddressCard, FaPhone } from "react-icons/fa";
import ReservationDrawer from "./Drawer";

function ItemCard({name, address, phone}) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mb={4}
    >
      {/* <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      /> */}

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py="2">
            {<FaAddressCard />} Address: {address}
          </Text>
          <Text py="2">
            {<FaPhone />} Phone: {phone || "N/A"}
            </Text>
        </CardBody>

        <CardFooter>
       
          <ReservationDrawer />
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default ItemCard;
