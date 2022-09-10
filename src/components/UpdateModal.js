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
    useDisclosure,
    Badge
} from '@chakra-ui/react';
import UpdateTask from './UpdateTask';
import {useDispatch} from 'react-redux';
import {set_id, 
    set_title, set_created, 
    set_desc, set_time, set_date} from '../redux/date'

function UpdateModal({title, time, date, desc, created, updated, id}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <>
      <Badge w='80%' borderRadius='1vw' textAlign='center' bg='blue.100' onClick={onOpen} >{title} at {time}</Badge>

      <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update existing task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateTask onClose={onClose} upd_title={title}
             upd_time={time} upd_desc={desc}
              upd_date={date} 
              upd_created={created}
              upd_updated={updated}
              id={id}/>
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

export default UpdateModal