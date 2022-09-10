import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react';
import AddTask from './AddTask';

function ModalTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button w='10vw' borderRadius='2vw' p='4vh' bg='blue.200' onClick={onOpen} >Click & Add Task</Button>

      <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddTask onClose={onClose}/>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalTask