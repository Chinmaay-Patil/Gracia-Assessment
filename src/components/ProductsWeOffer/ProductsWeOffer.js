import './ProductsWeOffer.css'
import { Heading } from '@chakra-ui/react'


import image from '../images/Door.webp'
function ProductsWeOffer() {
    return (
        <div>
            <Heading className='Heading' spacing={6} size='xl'>Products We Offer</Heading>

            <hr className="new3" />
            <div className='productdetail1s'>
                <div className='productdetails'>
                    <img src={image} alt="ab" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet libero sed sem pulvinar aliquam. Morbi cursus id sapien lobortis cursus. Etiam nec dui et sapien fringilla varius eget sit amet tortor. Suspendisse mattis blandit malesuada. Duis at justo purus. Morbi consequat tincidunt leo, quis vulputate dolor ultricies eget. Suspendisse</p>

                </div>
                <div className='productdetails'>
                    <img src={image} alt="ab" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet libero sed sem pulvinar aliquam. Morbi cursus id sapien lobortis cursus. Etiam nec dui et sapien fringilla varius eget sit amet tortor. Suspendisse mattis blandit malesuada. Duis at justo purus. Morbi consequat tincidunt leo, quis vulputate dolor ultricies eget. Suspendisse</p>

                </div>
            </div>
            

            

        </div>
    )
}


export default ProductsWeOffer;