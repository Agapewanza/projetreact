import React from 'react'
import { useParams } from 'react-router'
import {useState} from 'react'
import DATA from '../Data';
// import Corps from './Corps';





const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    // const proid = useParams();
    // const proDetail = DATA.filter(x=>x.id == proid.id)
    const products = DATA[0];
    console.log(products);

   

    const handleCart = (products) =>{
        if (cartBtn === "Add to Cart"){
           
            setCartBtn("Remove from Cart")
        }
        else{
           
            setCartBtn("Add to Cart")
        }
    }

  return (
    <>
    
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                
                <img src={products.img} alt={products.title} />
            </div>
            <div className="col-md-6">
                <h1>{products.title}</h1>
                <hr />
                <h2>{products.price}</h2>
                <p>{products.desc}</p>
                <button onClick={()=>handleCart(products)} className="btn btn-outline-primary">{cartBtn}</button>
            </div>
        </div>
        
    </div>
    
    
    </>
  )
}

export default ProductDetail