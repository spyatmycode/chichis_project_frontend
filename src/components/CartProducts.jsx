import { useParams } from "react-router-dom";
import { images } from "../data/images";
import { useCartContext } from "../providers/CartProvider";
import { PaystackButton } from 'react-paystack'

export const CartProducts = () => {





    const { imageUrl } = useParams()

  


    const currentImage = images && images.find((obj) => {

        return obj.imageUrl.replace((".JPG"), "") === imageUrl
    });


    console.log(currentImage);

    const { cart, setCart } = useCartContext()


    const removeFromCart = (id)=>{
        const updatedCart = cart.filter((items)=> items.id !== id)

        setCart(updatedCart)
    }


    const paystackButtonProps = {
        email: "auisweproject@test.com",
        amount: 10000,
        metadata: {
        },
        publicKey: `pk_live_729425cdaab5414754847d06f523e6cd1cc78f59`,
        text: `Check out now $${cart.reduce((acc, i)=> {
            const {totalPrice}= i

            console.log(totalPrice);
            return acc + totalPrice
        },0)}`,
    
        onSuccess: () => {
          alert("Thanks for doing business with us! Come back soon!!");
          handleSubmit();
        },
        onClose: () => {
          alert("Are you sure you don't want to buy this piece?");
          setShow(false)
        },
      }
    





    return (
        <div className="flex flex-col gap-6">
            {/* Cart Details */}

            {
                cart?.map((product) => {
                    const { name, price, imageUrl, totalPrice, count, id } = product
                    return (
                        <div className="flex flex-row gap-2 items-center justify-between">
                            {/* Product Thumbnail */}
                            <div className="h-12 flex gap-4">
                                <img className="max-h-full rounded-md" src={`../../dist/assets/${imageUrl}`} alt="" />
                                {/* Product and Cart Details */}
                                <div className="flex flex-col text-dark-grayish-blue">
                                    <span>{name}</span>
                                    <span>{count} x ${price}.00 <strong className="text-black">${totalPrice}.00</strong> </span>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=>removeFromCart(id)}>
                                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" /></svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

            {/* Checkout Button */}
            <PaystackButton  {...paystackButtonProps} className='bg-orange py-4 rounded-xl text-white mb-2 font-bold' />
           
        </div>
    )
}

/* 
<button className="bg-orange py-4 rounded-xl text-white mb-2 font-bold">
Checkout ${cart.reduce((acc, i)=> {
    const {totalPrice}= i

    console.log(totalPrice);
    return acc + totalPrice
},0)}
</button> */





