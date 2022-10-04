import './Footer.css'
import image from '../images/PathFrameLogoForFooter.png'
import { Button, Text } from '@chakra-ui/react'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Input } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'


import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,

    TableContainer,
    Heading,
} from '@chakra-ui/react'

function Footer() {

    function handleSubmit() {
        console.log("handle submit");
    }
    return (
        <div className='footer'>

            <div className='leftpanelforfooter'>
                <img className='imageforfooter' alt='abc' src={image} />
                <p>Mauris et scelerisque.<br /> Morbi pellentesque tempor.<br /> Donec at ullamcorper elit. ex. Curabitur ac ultrices elit</p><br /><br />
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Proin luctus justo <br />orci, at faucibus nibh vestibulum id. In nec iaculis sem,<br /> eu tempor orci. Duis sed purus dictum, lacinia neque id, fermentum est. </p>
            </div>
            <div className='middlepanelforfooter'>
                <TableContainer>
                    <Table variant='unstyled'>

                        <Thead>
                            <Tr>
                                <Th><Heading size='md'>Support</Heading></Th>
                                <Th><Heading size='md'>Contact Us</Heading></Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Projects</Td>
                                <Td><Text fontSize='md'> <PhoneIcon className='socialmediaiconsemail' />+91-0000000000/7845</Text></Td>

                            </Tr>
                            <Tr>
                                <Td>Warranty</Td>
                                <Td>  <SocialIcon className='socialmediaiconsemail' bgColor="#ffffff" network="email" style={{ height: 25, width: 25 }} />abcdh@gmail.com</Td>

                            </Tr>
                            <Tr>
                                <Td>About Us</Td>
                                <Td>
                                    <SocialIcon className='socialmediaicons' network="twitter" style={{ height: 30, width: 30 }} />
                                    <SocialIcon className='socialmediaicons' network="facebook" style={{ height: 30, width: 30 }} />
                                    <SocialIcon className='socialmediaicons' network="instagram" style={{ height: 30, width: 30 }} />
                                </Td>

                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
            </div>
            <div className='rightpanelforfooter'>
                {/* <Input placeholder='medium size' size='md' /> */}
                <Input variant='flushed' color='black' size='md' placeholder='Name' />
                <Input type='email' variant='flushed' color='black' size='md' placeholder='Email' />
                <Input variant='flushed' color='black' size='md' placeholder='Contact Number' />
                <Input type='text' variant='flushed' color='black' size='md' placeholder='Message' />
                <Button onClick={handleSubmit} colorScheme='blue'>Send</Button>
            </div>


        </div>
    )
}


export default Footer;


