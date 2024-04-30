
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { useraxious } from "../../axious";
// import sharebutton from 'react-share'
function Productpage() {
  //     const [id,setid]=useState("hellow");

  //   const a =  localStorage.setItem( "productId", id );
  const productid = sessionStorage.getItem("productid");
  //  console.log(productid)
  const [productImages, setProductImages] = useState();
  const [productdetailes, setProductdetailes] = useState();
  const [bigImage, setBigImage] = useState();
  const [size,setSize]=useState('')
  const product = async () => {
    try {
      const response = await useraxious.get(`/product/${productid}`, { withCredentials: true }
      );
      const wishlist = response?.data.product.wishlist.filter((item) => item.product_id === productdetailes._id);
      console.log(wishlist, "wish");
      setProductdetailes(response.data.product);
      setProductImages(response.data.product.images);
      setBigImage({ item: response.data.product.images[0], key: 0 });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    product();
  }, []);
  async function addtocart() {
    if(size!==""){
    try {
      await useraxious.put(`/addtocart/${productid}`, {size}, { withCredentials: true })
        .then((res) => {
          toast.success(res.data.message);
        }).catch((error) => {
          toast.error(error.message, 'error')
          console.log(error, "error")
        });

    } catch (error) {
      console.error(error)
      toast.error(error.message);
    }}else{
      toast.error('please select your size')
    }

  }
  //--detailes--//

  const initialsate = {
    detailes: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "show":
        return { ...state, detailes: action.name };
      case "hide":
        return { ...state, detailes: null };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialsate);
  const fixwishlist = async () => {
    try {
      await useraxious.post(`/wishlist/${productid}`,{size}, { withCredentials: true }).then((responce) => {
        console.log(responce, ":hello")
      })

    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  }
  //------zoom image-//
  const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level at 100%

  const handleScroll = (event) => {
    const deltaY = event.deltaY;
    const newZoomLevel = zoomLevel + deltaY * 0.1; // Adjust the multiplier to control zoom speed
    setZoomLevel(Math.min(Math.max(10, newZoomLevel), 1000)); // Limit zoom level between 10% and 1000%
  };
  // const handleZoom = (delta) => {
  //   // Adjust zoom level based on scroll delta
  //   const newZoomLevel = zoomLevel + delta * 10; // Adjust the multiplier to control zoom speed
  //   setZoomLevel(Math.min(Math.max(10, newZoomLevel), 1000)); // Limit zoom level between 10% and 1000%
  // };

  //  setid(productid);
  //   console.log(productid,"abcd")
  // //  setid(productid);

  // let discription="New Balance 610 trainers in orange";
  return (
    <div className="flex justify-center gap-5 overflow-hidden py-5 lg:px-32">
      {/* <h1>{"hellow"}</h1> 
     <div className='w-60 h-60 rounded-full bg-red-600 'style={{
      clipPath: 'polygon(50% 50%, 0% 100%, 0% 100%, 100% 100%, 100% 100%)'}}>
        
      </div> */}
      <div className="flex flex-col gap-2 w-2/12 ">
        {productImages &&
          Array.isArray(productImages) &&
          productImages.map((item, key) => {
            return (
              <img
                onClick={() => {
                  setBigImage({ item, key });
                }}
                src={item}
                key={key}
                className={`w-16 border-2 p-2 
                 //$ {// bigImage === item && "border-blue-700"// }
                `}
                alt="firstimg"
              />
            );
          })}
      </div>
      <div
        className="w-6/12 relative flex justify-center items-center  overflow-auto"
        onWheel={handleScroll}
      >
        {bigImage && (
          <img
            src={bigImage.item}
            className="w-full"
            // style={{touchAction:' none', userSelect: 'none', WebkitUserDrag:' none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}
            // style={{ width: ${zoomLevel}%
            // , transition: "width 0.5s" }}
            alt=""
          />
        )}
        <button className="absolute flex w-full justify-between text-3xl">
          <IoIosArrowBack
            onClick={() => {
              if (bigImage.key === 0) {
                setBigImage({
                  item: productImages[productImages.length - 1],
                  key: productImages.length - 1,
                });
              } else {
                setBigImage({
                  item: productImages[bigImage.key - 1],
                  key: bigImage.key - 1,
                });
              }
            }}
          />
          <IoIosArrowForward
            onClick={() => {
              if (bigImage.key === productImages.length - 1) {
                setBigImage({ item: productImages[0], key: 0 });
              } else {
                setBigImage({
                  item: productImages[bigImage.key + 1],
                  key: bigImage.key + 1,
                });
              }
            }}
          />
        </button>
      </div>
      <div className="w-3/12 ">
        {productdetailes && Object(productdetailes) && (
          <div className="flex flex-col gap-5 text ">
            <h1 className="text-lg font-light">{productdetailes.title}</h1>
            <p className="font-bold text-lg text-slate-600">
              ${productdetailes.price}
            </p>
            <div className="flex flex-col gap-2">
              <p className="flex  ">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </p>
              <div className="bg-blue-500 w-full h-16">
                <p>This item is exicuted fromdiscound codes.</p>
              </div>
              {productdetailes && (
                <p className="flex">
                  <h1 className="font-semibold">Colour:</h1>
                  {productdetailes.colour[0]}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <span className="w-full flex justify-between">
                <h1 className="font-semibold flex items-center">SIZE :</h1>
                <a href="/a#">Size Guide</a>
              </span>
              <div><select  onChange={(e)=>{console.log(setSize(e.target.value))}} name="size" id="" className="border-2 w-full px-2">
                <option value=''
                // onClick={()=>{if(state.detailes==="size"){dispatch({type:"show"})}else{dispatch({type:"show",name:"size"})}}}
                >please select  your size</option>
                {//state.detailes === "size" &&
                  productdetailes && productdetailes.size.map((item, key) => {
                    console.log(item, key); return (
                      <option key={key} className="relative w-full  text-sm font-bold  border-[1px] px-2" value={item.size}>
                        <span className="">{"UK" + item.size}<span className="font-light  absolute right-0">{item.quantity}</span></span>
                      </option>)
                  })}
              </select>

              </div>
              <span className="flex gap-1 px-2 ">
                <button className="w-full bg-green-700 text-lg text-white font-bold rounded  py-1" onClick={addtocart}>
                  ADD TO BAG
                </button>
                <button onClick={fixwishlist}>{false ? <CiHeart /> : <FaHeart />}</button>
              </span>
            </div>
            <div className="w-full flex flex-col gap-3 py-5 px-3 border-2">
              <span className="flex items-center">
                <CiDeliveryTruck className="text-5xl" />
                <p>Free delivery on qualifying orders</p>
              </span>
              <p className="flex flex-shrink-0 ">
                View our Delivary & Returns Policy{" "}
                <buttton
                  onClick={() => {
                    navigator.clipboard.writeText("http://localhost:3000/");
                  }}
                >
                  <MdContentCopy />
                </buttton>
              </p>
            </div>
            <div className="px-2 h-48">
              <ul className="px-2">
                <h1 className="font-medium text-lg flex justify-between border-y-2 items-center ">
                  Product Details
                  <span className="font-normal text-4xl">+</span>
                </h1>
                {<p>{productdetailes.productDetailes}</p>}
              </ul>
              <ul className="px-2">
                <h1 className="font-medium text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-4xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-medium text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-4xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-medium text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-4xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-medium text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-4xl">+</span>
                </h1>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productpage;