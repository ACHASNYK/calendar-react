import React from 'react';
import { TODAY, CURR_MONTH, CURR_YEAR, CURR_DATE} from '../helpers/currdate';

import { MONTHS } from '../helpers/months';
import {
    SimpleGrid,
    Box,
    
    Center,
    Flex,
    Spacer,
   
    chakra
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { getMonth } from '../helpers/utils';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { IconButton } from '@chakra-ui/react';
import DatePicker from './DatePicker';
import Day from './Day';
import ModalTask from './Modal';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { set_month, set_year } from '../redux/date';
import { setSesStorage, getSesStorage } from '../helpers/hanldeStorage';
import {plusClick, minusClick} from '../helpers/clickhandlers'

const ArrowLeft = chakra(FiChevronLeft);
const AArrowRight = chakra(FiChevronRight)


function Main() {
    
    const [value, setValue] = useState({
        month: null,
        year: null,
        day: null,
        date: null,
    });
    
        
    const array_month = getMonth(value?.month, value?.year);
    console.log(value)
    
    const handleDatePick = (value) => { 
        setValue(value);
        sessionStorage.setItem('Date', JSON.stringify(value));
    }
    const initial = {
        
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        // date, CURR_DATE
    }
   
let {day, month, year} = useSelector(state => state.date);
const storage = JSON.parse(sessionStorage.getItem('date'))||initial;
 console.log(day, month, year)
    useEffect(()=>{ 
        
        console.log(storage);
        if(!month){setValue({day:null, month: storage?.month, year: storage?.year})}else setValue({day: day, month: month, year: year})
    }
        , [day,year,month,])
    return (
        <Center>
            
            <Box width='90%' borderWidth='1px' borderRadius='lg' mt='1vh' overflow='hidden'>
                <Box marginLeft={6} marginRight={6} minHeight='4vw'>
                    <Flex alignItems='center' p='1vw'>
                        <ModalTask/>
                        
                        <Spacer></Spacer>
                        <Flex alignItems='center' flexDirection='row' gap='.5vh'>
                            <IconButton
                                aria-label='minus'
                                size='sm'
                                bg='gray.100'
                                icon={<ArrowLeft w='2em' h='2em' />}
                                onClick={() => {minusClick(setValue, value); setSesStorage(value)}}></IconButton>
                            <Box display='flex'
                                alignItems='center'
                                p='3px'
                                justifyContent='space-evenly'
                                borderWidth='1px'
                                borderRadius='lg'
                               
                                minWidth='8vw'>
                                {MONTHS[value?.month]} {value?.year}</Box>
                            <IconButton
                                aria-label='plus'
                                bg='gray.100'
                                size='sm'
                                icon={<AArrowRight w='2em' h='2em'/>}
                                onClick={() => {plusClick(setValue, value); setSesStorage(value) }}
                            ></IconButton>
                            <DatePicker data={storage} />
                        </Flex>
                    </Flex>
                    
                </Box>
            <Box m='6' >
                    <SimpleGrid columns={7} gap='0.2vw' >
                        {array_month.map((week, i) => (<React.Fragment key={i}>
                            {week.map((day) => (<Day
                                day={day}
                                marked={value?.day}
                                                              
                                month={value?.month}
                                year={value?.year}
                                today={TODAY}
                                currmonth={CURR_MONTH}
                                curryear={CURR_YEAR}
                                
                                ></Day>))}
                        </React.Fragment>))}
           
           
                </SimpleGrid>
                </Box>
            </Box>
       </Center>     
  )
}

export default Main