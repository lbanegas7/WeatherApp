import { Box, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { time } from "console";
import { IconCelcius } from "./IconCelcius";
import { IconDayCloud } from "./IconDayCloud";
import { IconTrash } from "./IconTrash";

export const CitiesGridItem = ({name, lat, lng, temperature}:{name: string; lat: number; lng: number, temperature: number}) => {
    const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
    
    return (
    <Box boxShadow='base' p={2}>
      <Box>
        <Box display='flex' mb={6}>
          <IconDayCloud w='3em' h='3em' />
          <VStack spacing={0} ml={1}>
            <Text fontSize='lg'><b>{name}</b></Text>
            <Text fontSize='lg'>{lat}Lat, {lng}Lng</Text>
          </VStack>
          <Spacer />
          <Box display='flex' alignItems='center'>
            <Text fontSize='lg' mt='-5px' mr='-6px'>
              {temperature}
            </Text>
            <IconCelcius />
          </Box>
        </Box>
        <Box mb={3}>
          <SimpleGrid columns={[3, 3, 4]}>
            <Box _hover={{ boxShadow: "md" }}>
              <VStack spacing={0}>
                <Text fontSize='lg' textAlign='center' display='block' mb={1}>
                  Lu
                </Text>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w='100%'
                >
                  <Text fontSize='lg' mt='-5px' mr='-6px'>
                    17
                  </Text>
                  <IconCelcius />
                </Box>
              </VStack>
            </Box>
            <Box _hover={{ boxShadow: "md" }}>
              <VStack spacing={0}>
                <Text fontSize='lg' textAlign='center' display='block' mb={1}>
                  Ma
                </Text>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w='100%'
                >
                  <Text fontSize='lg' mt='-5px' mr='-6px'>
                    34
                  </Text>
                  <IconCelcius />
                </Box>
              </VStack>
            </Box>
            <Box _hover={{ boxShadow: "md" }}>
              <VStack spacing={0}>
                <Text fontSize='lg' textAlign='center' display='block' mb={1}>
                  Mi
                </Text>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w='100%'
                >
                  <Text fontSize='lg' mt='-5px' mr='-6px'>
                    18
                  </Text>
                  <IconCelcius />
                </Box>
              </VStack>
            </Box>
            <Box _hover={{ boxShadow: "md" }}>
              <VStack spacing={0}>
                <Text fontSize='lg' textAlign='center' display='block' mb={1}>
                  Ju
                </Text>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w='100%'
                >
                  <Text fontSize='lg' mt='-5px' mr='-6px'>
                    21
                  </Text>
                  <IconCelcius />
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
        <Box w='100%' display='flex' justifyContent='center'>
          <Box _hover={{ boxShadow: "base" }} p={3}>
            <IconTrash />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
