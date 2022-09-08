import React, {useState, useEffect } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
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
import { getSesStorage } from '../helpers/getStorage';  


import { chakra } from '@chakra-ui/react'
import { GrCalendar } from 'react-icons/gr'
const CalendarIcon = chakra(GrCalendar);
const ArrowLeft = chakra(FiChevronLeft);
const ArrowRight = chakra(FiChevronRight);
const AArrowLeft = chakra(FiChevronsLeft);
const AArrowRight = chakra(FiChevronsRight);
function DatePicker() {
  const [value, setValue] = useState({
        // month: new Date().getMonth(),
        // year: new Date().getFullYear()
  });
  
  const handleStorage = () => {
    let data = getSesStorage();
    data ? setValue(data) : setValue({
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    })

  }

  const plusClick = (e) => {
    if (value.year > 0&&value.year < 2100) {
      setValue({ ...value, year: value.year + e })
    } else { setValue({ ...value, year: 2022 }) }
  }
    const minusClick = (e) => {
      if(value.year>0)
            { setValue({ ...value, year: value.year-e }) } else
                { setValue({...value, year: 2022})}
    
  }
  const arrowsize = {
    h: '1.5em',
    w: '1.5em',
    
  }
  // const { isOpen, onToggle, onClose } = useDisclosure();
  useEffect(handleStorage, []);

  return (
    <Popover >
      {({onClose }) => (
        <>
      <PopoverTrigger>
       <IconButton size='sm' borderWidth='1px'  icon={<CalendarIcon w='1em' h='1em' bg='gray.100'></CalendarIcon>} ></IconButton>
      </PopoverTrigger>
      <PopoverContent w='10vw' minW='200px'>
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
                                icon={<AArrowRight sx={ arrowsize} />}
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
            {/* <SimpleGrid columns={3} gap='.5vh'  ></SimpleGrid> */}
            {Object.keys(MON).map((e, i) => (<Box 
              key={i}
              textAlign='center'
              borderWidth='1px'
              borderRadius='sm'
              bg='gray.50'
              p='2px'
              w='3em'
              onClick={onClose}
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