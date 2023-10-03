import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import MovieCard from './MovieCard';

export default function Movies({data}) {
  return (
    <div>
   
  <Grid
    h='200px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(4, 1fr)'
    gap={4}
  >
    {data !== null ? (
      data.map((movie) => (
            <GridItem>
              <Box textAlign="center" fontSize="xl">
                <MovieCard
                  name={movie.name}
                  price={movie.price}
                  shows={movie.shows}
                  url={movie.imgurl}
                />
              </Box>
            </GridItem> 
      ))
    ) : (
      <p>Loading...</p>
    )}
  </Grid></div>
  )
}
