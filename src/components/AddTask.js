import React, { useState, useEffect } from 'react'
import {
  Center,
  Button,
  
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Box,
  Divider,
  
  Input,
  Textarea,
  Spacer
} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {setLocalStorage} from '../helpers/hanldeStorage';
import {set_title} from '../redux/date'


function AddTask({onClose}) {
    const [input, setInput] = useState({
      title: '',
      description: '',
      date: '',
      time: '',
      created: '',
      updated: ''

    })
  
  const handleTitleChange = (e) => setInput({...input, title: e.target.value})
  const handleDescChange = (e) => setInput({...input, description: e.target.value})
  const handleDateChange = (e) => setInput({...input, date: e.target.value})
  const handleTimeChange = (e) => setInput({...input, time: e.target.value})
  const dispatch = useDispatch()
  const date = useSelector(state => state.date)
  
  useEffect(()=> {console.log(date.date); setInput({...input, date: date.date})},[date])
  const divider = {
    borderWidth:'2px',
    boxShadow: 'lg'
  }
  const isError = (input.title === '' || input.date==='')
  return (
    <Center>
      <Box w='100%' p='5px' m='1vh' h='33vw' >
          
              <FormControl isRequired isInvalid={isError }>
                 <Flex flexDirection='column' gap='4vw'> 
                   <Box>
                    <FormLabel>Title</FormLabel>
                    <Input type='text'
                      placeholder='please input the title'
                      value={input.title}
                      onChange={handleTitleChange}
                      variant='unstyled' 
                  />
                  <Divider sx={divider}/>
                      {!isError ? (
                          <FormHelperText>
                            Good!
                        </FormHelperText>
                      ) : (<FormErrorMessage fontSize='.8em'>
                              Please fill required fields
                          </FormErrorMessage>)
                    }
                    </Box>
                    <Box>
                    <FormLabel requiredIndicator>What to do?</FormLabel>
                    <Textarea
                    variant='unstyled'
                    borderWidth='1px'
                    placeholder='description please type here'
                    value={input.description}
                    onChange={handleDescChange}
                    />
                  </Box>

                  <Flex flexDirection='row'>
                    <Box>
                      <FormLabel>Date</FormLabel>
                      <Input
                      type='date'
                      variant='unstyled'
                      value={input.date}
                      onChange={handleDateChange}

                      />
                      <Divider sx={divider} />
                      {!isError ? (
                          <FormHelperText>
                            Good!
                        </FormHelperText>
                      ) : (<FormErrorMessage fontSize='.8em'>
                             Please fill required fields
                          </FormErrorMessage>)
                    }
                    </Box>
                    <Spacer/>
                    <Box>
                    <FormLabel requiredIndicator>Time</FormLabel>
                      <Input
                      type='time'
                      variant='unstyled'
                      value={input.time}
                      onChange={handleTimeChange}

                      />
                      <Divider sx={divider} />
                    </Box>
                  </Flex>
                  <Flex justifyContent='flex-end'>
                    <Button as='button' 
                    isDisabled={isError} 
                    bg='blue.200' 
                    mr={3} 
                    onClick={()=>{dispatch(set_title(input.title)); setLocalStorage(input); onClose() }}
                    >Save</Button>
                    </Flex>
                </Flex>
              </FormControl>
              
          
          
    </Box>
    </Center>
  )
}

export default AddTask