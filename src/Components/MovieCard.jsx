import React from 'react'
import { Image, Stack, Heading, Divider, ButtonGroup, Button , Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



export default function MovieCard({name , price , shows , url}) {

    const navigate = useNavigate();

    const nextPage = (name) => {
      // Use navigate function to navigate to the details page and pass data
      navigate('/details', { state: { moviename : name } });
    };
  

  return (
    <Card maxW="sm" style={{width:"14em"}}>
    <CardBody>
      <Image
        src={url}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
      
        <Text>
            Price :- {price} Rs.
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter style={{justifyContent: "space-around"}}>
      <ButtonGroup spacing='1'>
      <center>
        <Button variant='solid' colorScheme ='blue' onClick={()=>nextPage(name)}>
          Book My Show
        </Button>
        </center>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
