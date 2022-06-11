import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  propose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={500} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {propose}
        </Text>
        <Text fontSize="3x1" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <Box>
      <Banner
        propose="For Rent"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Villa, Homes "
        desc2="and more"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">{/* fetch all the data from the database */}</Flex>
      <Banner
        propose="Buy a Home"
        title1="Fin, Buy & Own Your"
        title2="Dream House"
        desc1="Explore Apartments, Villa, Homes "
        desc2="and more"
        linkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">{/* fetch all the data from the database */}</Flex>
    </Box>
  );
}
