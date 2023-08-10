import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import ItemCard from "../components/Card";
import SearchSelect from "../components/SearchSelect";
import { fetchDetails } from "../services/FetchDetails";
import { useState } from "react";
import Map from "../components/GoogleMap";
import Hero from "../components/Hero";
import { Element, scroller } from "react-scroll";
import ReservationDrawer from "../components/Drawer";
import ContactForm from "../components/ContactForm";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [markers, setMarkers] = useState([]);

  const handleSearch = async (place_id) => {
    try {
      setIsLoading(true);
      scrollToResults();
      const data = await fetchDetails(place_id);
      setData(data);
      const newMarkers = data?.features?.map((place) => ({
        name: place?.properties?.name,
        lat: place?.geometry?.coordinates[1],
        lng: place?.geometry?.coordinates[0],
      }));
      setMarkers(newMarkers);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const scrollToSearchSelect = () => {
    scroller.scrollTo("searchSelect", {
      duration: 800,
      smooth: true,
      offset: -100,
    });
  };

  const scrollToResults = () => {
    scroller.scrollTo("results", {
        duration: 800,
        smooth: true,
        offset: -100,
        });
    };

    const handleClick = () => {
        console.log('clicked')
        // open drawer

        onOpen()
    }

  return (
    <Box p={4}>
      <Hero scrollToSearchSelect={scrollToSearchSelect} />
 
        <Element name="searchSelect">
        <SearchSelect
          onSelectedOption={(option) => handleSearch(option.value)}
        />
        </Element>
   
   <Element name="results">
      {isLoading && (
        <Flex>
          <Box w={"25%"} p={8}>
            <Skeleton height="200px" />
          </Box>
          <Box w={"75%"} p={8}>
            <Skeleton height="200px" mb={4} />
            <Skeleton height="200px" mb={4} />
            <Skeleton height="200px" mb={4} />
          </Box>
        </Flex>
      )}
      {!isLoading && data?.features?.length === 0 && <Text size='sm' textAlign='center'>No data</Text>}
      {!isLoading && data?.features?.length > 0 && (
        <Text size='sm' textAlign='center'>{data?.features?.length} places found</Text>
      )}
      {!isLoading && data?.features?.length > 0 && markers?.length > 0 && (
        <Flex direction={{base: "column", md: "row"}}>
          <Box w={{base: "100%", md: "25%"}} p={{base: "2" , md:"8"}}>
            <Text as="h3">Map</Text>
            {!markers && <Text size='sm' textAlign='center'>No markers</Text>}
            {markers && <Map markers={markers} />}
          </Box>
          <Box w={{base: "100%", md: "75%"}} p={{base: "2" , md:"8"}}>
            {data?.features?.map((place) => (
              <ItemCard
                key={place?.properties?.place_id}
                name={place?.properties?.name}
                address={place?.properties?.formatted}
                phone={place?.properties?.phone}
              />
            ))}
          </Box>
        </Flex>
      )}
        </Element>
    </Box>
  );
}

export default Home;
