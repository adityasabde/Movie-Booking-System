import React from 'react'
import { HStack , Box , Circle , Button } from '@chakra-ui/react'
import SeatBox from './SeatBox';
export default function 
({data , name}) {
    
  return (
    <div>
    <HStack spacing='24px'>
    {
        data.map((show , index)=>(
            <Button><Circle borderRadius="2xl" p="9px" m="7px" bg='tomato' color='white'>
              {show.showTime}
            </Circle>
            </Button>
        ))
    }
    
  </HStack>
   <SeatBox data = {data } name={name}/>
    </div>
  )
}
