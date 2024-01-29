import { useParams } from 'react-router-dom';
import { images } from '../data/images';
import { Carousel } from './Carousel';



const mythumbnails = images.map((image) => {

  const { imageUrl } = image
  return `../../dist/assets/${imageUrl}`
})

const slides = [
  mythumbnails[0],
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];


const thumbnails = [
1,2,3,4
]


export const Slider = () => {

  const { imageUrl } = useParams()

  if (!imageUrl) return <h1>Loading...</h1>


  const currentImage = images && images.find((obj) => {

    return obj.imageUrl.replace((".JPG"), "") === imageUrl
  });


  console.log(currentImage);



  return (
    // <div className='relative h-72 overflow-hidden'>
    <div className='relative md:w-full md:max-w-[500px]'>
      {/* <img className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' src="./images/image-product-1.jpg" alt="" /> */}
      <Carousel>
        {
          slides.map(s => (
            <img className='' key={s} src={`../../dist/assets/${currentImage.imageUrl}`} />
          ))
        }
      </Carousel>
    </div>
  )
}
