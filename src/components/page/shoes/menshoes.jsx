import React, { useEffect, useReducer, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import Productpage from "../productpage";
import toast from "react-hot-toast";
import { useraxious } from "../../../axious";
const MenShoes = () => {
  const [showdata,setShowdata]=useState();
  
  const data=async()=>{
    const shoew=  await useraxious.get('/showshoeproduct',{withCredentials:true}).catch((error)=>toast.error(error.message))
    setShowdata(shoew.data);
  }
  useEffect(()=>{
  data();
},[]);

//---------sizesesson-----------//
const [searchsize,setSearchsize]=useState("");
const sizes=['Recommended',
              "What's new",
              'Price high to low',
              'Price low to high',]
//price-range-button
const [pricestart,setstatprice]=useState()

  const initialstate = {
    showtitle: true,
    focusedButton:null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FOCUS":
        return { ...state, focusedButton: action.payload };
      case "UNFOCUS":
        return { ...state, focusedButton: null };
      case "show":
        return { ...state,showtitle:false};
        case "hide":
          return{...state,showtitle:true};
      default:
        return state;
    }
  };

  const [shotitle, setShotitle] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialstate);
  const location=useLocation()
  const path= location.pathname.toString().split('/');
  path[0]='home';
  const Itempage=(item)=>{
    
    sessionStorage.setItem('productid',item._id)
    window.location=`/showproduct/${item.title}`
  }
  // function capitalizeFirstLetter(str) {
  //   return str.replace(/^\w/, c => c.toUpperCase());
  // }
  
   // Output: "Hello"
  
   function capitalizeFirstLetterInArray(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }
  const capitalizedpathArray = capitalizeFirstLetterInArray(path);
  // const Handlefocus=(button)=>{}
  return (
    <div>
      <div className="flex items-center gap-3 px-5 font-semibold">
        {capitalizedpathArray.map((item,index)=>{
          return(<Link to={"/"+item.toLowerCase()} key={index}> {item} {">"} </Link>)
        })}
      </div>
      <div className="flex flex-col w-full pb-5 border-y-[1px] border-slate-300 gap-3 h-full items-center justify-center">
        <h1 className="font-semibold text-3xl">Men's Shoes & Footwear</h1>
        <p
          className="w-4/6 justify-center flex flex-shrink "
          onClick={() => {
          state.showtitle?dispatch({type:"show"}):dispatch({type:"hide"});
          }}
        >
          Kick back and get ready for a shoe-drobe reboot with our men’s
          footwear edit.
          <span className={state.showtitle && `hidden`}>
            Scroll men’s shoes that’ll have your ‘fit sorted from the bottom up,
            or let your feet do the talking with men’s casual shoes from adidas
            Originals and gain some serious style credentials in on-trend colour
            combos and fabrics. Not enough flex for you? Lace-up with trainers
            from New Balance – we’re talking the OG 550s and 530s (IYKYK).
            Whether it’s chelsea boots or loafers you’re after, elevate your
            smart-casj looks with men’s going-out shoes from ASOS DESIGN or get
            down to business with men’s work shoes that will have the whole
            office talking. Now, where's the checkout?
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 py-3">
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          TRAINERS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          BOOTS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          SHOES
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          LOAFERS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          SMART SHOES
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          SLIPPERS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          SLIDERS & FLIP FLOPS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          SANDALS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          CHELSEA BOOTS
        </button>
        <button className="px-3 py-px bg-slate-200 hover:bg-slate-400 text-sm font-semibold rounded-full">
          BROGUES &DERBY SHOES
        </button>
      </div>
      <div className="bg-slate-200 flex flex-wrap gap-5 h-full px-1 py-2">
        
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="sort"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'sort'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Sort<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="sort"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="sort"&&
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown`}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="sales/newseason"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'sales/newseason'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Sale / New Season<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="sales/newseason"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="sales/newseason"&&
            <div className="absolute">
              <div className="flex h-12 bg-white justify-between w-80 px-2 py-1">
                <p>{"0"}selected</p>
                <button className="font-semibold text-xl text-slate-500 border-[3px] px-2 border-slate-500">ALL</button>
              </div>
             <ul
             className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>New Season {}</li>
              <li>Sale{}</li>
              </ul> 
            </div>
          }
        </div>
        <div 
          // onBlur={()=>{dispatch({type:"UNFOCUS"})}}
          
        >
          <div 
            onClick={() => {state.focusedButton==="size"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'size'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2"
          >
            Size<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="size"&&'rotate-180'} `}/>
          </div>
          {state.focusedButton==="size"&&
          <button className="absolute"
          onFocus={()=>{dispatch({type:"FOCUS",payload:"size"})}}
          //  onClick={()=>{dispatch({type:"FOCUS",payload:'size'})}}
           >
            <div className="flex flex-col bg-white gap-3 px-2 py-1">
            <div className="flex h-12  justify-between w-80 rounded-full">
                <p>{"0"}selected</p>
                <button className="font-semibold text-xl  border-[3px] px-2 border-black">ALL</button>
              </div>
              <input type="text" className="border-2 border-black rounded-full px-3" placeholder="Search by size" onChange={(event)=>{setSearchsize(event.target.value)}}/>
              </div>
            <ul className={` w-80 bg-slate-200  border-2 flex flex-col gap-2 px-2 py-2 dropdown `}>
              {sizes.filter((val)=>{
                if(searchsize===""){
                  return val;
                }else if(val.toLowerCase().includes(searchsize.toLowerCase())){
                  return val
                }
              }).map((val,key)=>{<li key={key}>{val}</li>})}
            </ul>
            </button>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="producttype"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'producttype'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Product Type<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="producttype"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="producttype"&&
          <div className="absolute">
            <div className="bg-white w-80 flex justify-between h-16 px-5 py-2">
              <p>0Select</p>
              <button className="font-semibold text-xl border-4 border-black px-2 py-1">ALL</button>
            </div>
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="style"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'style'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Style<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="style"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="style"&&
          <div className="absolute w-80">
            <div className="bg-white flex-col gap-2 px-5 py-3">
            <div className=" w-full flex justify-between  ">
            <p>0Select</p>
            <button className="font-semibold border-4 border-black px-2 py-1">All</button><br />
            </div>
            <input type="text" placeholder="Search..." className="w-full border-2 border-black  rounded-full px-2 text-lg font-medium"/>
            </div>
            <ul className={` w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="trainerstyle"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'trainerstyle'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Trainer Style<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="trainerstyle"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="trainerstyle"&&
          <div className="absolute w-80">
          <div className="bg-white flex-col gap-5 px-5 py-3">
          <div className=" w-full flex justify-between py-2">
          <p>0Select</p>
          <button className="font-semibold border-4 border-black px-2 py-1">All</button><br />
          </div>
          <input type="text" placeholder="Search..." className="w-full border-2 border-black  rounded-full px-2 text-lg font-medium"/>
          </div>
            <ul className={` w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="lethertype"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'lethertype'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Lether /Non Lether<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="lethertype"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="lethertype"&&
           <div className="absolute">
           <div className="bg-white w-80 flex justify-between h-16 px-5 py-2">
             <p>0Select</p>
             <button className="font-semibold text-xl border-4 border-black px-2 py-1">ALL</button>
           </div>
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="brand"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'brand'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Brand<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="brand"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="brand"&&
          <div className="absolute w-80">
          <div className="bg-white flex-col gap-2 px-5 py-3">
          <div className=" w-full flex justify-between  ">
          <p>0Select</p>
          <button className="font-semibold border-4 border-black px-2 py-1">All</button><br />
          </div>
          <input type="text" placeholder="Search..." className="w-full border-2 border-black  rounded-full px-2 text-lg font-medium"/>
          </div>
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="colour"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'colour'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Colour<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="colour"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="colour"&&
           <div className="absolute">
           <div className="bg-white w-80 flex justify-between h-16 px-5 py-2">
             <p>0Select</p>
             <button className="font-semibold text-xl border-4 border-black px-2 py-1">ALL</button>
           </div>
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="bodyfit"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'bodyfit'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Body Fit<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="bodyfit"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="bodyfit"&&
           <div className="absolute">
           <div className="bg-white w-80 flex justify-between h-16 px-5 py-2">
             <p>0Select</p>
             <button className="font-semibold text-lg border-4 border-black px-2 py-2">ALL</button>
           </div>
            <ul className={`absolute w-80 bg-slate-200 flex flex-col gap-2 px-2 py-2 dropdown `}>
              <li>Recommended</li>
              <li>What's new</li>
              <li>Price high to low</li>
              <li>Price low to high</li>
            </ul>
            </div>
          }
        </div>
        <div>
          <button 
          // onBlur={()=>{dispatch({type:"UNFOCUS"})}}
            onClick={() => {state.focusedButton==="pricerange"?dispatch({type:"UNFOCUS"}):dispatch({type:"FOCUS",payload:'pricerange'})}}
            className="flex hover:text-blue-600 border-y-2 border-black justify-between  w-56 px-2 py-2 "
          >
            Price Range<RiArrowDropDownLine className={`text-5xl font-thin h-7 ${state.focusedButton==="pricerange"&&'rotate-180'} `}/>
          </button>
          {state.focusedButton==="pricerange"&&
          <div className="absolute w-80">
            <div className="bg-white w-full">
            <p>PriceSelected <br />
            ${"5"}to ${"445"}</p>
            </div>
            <div className="bg-slate-200 flex items-center justify-center h-28">
              <h1>{pricestart}</h1>
              {/* <div className="w-60 h-2 bg-slate-500 flex items-center "> */}
              <input type="range"min={445}max={5} value="" />
                <input type="range" onChange={(event)=>{setstatprice(event.target.value)}} min={"5"} max={"445"} className="w-60 h-2"/>
              {/* </div> */}
            </div>
            </div>
          }
        </div>
      </div>
      <div >
          {showdata && Array.isArray(showdata) && showdata.map((item, index) => {
  const { images } = item;
  // Check if images exist and has at least one element
  const firstImage = images && images.length > 0 ? images[0] : null;

  return (
    <div onClick={()=>{Itempage(item)}} key={index}>
      {/* Render the first image if it exists */}
      {firstImage && <img src={firstImage} alt="" />}

      {/* Render the title */}
      <h1>{item.title}</h1>
    </div>
  );
})}

      </div>
    </div>
  );
};

export default MenShoes;
