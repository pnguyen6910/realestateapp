import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontsize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
    {purpose}
  </Flex>
)

export default function Home() {
  return (
    <Box >
      <Banner 
        purpose={'RENT A HOME'}
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Expore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/* {fetch the properties and map over them} */}
      </Flex>
      <Banner 
        purpose={'BUY A HOME'}
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Expore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      {/* fetch the properties and map over them */}
    </Box>
  )
}