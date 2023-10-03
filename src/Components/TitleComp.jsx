import React from 'react'
import { Heading } from '@chakra-ui/react';
import { Center, Circle } from '@chakra-ui/react';
export default function () {
  return (
    <>
    <Heading as="h2" size="md">
    <Circle border-radius="7em" bg="tomato" color="white">
      <Center bg="tomato" h="70px" color="white"  fontSize='3xl'>
        Movie Walle......... Chalo Movie Dekhne 😎✌
      </Center>
    </Circle>
  </Heading>
    <br/ >
    </>
  )
}
