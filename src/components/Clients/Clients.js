import { Heading } from '@chakra-ui/react'
import image from '../images/cleints.png'
import { Input } from '@chakra-ui/react'
import './Clients.css'

import { Button } from '@chakra-ui/react'
import { useState } from 'react'
function Clients() {
    const [subscribersList, setSubscribersList] = useState([]);
    const [myArray, updateMyArray] = useState("");

    const onClick = () => {
        if (myArray != null) {
            setSubscribersList([...subscribersList, myArray]);
            console.log(subscribersList);
            updateMyArray('');
            window.alert("Subscribed Successfully")
        }
    };

    return (
        <div>
            <Heading className='Heading' spacing={6} size='xl'> Our Clients</Heading>

            <hr className="new3" />
            <div className='container'>
                <div className='lefta'>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>


                </div>
                <div className='lefta'>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>
                    <div>
                        <img className='imageforservices' alt='abc' src={image} />

                    </div>

                </div>
            </div>

            <div className='subscribers'>
                <div className='inputforsubscribers'>
                    <Input value={myArray} type='email' onChange={(e) => {
                        updateMyArray(e.target.value);
                        console.log(myArray)

                    }} variant='filled' placeholder='Enter Your Email' size='lg' ></Input>
                </div>
                <div className='submitbuttontosubscriber'>
                    <Button onClick={onClick} colorScheme='blue'>Subscribe</Button>
                    {/* <input type="button" onClick={ onClick } value="Update" /> */}
                </div>

            </div>
        </div>
    )
}


export default Clients;