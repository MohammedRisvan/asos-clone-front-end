import { BsBag } from "react-icons/bs";
import {useraxious} from '../../axious';
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
// import { DeleteCart } from "../../../../ebayback/app/controllers/userform";


function CartPage(){
  const [data,setCartData]=useState();
  const getcart=async()=>{
    try{
    await useraxious.get('/showcart',{withCredentials:true}).then((info)=>{
    console.log(info);
    setCartData(info.data);
    })
    }catch(error){
  console.warn(error)
    }
  };
  useEffect(()=>{
    getcart();
  },[]);
  const DelCart =async(id,size)=>{
    console.log(id,size);

    await useraxious.delete(`/deletecartitem/${id}`,{data:{size},withCredentials:true}).then((result)=>{
    setCartData(result.data);
    toast.success(result.data.message)
    if(result){
    }
    }).catch((error)=>{
      toast.error(error.message)
      console.log(error)
    })
  }

  return(<>
{data
?<div className="flex flex-col gap-5 w-1/2">
{data.userdata.cart.map((item,key)=>{
  const {product_id,size,quantity}=item
  console.log(item)
  return(<div key={key}className="flex w-full bg-white px-5 py-3 border-2 border-red-500 ">

<img src={product_id.images[0]} className="w-52"/> 
<div className="flex flex-col gap-5 py-5">
  <h1 className="font-bold text-lg">${product_id.price}</h1>
  <p className="">{product_id.title}</p>
  <span></span>
  <div className="flex font-light">
    <h1>{product_id.colour[0]}</h1>
    <h1>{size}</h1>
    <div>
      <h1>Qty{quantity}</h1>
      
    </div>
  </div>

  {/* <IoHeartOutline
            className="hover:bg-black w-7 h-10"
            aria-label="Like Icon"
          /> */}
          <div className="w-10 bg-blaack h-10"/>
</div>
    <RxCross2 className=""onClick={()=>{DelCart(product_id._id,size)}}/>
  </div>)
})}
</div>:<div className="flex flex-col w-full py-5 items-center gap-1">
<button className="h-full px-5">
      <BsBag className="h-10"  />
    </button>
    <h1 className="font-semibold text-lg">Your bag is empty</h1>
    <p className="font-light flex flex-col items-center"><p>Items remain in your bag for 60 minutes,and then</p> <p>they're moved to your Saved items.</p></p>
    <button className="font-bold text-xl bg-green-800  text-white px-3 py-1">VIEW SAVED ITEMS</button>
    <a href="/" className="text-black underline">continue shoping</a>
    </div>}
        </>);
};
export default  CartPage;
