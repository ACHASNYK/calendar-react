import React, {useState, useEffect } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,

  PopoverArrow,
  
  IconButton,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import {FiChevronLeft,FiChevronRight,FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { MON } from '../helpers/months';  

import { useDispatch } from 'react-redux/es/hooks/useDispatch';  
import { set_day, set_month, set_year } from '../redux/date';

import { chakra } from '@chakra-ui/react'
import { GrCalendar } from 'react-icons/gr'
import { setSesStorage } from '../helpers/hanldeStorage';
const CalendarIcon = chakra(GrCalendar);
const ArrowLeft = chakra(FiChevronLeft);
const ArrowRight = chakra(FiChevronRight);
const AArrowLeft = chakra(FiChevronsLeft);
const AArrowRight = chakra(FiChevronsRight);

function DatePicker({data}) {
  const [value, setValue] = useState({
        month: data?.month,
        year: data?.year
  });
  console.log('picker', value)
  const dispatch = useDispatch()
  

  const plusClick = (e) => {
    if (value.year > 0&&value.year < 2100) {
      setValue({ ...value, year: value.year + e })
    } else { setValue({ ...value, year: 2022 })}
    
  }
    const minusClick = (e) => {
      if(value.year>0)
            { setValue({ ...value, year: value.year-e }) } else
                { setValue({...value, year: 2022})}
                
  }
  
  const handleValue = (e) => {
    setValue({ ...value, month: e });
    dispatch(set_month(e));
    dispatch(set_year(value.year));
    
   }
  const arrowsize = {
    h: '1.5em',
    w: '1.5em',
    
  }
  
  

  useEffect(() => { setSesStorage(value) }, [value]);

  

  return (
    <Popover >
      {({onClose }) => (
        <>
      <PopoverTrigger>
       <IconButton size='sm' borderWidth='1px'  icon={<CalendarIcon w='1em' h='1em' bg='gray.100'></CalendarIcon>} ></IconButton>
      </PopoverTrigger>
      <PopoverContent w='10vw' minW='12vw'>
      <PopoverArrow />
        <PopoverHeader>
          <Flex alignItems='center' flexDirection='row' gap='3px' justifyContent='space-around'>
                            <IconButton
                                aria-label='minus'
                                size='xs'
                                borderRadius='md'  
                                bg='blue.100'
                                icon={<AArrowLeft sx={arrowsize}/>}
                                onClick={() => minusClick(10)}></IconButton>
                            <IconButton
                                aria-label='minus'
                                size='xs'
                                borderRadius='md' 
                                bg='blue.100'
                                icon={<ArrowLeft sx={arrowsize } />}
                                onClick={() => minusClick(1)}></IconButton>
                            <Box display='flex'
                                alignItems='center'
                                // p='1px'
                                justifyContent='space-evenly'
                                borderWidth='1px'
                                borderRadius='md'
                               
                                minWidth='4vw'>
                                {value.year}</Box>
                            <IconButton
                                aria-label='plus'
                                bg='blue.100'
                                size='xs'
                                icon={<ArrowRight sx={arrowsize } />}
                                onClick={() => plusClick(1)}
                            ></IconButton>
                            <IconButton
                                aria-label='plus'
                                bg='blue.100'
                                size='xs'
                                icon={<AArrowRight sx={arrowsize} />}
                                onClick={() => plusClick(10)}
                            ></IconButton>
                            
                        </Flex>
      </PopoverHeader>
        <PopoverBody>
          <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            gap='1.5vh'
            alignItems='center'
            justifyContent='center'
        
          >
            
            {Object.keys(MON).map((e, i) => (<Box 
              key={i}
              textAlign='center'
              borderWidth='1px'
              borderRadius='sm'
              bg='gray.50'
              p='2px'
              w='3em'
              onClick={() => { handleValue(i); onClose(); setSesStorage(value) }}
              _hover={{
                // background: 'blue.100',
                // color: 'white',
                cursor: 'pointer',
                boxShadow: 'outline'
              }}
            >{MON[e] }</Box>))}
          </Box>
    </PopoverBody>
  </PopoverContent>
</>        
)}
</Popover>
  )
}

export default DatePicker