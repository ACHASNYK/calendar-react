import React from 'react';
import { DAYS_OF_THE_WEEK } from '../helpers/days';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { CURR_MONTH, CURR_YEAR, TODAY } from '../helpers/currdate';



function Day({ day,
    marked,
    handleMarked,
    month,
    today,
    currmonth,
    curryear}) {
        const dday=day.id.getDate();
        const mmonth=day.id.getMonth();
    
    const markedCell = (month, marked, today) => {
        
       
        
        if(day.id.getMonth()!==month) {return {bg:'gray.50'}}else if 
        (day.id.getDate()===TODAY
        &&day.id.getMonth()===CURR_MONTH
        &&day.id.getFullYear()===CURR_YEAR){
            return {bg:'green.50'}
        }else if (day.id.getDate()===marked&&day.id.getMonth()===month){
            return {
                borderWidth: '2px',
                     boxShadow: 'inner',
                     bg: 'white',
                     mr: '-1px',
                     ml: '-1px',
                     mt: '-1px',                    
                     rounded: 'md',
                     borderColor: 'blue.200'
            }
        }
        //  else if (day.id.getDate() === marked&&day.id.getMonth()===month){
        //     return {
        //         borderWidth: '2px',
        //              boxShadow: 'inner',
        //              bg: 'white',
        //              mr: '-1px',
        //              ml: '-1px',
        //              mt: '-1px',                    
        //              rounded: 'md',
        //              borderColor: 'blue.200'
        //     }
        //  } 
        //  else if (day.id.getDate()===today&&
        //  day.id.getMonth===CURR_MONTH&&
        //  day.id.getFullYear===CURR_YEAR){
        //     return {bg: 'green.50'}
         }
        
        
        
    
    const markedText = (marked) => {
        
        if (day.id.getMonth() !== month) {
            
            return {
                color: 'gray.400',
                fontWeight: '600'
            };
        } else if (day.id.getDate() === marked) {
            return {
                fontWeight: '650',
                color: 'black'
            }
        } else {
            return {
                color: 'black',
                fontWeight: '600'
        } }
    }
    //     const choosedDay = (marked, month) => {
    //         if (day.id.getDate() === marked&&day.id.getMonth()===month) {
    //             return {
    //                 borderWidth: '2px',
    //                 boxShadow: 'inner',
    //                 bg: 'white',
    //                 mr: '-1px',
    //                 ml: '-1px',
    //                 mt: '-1px',                    
    //                 rounded: 'md',
    //                 borderColor: 'blue.200'
    //                 }
    //         } else {
    //             return {
    //                 borderWidth: '1px',
                    
    //             }
    //     }
    // }
    const buttonAdd = (marked) => {
        if (day.id.getDate() === marked) {
            return {
                display: 'block',
                h: '1vw',
                w: '1vw',
                borderRadius: '50%',
                bg: 'blue.100',
                color: 'white'
            }
                
        }
    }    
    
    return (
        <Box sx={markedCell(month, marked)}
            cursor='pointer'
            display='flex'
            flexDirection='column'
            key={day.id.getDate()}
            // bg={markedColor(currmonth, curryear, today, month, marked)}
            borderWidth='1px'
            height='10vw'
            onClick={() => { handleMarked(day.id.getDate());console.log(dday, mmonth,  month) }}
            _hover={{
                
                boxShadow:'outline', 
                rounded:'md', 
                
            }}
        >
            <Flex p='1vh'>
                
                <Box><Text sx={markedText(marked)}>{day.id.getDate()}</Text></Box>
                    <Spacer/>
                    <Box><Text sx={markedText(marked)}>{DAYS_OF_THE_WEEK[day.id.getDay()]}</Text></Box>
                
            </Flex>
            {/* <Spacer />
            <Flex alignItems='center' justifyContent='center'>
            <Box as='button'
                display='block'
                h='2vw'
                w='2vw'
                borderRadius='50%'
                bg='blue.200'
                color='white'
                boxShadow='lg'
            >+</Box>
            </Flex>     */}
                
        </Box>
  )
}

export default Day