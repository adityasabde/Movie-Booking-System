import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import SideBar from './Components/SideBar';
import Movies from './Components/Movies';
import TitleComp from './Components/TitleComp';
import Payment from './Components/Payment';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/allmovies');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <ChakraProvider theme={theme}>
      <TitleComp/>
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Movies data={data} />} />
          <Route path="/register" element={<Details />} />
          <Route path="/details" element={<Details />} />
          <Route path="/payment" element={<Payment/>} />
          <Route
            path="/booking"
            element={
              <Box>
                <p>This is the homepage.</p>
              </Box>
            }
          />
          <Route
            path="/payment"
            element={
              <Box>
                <p>This is the homepage.</p>
              </Box>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
