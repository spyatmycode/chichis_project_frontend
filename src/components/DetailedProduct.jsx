import { useParams } from "react-router-dom";
import { images } from "../data/images";

export const DetailedProduct = () => {

  const { imageUrl } = useParams()

  if(!imageUrl) return <h1>Loading...</h1>


  const currentImage = images && images.find((obj) => {
    
    return obj.imageUrl.replace((".JPG"),"") === imageUrl
  });

  
console.log(currentImage);

  
  return (
    <div>
        {/* Subtitle */}
        <h2 className="uppercase text-orange mb-3 font-bold tracking-[0.13em] text-xs 
        md:text-base">SHOP HAVEN</h2>
        {/* Product Name */}
        <h1 className="font-bold text-3xl mb-4 md:text-5xl md:mb-10">{currentImage.name}</h1>
        {/* Product Description */}
        <p className='text-dark-grayish-blue mb-5 text-sm leading-[22px] md:text-base'>
           {currentImage.description}
        </p>
        {/* Product Price */}
        <div className='flex items-center justify-between md:flex-col md:items-start mt-2'>
          <div className='flex gap-4 items-center'>
              {/* Price */}
              <span className='font-bold text-2xl'>${currentImage.price}</span>
              {/* Discount */}
              <span className='bg-pale-orange text-orange font-bold text-sm px-2 rounded-md'>50%</span>
          </div>
          {/* Previous price */}
          <span className='text-grayish-blue text-sm font-bold'><del>${currentImage.price * 2}</del></span>
        </div>
    </div>
  )
}
