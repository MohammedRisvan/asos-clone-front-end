import { Route, Routes } from "react-router-dom";
import Otp from "./components/auth/otp";
import Register from "./components/Layout/registerlayout";
import Join from "./components/auth/signup";
import Footer from "./components/Layout/footer";

import Home from "./components/page/home";
import Login from "./components/auth/login";
import { Toaster } from "react-hot-toast";
import Updatepassword from "./components/auth/password";
import CartPage from "./components/page/cartpage";
import Profile from "./components/page/profile";
import Men, { Menpage } from "./components/page/men";
import Women, { Womenpage } from "./components/page/women";
import HomeLayout from "./components/Layout/homelayout";
import MenSale from "./components/page/sale";
import Productpage from "./components/page/productpage";
import MenShoes from "./components/page/shoes/menshoes";
import Manlayout from "./components/Layout/menlayout";
import { AddShoeProduct } from "./components/adminpages/addproduct";
import Wishlist from "./components/page/wishlistpage";
 

function App() {
  return (<>
  <Toaster/>
 <Routes>
  <Route path="/" element={<HomeLayout/>}>
 <Route index element={<Home />} />
{/* <Route path="/men" element= {<Menpage/>} >
<Route path="/" element= {<Menpage/>} />
  {/* <Route path="/:id" sales /> *}/
</Route> */}
<Route path="/saveditems"element={<Wishlist/>}/>
<Route path="/cart" element={<CartPage/>}/>
<Route path="/men" element={<Manlayout/>}>
<Route path="showproduct/:id" element={<Productpage/>}/>
<Route index element={<Menpage />} />
<Route path="menshoes" element={<MenShoes/>} />
<Route path="sales" element={<MenSale />} />
<Route path="addShoeproducts" element={<AddShoeProduct/>}/>
</Route>
<Route path="/women" element={<Womenpage/>}/>
  </Route>
<Route path="/" element={<Register/>}>
  <Route path="/signup" element={<Join/>}/>
  <Route path="/registerotp" element={<Otp/>}/>
  <Route path="/signin" element={<Login/>}/>
<Route path="/password"element={<Updatepassword/>}/>
<Route path="/profile" element={<Profile/>} />
</Route>
 </Routes>
      </>
  );
}

export default App;
