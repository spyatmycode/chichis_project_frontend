import { useState, useEffect } from "react"
import { images } from "../data/images"
import { useParams } from "react-router-dom"



//../../dist/assets/logo.png



const mythumbnails = images.map((image) => {

  const { imageUrl } = image
  return `../../dist/assets/${imageUrl}`
})

const thumbnails = [


  "../../dist/assets/Textured raindrop spotted vase.JPG",
  "../../dist/assets/Textured raindrop spotted vase.JPG",
  mythumbnails[1],
  mythumbnails[2],



]

export const Carousel = ({ children: slides,autoSlide = false, autoSlideInterval = 3000,}) => {

  const { imageUrl } = useParams()

  if(!imageUrl) return <h1>Loading...</h1>


  const currentImage = images && images.find((obj) => {
    
    return obj.imageUrl.replace((".JPG"),"") === imageUrl
  });

  
console.log(currentImage);


  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden relative max-h-72 md:max-h-full md:rounded-2xl">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <img className="h-[10px] w-[10px]" src="./images/icon-previous.svg" alt="" />
          </button>
          <button
            onClick={next}
            className="bg-white rounded-full p-3 md:hidden"
          >
            <img className="h-[10px] w-[10px]" src="./images/icon-next.svg" alt="" />
          </button>
        </div>

      </div>
      <div className="hidden md:flex w-full gap-8 mt-8 h-20">
        {
          thumbnails.map((t, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className="hover:cursor-pointer focus:opacity-20 rounded-xl"
            >
              <div className={`rounded-xl 
                  ${curr === i && 'border-2 border-orange'}`}>
                <img className={`rounded-xl w-9 
                    ${curr === i && 'opacity-40'}`} src={`../../dist/assets/${currentImage.imageUrl}`} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}



{/* <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div> */}