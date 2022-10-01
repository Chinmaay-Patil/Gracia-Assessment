import "./AboutUs.css"
import React from 'react';
import { Heading } from '@chakra-ui/react'
import image from '../images/door1.webp'

function AboutUs() {
    return (
        <div className="aboutus" >
            <div className="imageaboutus">
                <img src={image} />
            </div>
            <div className="aboutusinfo">
                <Heading className='Heading1' spacing={6} size='xl'>About Us</Heading>
                <hr className="HRforAboutus"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a hendrerit orci, a consectetur arcu. Ut finibus vehicula elit et posuere. Aliquam vulputate ac enim at tempor. Vestibulum sodales, lorem vitae elementum cursus, metus ante posuere leo, mattis laoreet ipsum est non erat. Phasellus
                <br></br><br></br>   <b>What We Belive In</b><br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a hendrerit orci, a consectetur arcu. Ut finibus vehicula elit et posuere. Aliquam vulputate ac enim at tempor. Vestibulum sodales, lorem vitae elementum cursus, metus ante posuere leo, mattis laoreet ipsum est non erat. Phasellus</p>
            </div>
        </div>
    )
}


export default AboutUs;