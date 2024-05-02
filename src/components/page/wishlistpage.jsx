import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { useraxious } from "../../axious";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
const  Wishlist=()=>{
    const [wishlistData,setWishlistData]=useState();
async function getwishlist(){
    try{
        await useraxious.get('/getwishlist',{withCredentials:true}).then((res)=>{
            console.log(res.data.userdata);
            setWishlistData(res.data.userdata);
        })
    }catch (error){
        console.error(error);
        toast.error(error.message)
    }

    }
    useEffect(()=>{
getwishlist();
    },[]);
async function Delitem(id,size){
    try{
        console.log(id,size);
        await useraxious.delete(`/deletewishlistitem/${id}`,{data:{size},withCredentials:true}).then((res)=>{
            console.log(res);
        })
    }catch(error){
            toast.error(error.message);
    }
}

    return(<div className="flex justify-center items-center">
        {wishlistData?<div>
            {wishlistData.wishlist.map((item,key)=>{ 
                const {product_id,size,}=item;
                return(
            <div key={key} className="py-10 flex flex-col gap-2">
                <RiDeleteBin6Line className="mr-0 absolute" onClick={()=>{Delitem(product_id._id,size)}}/>
                <img src={product_id.images[0]}/>
                <p>{product_id.title}</p>
                <h1 className="font-bold text-red-500">Now ${product_id.price}</h1>
                <p className="font-light text-black">wa</p>
                <h2 className="w-full border-y-2 border-slate-400 text-slate-400">{product_id.colour[0]}</h2>
                {<button className="font-bold text-xl w-full py-1 border-4 border-green-500 ">MOVE TO BAG</button>}
            </div>)})}
        </div>:
        <div className="w-96 flex flex-col gap-2 items-center py-16" >
           <button className="h-full px-5">
          <IoHeartOutline
            className=" w-7 font-bold h-10"
            aria-label="Like Icon"
          />
        </button>
        <h1 className="font-semibold text-xl">You have no Saved Items</h1>
        <p>Start saving as you shop by selecting the little heart.
We'll sync your items across all your devices. Easy.</p>
<button className="text-white font-bold text-2xl px-5 py-2 bg-gray-800" >START SHOPPING</button>
    </div>}
    </div>)
}
export default Wishlist;
