import React from "react"
import Card from "./Card"
import {Items, itemsFunc} from "./products"

const cakeCards = Items.map(item => 
{ 
  if (item.class === "cake")
  {
    return(
      <Card
        key = {item.id}
        id = {item.id}
        name = {item.name}
        price = {item.price}
        imgSrc = {item.img}
        itemClass = {item.class}
      />   
    )
  }
})
const cupCakeCards = Items.map(item => 
{ 
  if (item.class === "cupcake")
  {
    return(
      <Card
        key = {item.id}
        id = {item.id}
        name = {item.name}
        price = {item.price}
        imgSrc = {item.img}
        itemClass = {item.class}
      />
    )
  }
})
const cookieCards = Items.map(item => 
{ 
  if (item.class === "cookie")
  {
    return(
      <Card
        key = {item.id}
        id = {item.id}
        name = {item.name}
        price = {item.price}
        imgSrc = {item.img}
        itemClass = {item.class}
      />
    )
  }
})
const cheesecakeCards = Items.map(item => 
{ 
  if (item.class === "cheesecake")
  {
    return(
      <Card
        key = {item.id}
        id = {item.id}
        name = {item.name}
        price = {item.price}
        imgSrc = {item.img}
        itemClass = {item.class}
      />
    )
  }
})
export {cakeCards, cupCakeCards, cookieCards, cheesecakeCards}