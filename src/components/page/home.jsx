import React, { useState } from 'react';
const Home = () => {

    return (<div>
        <div className="flex flex-col gap-10 items-center justify-center  h-screen bg-cover bg-no-repeat" style={{backgroundImage:"URL('https://content.asos-media.com/-/media/homepages/unisex/generic-hp/13-march-2024/asos_march_generic-hp_desktop.jpg')"
        }} >
            <div className='flex flex-col items-center justify-center'>
<button className='bg-black text-white text-7xl tracking-topwide font-bold px-10 py-5'>ASOS</button>
<p className='bg-black text-white text-xl font-medium px-5 tracking-topwide py-1 '>ASOS DESIGIN and 850+ brands</p></div>
<div className='flex gap-10  '>
    <button className=' bg-white font-semibold text-2xl px-10 py-3' onClick={()=>{window.location.href='/women'}}>SHOPE WOMEN</button>
    <button className=' bg-white font-semibold text-2xl px-10 py-3' onClick={()=>{window.location.href='/men'}}>SHOPE MEN</button>
</div >
</div>
<div className='bg-black text-white w-full flex h-16 '>
<div className='w-1/2 flex flex-col item-center justify-center'>
    <h1 className='font-bold text-xl'>EASY WORLDWIDE DELIVERY</h1>
    <p>*minimum spends apply</p>
    </div>
    <div className='flex w-1/2; justify-items-center  '>
        <h1 className='font-semibold text-xl'>ASOS DESIGIN and 850+ <br /> brands</h1>
    </div>
</div>
        </div>
    );
};

export default Home;
