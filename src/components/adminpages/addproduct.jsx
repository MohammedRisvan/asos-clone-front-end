import { useState } from "react"
import { Clothing } from "../page/women";

export function AddShoeProduct(){

const [formdata,setFormdata]=useState({
    lether:false,
});
const [imagecount,setimagecount]=useState({count:1})
const [images,setImages]=useState([1,1,1,1])
// function setimages(e){
//     console.log(e.target.value)
//     setImages([1]);
//     for(let i=2;i<=e.target.value;i++){
//         images.push(i);
//     }

    console.log(images)
// }

function formsubmit(){
    setFormdata({...formdata,images:images})
    console.log(formdata)
}
return(
<div className="flex flex-col items-center w-full h-full px-5 py-5 gap-10">
<h1 className="font-bold text-2xl"> ADD PRODUCT PAGE</h1>
<form className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-3 w-1/2 h-full">
    <label>
        <p>ProductName</p>
        <input className="text-black  border-2 border-slate-400" type="text" name="title" onChange={(e)=>{setFormdata({...formdata,title:e.target.value})}}/>
    </label>
    <label>
        <p>BrandName</p>
        <input className="text-black  border-2 border-slate-400" type="text" name="brand" onChange={(e)=>{setFormdata({...formdata,brand:e.target.value})}}/>
    </label>
    <label>
        <p>colour</p>
        <input className="text-black  border-2 border-slate-400" type="text" name="colour" onChange={(e)=>{setFormdata({...formdata,colour:[e.target.value]})}} />
    </label>
    <label>
        <p>Product Type</p>
        <input className="text-black  border-2 border-slate-400" type="text" name="product_type" onChange={(e)=>{setFormdata({...formdata,product_type:e.target.value})}}/>
    </label>
    <label className="flex gap-10">
        <label className="flex items-center gap-2">
        <p>Lether:-</p>
        <input className="text-black  border-2 border-slate-400" type="radio"name="lether" value={true} onChange={(e)=>{setFormdata({...formdata,lether:e.target.value})}}/>
        </label>
        <label className="flex items-center">
        <p>Not Lether:-</p>
        <input className="text-black  border-2 border-slate-400" type="radio"name="lether" value={false}  onChange={(e)=>{setFormdata({...formdata,lether:e.target.value})}}/>
        </label>
    </label>
    <label>
    <p>Body Fit</p>
    <input className="text-black  border-2 border-slate-400" type="text" name="bodyfit" onChange={(e)=>{setFormdata({...formdata,bodyfit:e.target.value})}}/>
    </label>
    <label>
        <p>Trainer Style</p>
        <input className="text-black  border-2 border-slate-400" type="text" name="trainerstyle"  onChange={(e)=>{setFormdata({...formdata,trainerstyle:e.target.value})}}/>
    </label>
    {/* <label>
        <p>imagecount</p>
    <input className="text-black" type="number" name="count"  onChange={setimages}/>
    </label> */}
    <label>
        <p>Image Urls</p>
        <input className="text-black border-2 border-slate-400" type="text" name="image"onChange={(e)=>{console.log(e.target.value);console.log(e.target.value.split(','))
    setFormdata({...formdata,images:[e.target.value.split(',')]})}}/>
    </label>
    <label>
        <p>about</p>
        <input className="text-black border-2 border-slate-400" type="text" onChange={()=>{}}/>
    </label>
    <label>
        <p>Price</p>
        <input className="text-black border-2 border-slate-400" type="text"/>
        </label>
        <label>
            <p>sizes</p>
            <input className="text-black border-2 border-slate-400" type="text"/>
        </label>
        <label>
            <p>Product Detailes</p>
            <input className="text-black border-2 border-slate-400" type="text"/>
        </label>
</form>

        <button className="bg-blue-500 px-5 py-3 rounded text-xl font-medium" onClick={formsubmit}>Next</button>
</div>)
}

// const data={
// title:'New Balance 610 trainers in orange',
// brand:'NewBalance',
// colour:'Orange',
// size:[3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12.5],
// product_type:'trainers',
// lether:false,
// body_fit:['main_collection','wide_fit'],
// trainerstyle:'New Balance 610',
// images:['https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-1-orange?$n_320w$&wid=317&fit=constrain','https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-2?$n_320w$&wid=317&fit=constrain','https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-3?$n_320w$&wid=317&fit=constrain','https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-4?$n_320w$&wid=317&fit=constrain','https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-5?$n_320w$&wid=317&fit=constrain'],
// about:'Mesh upper Sole: 100% Rubber, Upper: 100% Textile.',
// wishlist:[{Client_id:{  type: mongoose.Schema.Types.ObjectId,
//     ref:'Cliantdata'}},],
// price:'126',
// productDetals:['Shoes by New Balance','Choose your players',
//     'Low-profile design',
//     'Pull tabs for easy entry',
//     'Lace-up fastening',
//     'Padded tongue and cuff',
//     'Signature New Balance branding',
//     'C-CAP midsole cushioning',
//     'Durable rubber outsole',
//     'Textured grip tread','Product Code: 132730665'],
// }