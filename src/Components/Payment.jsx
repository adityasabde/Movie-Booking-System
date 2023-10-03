import React from 'react'
import { FormControl , Input , Button  ,FormLabel , Center , Text ,useToast } from '@chakra-ui/react'
import { useState   } from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import axios from 'axios';


export default function Payment() {
  const [ upi , setupi] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const name = location.state.moviename;

  const handleFormSubmit = async()=>{
    try{
        const response = await axios.post(`http://localhost:8080/user/payment?UPI=${upi}`);
        console.log(response.data);
        if(response.data){
            toast({
                title: 'Amount received.',
                description: "please wait we are booking you seats .............",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            setTimeout(()=>{
                navigate('/details', { state: { moviename : name } });
            },3000)
        }
        else{
            toast({
                title: 'UPI ID is Wrong.',
                description: "We can't book your seat sorry.........",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
            setupi("");
        }

    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <Center>
    <div>
      <Text fontSize='3xl'>Payment</Text>
      <br/>
      <form >
        <FormControl isRequired>
          <FormLabel>Enter Your UPI ID </FormLabel>
          <Input
            placeholder='UPI@sbi'
            value={upi}
            onChange={(e) => setupi(e.target.value)}
          />
          <Button mt={4} colorScheme='teal'  onClick={handleFormSubmit} >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  </Center>

  )
}

