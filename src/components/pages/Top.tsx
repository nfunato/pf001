import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

function Top() {
  // just a temporary placeholder
  return (
    <Box>
      <Stack spacing={3}>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
    </Box>
  );
}

export default Top;
