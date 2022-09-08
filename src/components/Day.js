import React from 'react';
import { DAYS_OF_THE_WEEK } from '../helpers/days';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { CURR_MONTH, CURR_YEAR } from '../helpers/currdate';



function Day({ day,
    marked,
    handleMarked,
    month,
    today,
    currmonth,
    curryear}) {
    let bg = '';
    
    const markedColor = (month, today) => {
        if (day.id.getDate() === today &&
            day.id.getMonth() === CURR_MONTH &&
            day.id.getFullYear() === CURR_YEAR)
        { bg = 'green.50' }
         else if (day.id.getMonth() === month) {
            bg = 'white'; 
        } else { bg = 'gray.50'}
        return bg;
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
        const choosedDay = (marked, month) => {
            if (day.id.getDate() === marked&&day.id.getMonth()===month) {
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
            } else {
                return {
                    borderWidth: '1px',
                    
                }
        }
    }
        
    
    return (
        <Box sx={choosedDay(marked, month)}
            display='flex'
            flexDirection='column'
            key={day.id.getDate()}
            bg={markedColor(currmonth, curryear, today, month)}
            // borderWidth='1px'
            height='10vw'
            onClick={() => { handleMarked(day.id.getDate()); console.log(day.id.getMonth(),day.id.getDate(), month) }}
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
        </Box>
  )
}

export default Day