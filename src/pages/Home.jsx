import React from 'react'
import { images } from '../data/images'
import ProductCard from '../components/Product/ProductCard'
import { Link } from 'react-router-dom'
images


const Home = () => {
    return (
        <>
            <div className='w-full flex flex-col md:grid grid-cols-2 place-content-center gap-5  items-center justify-between lg:grid-cols-3'>

                {
                    images.map((each) => {

                        return (
                            <Link to={`/product/${each.imageUrl.replace(".JPG","")}`}>
                                <ProductCard {...each} />
                            </Link>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home