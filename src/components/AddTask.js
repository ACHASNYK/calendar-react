import React, { useState } from 'react'
import {
 
  Button,
  IconButton,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Box,
    useDisclosure,
  Input
} from '@chakra-ui/react';


function AddTask() {
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
      <Box w='20vw' h='40vw' borderWidth='2px' borderRadius='md'>
          <Flex flexDirection='column' gap='2vw'>
              <FormControl isRequired isInvalid={isError }>
                  <Box>Add your new task</Box>
                  <FormLabel>Title</FormLabel>
                  <Input type='text'
                      placeholder='please input the title'
                      value={input}
                      onChange={handleInputChange} 
                  >
                      {!isError ? (
                          <FormHelperText>
                            Expecting the title
                        </FormHelperText>
                      ) : (<FormErrorMessage>
                              No title === no deal!
                          </FormErrorMessage>)
                    }
                  </Input>
              </FormControl>
              
          </Flex>
          
    </Box>
  )
}

export default AddTask