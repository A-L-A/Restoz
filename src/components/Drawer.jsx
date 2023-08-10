import React from 'react'
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    DrawerFooter,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Textarea,
    Stack,
    useDisclosure,
    } from '@chakra-ui/react'

    import Swal from 'sweetalert2'


function ReservationDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    const handleClick = () => {
        onClose()
        Swal.fire({
            title: 'Processing your reservation',
            text: 'Please wait...',
            icon: 'info',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            didOpen: () => {
                SweetAlert2.showLoading()
            }
        })
        setTimeout(() => {
            Swal.fire({
                title: 'Reservation confirmed',
                text: 'We look forward to hosting you',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            })
        }
        , 2000)

    }
  
    return (
      <>
        <Button variant="solid" colorScheme="blue" onClick={onOpen}>
          Make a reservation
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Make a reservation
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='name'
                    placeholder='Please enter your name'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Meal</FormLabel>
                  <Select id='owner' defaultValue='breakfast'>
                    <option value='breakfast'>Breakfast</option>
                    <option value='lunch'>Lunch</option>
                    <option value='dinner'>Dinner</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Do you have any more details you would love us to know before your arrival?</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={handleClick}>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default ReservationDrawer