import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: price,
  rooms,
  rentFrequency,
  title,
  baths,
  area,
  agency,
  isVerified,
  descriptions,
  type,
  purpose,
  furnishingStatus,
  amenities,
  photos,
}) => (
  <Box maxWidth="100px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
