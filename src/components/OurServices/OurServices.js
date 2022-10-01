import { Heading } from '@chakra-ui/react'
import image from '../images/services.JPG'
import image1 from '../images/carpenter.png'
import { Grid, GridItem } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import './OurServices.css'
function OurServices() {
    return (
        <div>
            <Heading className='Heading' spacing={6} size='xl'>Our Services</Heading>

            <hr className="new3" />

            <div className='container'>
                <div className='lefta'>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>


                </div>
                <div className='lefta'>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                    <div>
                        <img className='imageforservices' src={image} />
                        <p>dsadsadsad</p>
                    </div>
                </div>
            </div>
            <div className='video'>
                <div className='leftvideopanel'>

                    <AspectRatio  ratio={16/9}>
                        <iframe
                            title='naruto'
                            src='https://www.youtube.com/embed/WjoplqS1u18'
                            allowFullScreen
                        />

                    </AspectRatio>
                    <Heading className='videodescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu nibh, tempor id sagittis eu, congue eget risus. Maecenas id libero vel mi porta congue eu sed libero. Morbi vitae nulla congue, lobortis sem in, sollicitudin nulla. Aenean efficitur sagittis felis quis posuere. Cras non odio quis felis aliquet egestas. Nunc eget nisl turpis. Ut vehicula id metus nec gravida. Morbi viverra sem nec augue convallis, at blandit neque sollicitudin. Donec pellentesque pretium massa, at pellentesque orci tristique id.</p>
                </div>
                <div className='rightvideopanel'>
                <Heading className='videodescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu nibh, tempor id sagittis eu, congue eget risus. Maecenas id libero vel mi porta congue eu sed libero. Morbi vitae nulla congue, lobortis sem in, sollicitudin nulla. Aenean efficitur sagittis felis quis posuere. Cras non odio quis felis aliquet egestas. Nunc eget nisl turpis. Ut vehicula id metus nec gravida. Morbi viverra sem nec augue convallis, at blandit neque sollicitudin. Donec pellentesque pretium massa, at pellentesque orci tristique id.</p>
              
              <img src={image1}/>
                </div>
               


            </div>
        </div>

    )
}


export default OurServices;