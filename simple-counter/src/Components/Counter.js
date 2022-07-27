import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function Counter(){
    const [counter, setCounter] = useState(0);
    const incremeant = () => {
        setCounter(counter +1);
    }
    const decreameant = () =>{
        setCounter(counter -1)
    }
    return(
        <>
            <div >
                <p> This is our Current count : {counter}</p>
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Button variant='contained' onClick={(e) => incremeant()}>Add</Button>

        </CardContent>

        
    </Card>

    <Card sx={{ minWidth: 275 }}>
        <CardContent>

        <Button variant='contained' onClick={(e) => decreameant()}>Subtract</Button>

        </CardContent> 
          
    </Card>
                
                
            </div>
        </>
    )
}
   
   
export default Counter;



