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
  Text,
  Input,
  Textarea,
  Spacer
} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import { set_updated, set_created } from '../redux/date';
import { deleteFromLocalStorage, updateLocalStorage  } from '../helpers/hanldeStorage';
import {BsTrash} from 'react-icons/bs'


function UpdateTask({onClose, upd_time, upd_date, upd_desc, upd_created, upd_updated, upd_title, id}) {
    const [input, setInput] = useState({
        title: upd_title, 
        description: upd_desc, 
        date: upd_date, 
        time: upd_time, 
        created: upd_created,
        updated: upd_updated
    
    })
  
  const handleTitleChange = (e) => setInput({...input, title: e.target.value})
  const handleDescChange = (e) => setInput({...input, description: e.target.value})
  const handleDateChange = (e) => setInput({...input, date: e.target.value})
  const handleTimeChange = (e) => setInput({...input, time: e.target.value})
  const dispatch = useDispatch()
  const date = useSelector(state => state.date)
  
  // useEffect(setInput({...input, date: date.}))
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
                    <Text fontSize='.8em'>Created {upd_created}</Text>
                    <Text fontSize='.8em'>Updated {upd_updated}</Text>
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
                    <Button mr={3} onClick={()=>{deleteFromLocalStorage(id, input); dispatch(set_created(input.created)); onClose()}} bg='red.200'><BsTrash/></Button>
                    <Button 
                    isDisabled={isError} 
                    bg='blue.200' 
                    mr={3} 
                    onClick={()=>{ updateLocalStorage(id, input); dispatch(set_updated(input.created)); onClose() }}
                    >Save</Button>
                    </Flex>
                </Flex>
              </FormControl>
              
          
          
    </Box>
    </Center>
  )
}

export default UpdateTask