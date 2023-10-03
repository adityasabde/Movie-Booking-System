import React, {  useState } from 'react';
import { Grid , GridItem , Button ,Center} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SeatBox({data , name}) {

    // here we not apply map function yet so only work for single show not for more than 1
    const seats = data[0].seatsArray

    const [selectedSeats, setSelectedSeats] = useState([]);
    
    const navigate = useNavigate();

      const toggleSeatSelection = (seatIndex) => {
        if (selectedSeats.includes(seatIndex)) {
          // If seat is already selected, remove it
          setSelectedSeats(selectedSeats.filter((seat) => seat !== seatIndex));
        } else {
          // If seat is not selected, add it
          setSelectedSeats([...selectedSeats, seatIndex]);
        }
      };

      const onConfirm = async ()=>{
          const postData = {
             "name": name,
            //  data[0] is written because not apply map over here
             "showTime":data[0].showTime,
             "seatno":selectedSeats
          }
          // console.log(postData)
          navigate("/payment" , {state: { moviename : name }})
          const response = await axios.post("http://localhost:8080/user/booking" , postData);
          
      }

    
      return (
        <>
        <br/>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {seats.map((seat, index) => (
          <GridItem key={index}>
          <Button
          size="sm"
          p="4"
          rounded="md"
          cursor={seat ? 'not-allowed' : 'pointer'}
          disabled={seat}
          bg={seat ? 'red.200' : (selectedSeats.includes(index) ? 'red.200' : 'green.200')}
          _hover={{
            bg: seat ? 'red.200' : (selectedSeats.includes(index) ? 'red.300' : 'green.300'),
          }}
          onClick={() => toggleSeatSelection(index)}
        >
          {index}
        </Button>
        
        </GridItem>
        ))}
      </Grid>
      <br/>
      <Center>
         <Button  variant='solid' colorScheme ='blue' onClick={()=>onConfirm()}>Book my Seats</Button>
      </Center>
      </>
      );
    
}
