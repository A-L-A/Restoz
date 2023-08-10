import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchPlaces } from '../services/FetchPlaces';
import { Box, Heading, Text } from '@chakra-ui/react';

const defaultOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const SearchSelect = ({ options = defaultOptions, onSelectedOption }) => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (keyword.trim() !== '') {
      handleInputChange(keyword);
    }
  }, [keyword]);

  const handleInputChange = async (newValue) => {
    setKeyword(newValue);
    if (newValue.length < 1) return setPlaces([]);
    try {
      setLoading(true);
      const data = await fetchPlaces(newValue);
      const placesArray = data?.features?.map((place) => ({
        value: place?.properties?.place_id,
        label: place?.properties?.formatted
      }));
      setPlaces(placesArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Box
      h={'300px'}
      w={'100%'}
      mt="24"
      mb="4"
      bg="gray.800"
      p="4"
      display="flex"
        flexDirection="column"
      alignItems="center" // Vertically center the content
      justifyContent="center" // Horizontally center the content
    >
        <Heading as="h2" size="xl" color="white">
            Let's help you locate restaturants near you
        </Heading>
        <Text color="white" mt="4" mb="2">
            Search for a place to get started
        </Text>
        <div style={{ width: '100%' }}>
      <Select
        inputValue={keyword}
        onInputChange={(newValue) => handleInputChange(newValue)}
        options={places}
        isClearable
        isLoading={loading}
        isSearchable
        noOptionsMessage={() => 'Oops! No places found'}
        loadingMessage={() => 'Loading places...'}
        placeholder="Search for a place"
        onChange={(selectedOption) => onSelectedOption(selectedOption)}
        styles={{
            control: (provided) => ({
              ...provided,
              width: '100%', 
            }),
          }}
      />
      </div>
    </Box>
  );
};

export default SearchSelect;
