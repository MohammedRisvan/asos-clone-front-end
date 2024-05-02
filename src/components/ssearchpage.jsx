import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useraxious } from "../axious";
import { useParams } from "react-router-dom";
const getFilteredItems = (query, items) => {
    const lowerCaseQuery = query.toLowerCase();
    if (!lowerCaseQuery) {
      return items;
    }
    return items.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.brand.toLowerCase().includes(lowerCaseQuery) ||
      product.colour.toLowerCase().includes(lowerCaseQuery)
    );
  };


function Allcollection (){

  
    const [data,setData]=useState();

    console.log(data);
    const {id}= useParams();
    
    const filterdItems=getFilteredItems('6626519a74b66b45c81d184e',data);

    const allproducts=async()=>{
        try{
await useraxious.get('/allproduct').then((res)=>{
    setData(res.data);
}).catch((error)=>{console.log(error.message)})
        }catch(error){
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        allproducts();
    },[]);

    function productitem(id,name){
        console.log(id,name);
        sessionStorage.setItem('productid', id);
        window.location=`/showproduct/${name}`
    }

return(
<div>
    <nav className="w-full bg-slate-100 py-10 flex flex-col items-center">
    <p className="text-sm font-light">Your search results for:</p>
    <h1 className=" text-xl font-semibold">" N "</h1>
    </nav>
  {  <div className="w-full flex flex-wrap gap-3 h-full bg-slate-200 py-5 px-5">
    {data?.shoes?.map((items,key)=>{
        const {images,title,_id}=items;
        return(<div className="flex bg-white flex-col py-1 gap-2" onClick={()=>{productitem(_id,title)}}>
            <img src={images[0]} alt="img"/>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
        )
    })}
    </div>}
</div>
)};

export default Allcollection