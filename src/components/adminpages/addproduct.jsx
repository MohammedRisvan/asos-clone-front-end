
import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import MyEditor from '../../appcounter';
export function AddShoeProduct() {
    const [detailes, setDetailes] = useState(null);
    const [gender, setGender] = useState('men');
    const [lether, setLether] = useState(false);
    const [Size, setSize] = useState([]);
    const totalSize = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
    //detales text-------//
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleChange = (newEditorState) => {

        setEditorState(newEditorState);
    };

    const handleBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const handleItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const handleUnderline = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };
    const handleList = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
    };
    //--------------//



    const productType = ['Trainers', 'Shoes', 'Boots', 'Sliders', 'Sandals', 'Flip Flops', 'Wellies', 'Slippers']
    const bodyfit = ['Main Collection', 'Wide Fit', 'Hourglass']
    return (<div className="flex flex-col bg-blue-100 items-center w-full ">
        <h1 className="font-bold text-2xl ">PRODUCT ADDING PAGE</h1>
        <div className="flex gap-5">
            <div className="grid grid-cols-3 text-sm"> <label>
                <h1>Product Name</h1>
                <input type="text" placeholder="Please Enter Productname" />
            </label>
                <label>
                    <h1>Brand Name</h1>
                    <input type="text" placeholder="Please Enter Brandname" />
                </label>
                <label>
                    <h1>Colour</h1>
                    <h1 className="bg-white w-60">select your colour</h1>
                    {false && <div name="colour" id="" className="h-10 w-16">
                        <div className="flex gap-5 bg-white w-60 h-10 px-2 items-center ">black</div>
                        <div className=" absolute flex flex-col gap-2 bg-blue-100 w-72 px-2 h-80 overflow-y-scroll overflow-x-hidden -scroll-mb-px ">
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-black w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-gray-700 w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-blue-700 w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-green-700 w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                            <div value="white" className="flex gap-5 bg-white w-full px-2 items-center"><div className="bg-white w-10 h-10 border border-black" />white</div>
                        </div>
                    </div>}
                </label>
                <label>
                    <h1>Price</h1>
                    <input type="text" />
                </label>
                <label>
                    <h1>Image</h1>
                    <input type="file" />
                </label>
                <label>
                    <h1>Genter</h1>
                    <div className="flex gap-5">
                        <label className="flex gap-2">
                            <input type="radio" value={'men'} checked={gender === 'men'}
                            onChange={() => setGender('men')} />MEN</label>
                        <label className="flex gap-2"><input type="radio" value={'women'} checked={gender === 'women'}
                            onChange={() => setGender('women')} />WOMEN</label>
                    </div>
                </label>
                <label>
                    <h1>Lether</h1>
                    <div className="flex gap-5">
                        <label className="flex gap-2"><input type="radio" value={true} checked={lether}
                            onChange={() => setLether(true)} />Lether</label>
                        <label className="flex gap-2"><input type="radio" value={false} checked={!lether}
                            onChange={() => setLether(false)} />NotLether</label>
                    </div>
                </label>
                <label>
                    <div>Size</div>
                    <div className=" bg-white px-2 w-60 py-1">select your sizes</div>
                    {false && <div className="absolute bg-blue-100  flex flex-col gap-2 px-1 w-60 h-72 overflow-y-auto">
                        {totalSize.map((item, key) => {
                            return (<h1 key={key} className="bg-white py-1 w-full px-2">
                                UK{item}
                            </h1>)
                        })}
                    </div>}
                </label>
                <label >
                    <h1 className=" h-5">Product Type</h1>
                    <div className=" bg-white px-2 w-60 py-1">select your Product Type</div>
                    {false && <div className="absolute flex flex-col bg-blue-100 gap-2 h-64 overflow-y-scroll">
                        {productType.map((item, key) => {
                            return (<h1 className="w-80 bg-white py-1 " key={key}>{item}</h1>)
                        })}
                    </div>}
                </label>
                <lether>
                    <h1>Body Fit</h1>
                    <h1>Slect BodyFit</h1>
                    {false && <div className="flex absolute bg-blue-100 flex-col gap-2 w-72 px-2">
                        {bodyfit.map((item, key) => {
                            return (<h1 className="bg-white px-2 py-1 w-full " key={key}>{item}</h1>)
                        })}
                    </div>}
                </lether>
            </div>
            <div className="font-bold text-xl flex flex-col bg-gray-200 w-80 gap-2 px-2 py-1">
                <label className="bg-white w-full  rounded px-3 py-1">
                    <h1 className="" onClick={() => { detailes === 'productdetailes' ? setDetailes(null) : setDetailes('productdetailes'); }}><p>Product Detailes</p>{detailes === 'productdetailes'} </h1>
                    {detailes === 'productdetailes' && <textarea className="h-28 4" />}
                </label>
                <label className="bg-white w-full  rounded px-3 py-1">
                    <h1 onClick={() => { detailes === 'brand' ? setDetailes(null) : setDetailes('brand'); }}>Brand</h1>
                    {detailes === 'brand' && <textarea className="h-28 4" />}
                </label>
                <label className="bg-white w-full  rounded px-3 py-1">
                    <h1 onClick={() => { detailes === 'lookafterme' ? setDetailes(null) : setDetailes('lookafterme'); }}>Look After Me</h1>
                    {detailes === 'lookafterme' && <textarea className="h-28 4" />}
                </label>
                <label className="bg-white w-full  rounded px-3 py-1">
                    <h1 onClick={() => { detailes === 'aboutme' ? setDetailes(null) : setDetailes('aboutme'); }}>About Me</h1>

                    <div className='w-full ' >
                        {detailes === 'aboutme' ||
                            (<MyEditor />)}
                    </div>
                </label>
            </div>
        </div   >

    </div>)
};
// {
//     title: { type: String, required: true },
//     brand: { type: String },
//     colour: [String,],
//     product_type: { 
//    type:String,  
//    required:[true, "Please select the product type"] },
//    lether:{type:Boolean,   default:false},
//    body_fit:[{type:String, required:[true]},],

//    images:[String,],
//    about:{
//      type:String,
//      required:[true,"please fill about session"]
//    }, 
//    wishlist:[{Client_id:{  type: mongoose.Schema.Types.ObjectId,
//    ref:'Cliantdata'}},],
//   //  description: { type: String },
//    price: { type: Number, required: true },
//    size:[{
//      size:{type:Number,
//      trim:true,
//      require:[true, 'Size field cannot be empty'],},
//      quantity:{
//          type:Number,
//          requird:[true]
//      }
//  }], //array of numbers for the sizes available in this shoe
//    productDetals: [String],
//  },
