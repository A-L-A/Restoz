import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: 'Sending email...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        to_name: 'Recipient Name',
        email: data.email,
        message: data.message,
      };

      const response = await emailjs.send(
        "service_r1fy4iq",
        "template_ulkpdgh",
        templateParams,
        "01WXAvqEaJL1CXPdG"
      );

      if (response.status === 200) {
        Swal.fire({
          title: 'Email sent successfully!',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Error sending email',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error sending email',
        icon: 'error',
      });
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input
              {...register('firstName', { required: 'First name is required' })}
              type="text"
            />
            <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input
              {...register('lastName', { required: 'Last name is required' })}
              type="text"
            />
            <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              {...register('message', { required: 'Message is required' })}
              rows={4}
            />
            <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
