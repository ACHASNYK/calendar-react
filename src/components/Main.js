import React from 'react';
import { TODAY, CURR_MONTH, CURR_YEAR} from '../helpers/currdate';
import { DAYS_OF_THE_WEEK } from '../helpers/days';
import { MONTHS } from '../helpers/months';
import {
    SimpleGrid,
    Box,
    Container,
    Center,
    Flex,
    Spacer,
    Input,
    Button,
    chakra
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { getMonth } from '../helpers/utils';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { IconButton } from '@chakra-ui/react';
import DatePicker from './DatePicker';
import Day from './Day';

const ArrowLeft = chakra(FiChevronLeft);
const AArrowRight = chakra(FiChevronRight)


function Main() {
    
    const [value, setValue] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });
    
    const [marked, setMarked] = useState(); 
    
    const month = getMonth(value?.month, value?.year);
    
    const plusClick = () => {
        if (value.month < 11) {
            setValue({ ...value, month: value.month+1 })
        } else
            if (value.month === 11) { setValue({ month: 0, year: value.year + 1 }) }
        sessionStorage.setItem('Date', JSON.stringify(value));
    }
        const minusClick = () => {
            if (value.month > 0) { setValue({ ...value, month: value.month-1 }) } else
                if (value.month === 0) { setValue({ month: 11, year: value.year - 1 }) }
            sessionStorage.setItem('Date', JSON.stringify(value));    
    }

    const handleDatePick = (value) => { 
        setValue(value);
        sessionStorage.setItem('Date', JSON.stringify(value));
    }

    const handleMarked = (e) => {
        
        setMarked(e);
        console.log(e)
    }
    
//    useEffect(handleDatePick, [])

    return (
        <Center>
            
            <Box width='90%' borderWidth='1px' borderRadius='lg' mt='1vh' overflow='hidden'>
                <Box marginLeft={6} marginRight={6} minHeight='4vw'>
                    <Flex alignItems='center' p='1vw'>
                        <Button></Button>
                        <Spacer></Spacer>
                        <Flex alignItems='center' flexDirection='row' gap='.5vh'>
                            <IconButton
                                aria-label='minus'
                                size='sm'
                                bg='gray.100'
                                icon={<ArrowLeft w='2em' h='2em' />}
                                onClick={() => minusClick()}></IconButton>
                            <Box display='flex'
                                alignItems='center'
                                p='3px'
                                justifyContent='space-evenly'
                                borderWidth='1px'
                                borderRadius='lg'
                               
                                minWidth='7vw'>
                                {MONTHS[value?.month]} {value?.year}</Box>
                            <IconButton
                                aria-label='plus'
                                bg='gray.100'
                                size='sm'
                                icon={<AArrowRight w='2em' h='2em'/>}
                                onClick={() => plusClick()}
                            ></IconButton>
                            <DatePicker handleDatePick={ handleDatePick} />
                        </Flex>
                    </Flex>
                    
                </Box>
            <Box m='6' >
                    <SimpleGrid columns={7} gap='0.2vw' >
                        {month.map((week, i) => (<React.Fragment key={i}>
                            {week.map((day) => (<Day
                                day={day}
                                marked={marked}
                                handleMarked={handleMarked}                                
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