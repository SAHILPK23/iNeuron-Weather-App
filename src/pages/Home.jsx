import { useState } from 'react';
import { Box , styled } from '@mui/material';

import Sunset from '../Assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin:'0 auto',
    width: '100%'
})

const Image= styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '50%',
    height: '100%',
    backgroundSize: 'cover',
    borderRadius: '2px 0 0 2px'
})


const Home = () => {
    const [result, setResult] = useState({})
   
    return (
        
        
    <Component>
        <Image></Image>
        <Box style={{width: '75%', height: '100%'}}>
            <Form setResult={setResult} />
            <Information result={result} />
        </Box>
     </Component>
    
     
    )

}

export default Home;