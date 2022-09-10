import React, {useState, useEffect} from 'react';
import { DAYS_OF_THE_WEEK } from '../helpers/days';
import { Badge, Box, Button, Center, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import { CURR_MONTH, CURR_YEAR, TODAY } from '../helpers/currdate';
import {useDispatch} from 'react-redux';
import {set_day, set_month, set_year, set_id, set_date} from '../redux/date';
import {getLocalStorage} from '../helpers/hanldeStorage';
import dayjs from 'dayjs';
import UpdateModal from '../components/UpdateModal'



function Day({ day,
    marked,
    handleMarked,
    month,
    today,
    currmonth,
    curryear}) {
    // const [list, setList] = useState(getLocalStorage('task'))   
    const dispatch = useDispatch();
    
    const markedCell = (month, marked, today) => {
        if(day.id.getMonth()!==month) {return {bg:'gray.50'}}else if 
        (day.id.getDate()===TODAY
        &&day.id.getMonth()===CURR_MONTH
        &&day.id.getFullYear()===CURR_YEAR){
            return {bg:'green.100'}
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
    
    const id = dayjs(day.id).format('YYYY-MM-DD')
    const list = getLocalStorage('task')
    const tasks = list.filter(obj => {return obj.date===id});
    
    
    return (
        <Box sx={markedCell(month, marked)}
            cursor='pointer'
            display='flex'
            flexDirection='column'
            key={day.id.getDate()}
            // bg={markedColor(currmonth, curryear, today, month, marked)}
            borderWidth='1px'
            height='10vw'
            onClick={() =>  {dispatch(set_day(day.id.getDate())); 
                dispatch(set_month(day.id.getMonth()));
            dispatch(set_year(day.id.getFullYear()));
        dispatch(set_id(id));
    dispatch(set_date(id))}}
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
            
            
             <Flex w='100%' flexDirection='column' gap='1vw' alignItems='center' justifyContent='center'>
                
            {tasks&&tasks.map(obj => (<UpdateModal time={obj.time}
                                        title={obj.title}
                                         date={obj.date}
                                          desc={obj.description}
                                           created={obj.created}
                                           updated={obj.updated}
                                           id={id} />))}
           
            </Flex>          
           
                
        </Box>
  )
}

export default Day