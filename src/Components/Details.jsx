import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import SeatBox from './SeatBox';
import { Grid , GridItem , Text , Center ,Circle} from '@chakra-ui/react';
import DifferentShows from './DifferentShows';

export default function Details() {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const moviename = location.state.moviename;
    // allwed user to access name of movie
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/findmovie/${moviename}`
        );
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
    <Center w='17em' h='6em' >
    <Circle border-radius="3em" p="10px" bg='tomato' color='white'>
    <Text fontSize='2xl'>Details Of Movie</Text>
    </Circle>
    </Center>

      {data !== null ? (
        <Grid templateColumns='repeat(6, 1fr)' gap={1}>
        <GridItem colSpan={0.7} h='10' />
        <GridItem colSpan={4} h='10' >
        <MovieCard
        name={data.name}
        price={data.price}
        shows={data.shows}
        url={data.imgurl}
        />
        </GridItem>
        
        <GridItem colStart={4} colEnd={6} h='10'  >
        <DifferentShows  data={data.shows}  name={data.name} />
        </GridItem>
        
        </Grid>
      ) : (
        <p>Loading .................</p>
      )}
    </>
  );
}
