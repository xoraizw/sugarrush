import React from "react";
import Header from "./components/Header";
import Hero from "./Hero"
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import FinalPage from "./components/FinalPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"

export default function App()
{  
	const [cart , setCart] = React.useState([]);
  function clearAll()
  {
    setCart([])
  }
  function handleChange(item, op)
  {
    let tempCart = cart
    if (op === "+")
    {
      for(var i = 0; i < cart.length; i++)
      {
        if (JSON.stringify(cart[i]) === JSON.stringify(item))
        {
          let oldqty = cart[i].cart_qty
          var newqty = oldqty + 1
          tempCart[i].cart_qty = newqty
          setCart([...tempCart])
        }
      }
    }
    else
    {
      for(var i = 0; i < cart.length; i++)
      {
        let tempCart = cart
        if (JSON.stringify(cart[i]) === JSON.stringify(item))
        {
          let oldqty = cart[i].cart_qty
          var newqty = oldqty - 1
          newqty > 0 ? tempCart[i].cart_qty = newqty : tempCart[i].cart_qty = 1
          setCart([...tempCart])
        }
      }

    }

  }
  function handleAddToCart(item)
  {
    var found = false;
    var idx = -1;
    for (var x = 0; x < cart.length; x++)
    {
      if (JSON.stringify(cart[x]) === JSON.stringify(item))
      {
        idx = x;
        found = true
        break;
      }
    }
    if (found)
    {
      const currentItem = cart[idx];
      const currentQty = currentItem.cart_qty;
      const updatedQty = currentQty + 1;
      cart[idx] = {
        ...currentItem,
        cart_qty: updatedQty
      };
      console.log("REPEAT QTY")
    }
    else
    {
      setCart([...cart, item])
    }
    console.log(cart)
  }
 const Home = <>
    <Header show={true} size={cart.length} data={cart} setCart={setCart} handleChange={handleChange} clearAll={clearAll}/>
    <Hero />
    <AboutUs />
    <Menu handleClick={handleAddToCart} id="menu-section"/>
    <ContactUs />
  </>
 
 const Checkoutfunc = <>
    <Header show={false} size={cart.length} data={cart} setCart={setCart} handleChange={handleChange} clearAll={clearAll}/>
    <Checkout />
  </>

  const finalscreen = <>
    <Header show={false} size={cart.length} data={cart} setCart={setCart} handleChange={handleChange} clearAll={clearAll}/>
    <FinalPage />
  </>
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={Home}></Route>
        <Route path ="/checkout" element={Checkoutfunc}></Route>
        <Route path ="/final" element={finalscreen}></Route>
      </Routes>
    </BrowserRouter>
  )
}