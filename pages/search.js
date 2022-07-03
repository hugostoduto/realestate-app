import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg";
import { baseUrl, fetchApi } from "../utils/fetchApi";
const Search = ({ properties }) => {
  const [search, setSearch] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        alignItems="center"
        justifyContent="center"
        p="2"
        fontWeight="black"
        fontSize="lg"
        onClick={() => setSearch((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filter</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {search && <SearchFilters />}
      <Text fontSize="2x1" fontWeight="bold" p="4">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="50"
        >
          <Image src={noresult} alt="no result" />
          <Text fontSize="lg" marginTop="3" fontWeight="bold">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};
export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";
  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return {
    props: {
      properties: data?.hits,
    },
  };
}
