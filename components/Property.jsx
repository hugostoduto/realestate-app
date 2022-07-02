import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGriFIll } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : defaultImage} />
      </Box>
    </Flex>
  </Link>
);

export default Property;
