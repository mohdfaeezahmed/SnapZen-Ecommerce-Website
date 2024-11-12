import React from 'react';
import './App.css';
import Category from './Category';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  let [finalCategory, setFinalCategory] = useState([])
  let [finalProduct, setFinalProduct] = useState([])
  let [categoryName, setCategoryName] = useState('')
  
  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => res.data)
    .then((finalRes)=> {
      setFinalCategory(finalRes)
    })
  }

  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
    .then((productRes) => productRes.data)
    .then((finalRes) => {
      setFinalProduct(finalRes.products)
    })
  }

  useEffect(() =>{
    getCategory();
    getProduct();
  },[])

  useEffect(() => {
    if (categoryName !== "") {
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((productRes) => productRes.data)
      .then((finalRes) => {
        setFinalProduct(finalRes.products)
      })
    }
  }, [categoryName])

  let Pitems = finalProduct.map((products, index) => {
    return (
      <ProductItem key = {index} productdata = {products}/>
    )
  })

  return (
   <>
   <div className='py-[10px]'>

     <div className='max-w-[1320px] mx-auto'>
    <div>
       <h1 className='brandName text-[40px]'>Snapzen</h1>
    </div>
      <h5 className='tagline text-[18p] text-gray-500 font-mono'>Discover More, Shop Smarter.</h5>

      <h1 className='ml-[415px] py-[10px] text-[30px] font-[500]'>Our products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>

          <div>
            <Category finalCategory = {finalCategory} setCategoryName = {setCategoryName} />
          </div>

          <div>
            <div className='grid grid-cols-3 gap-5'>

              {finalProduct.length >=1 ? Pitems : 'No product found'}
  
            </div>
          </div>

        </div>
     </div>

   </div>
   </>

  );
}

export default App;

function ProductItem({productdata}) {
  return (
    <div className='shadow-lg text-leading p-3 '>
        <img src = {productdata.thumbnail} className='w-[100%] h-[250px]' alt='Img unavailable...' />
        <h4>{productdata.title}</h4>
        <b className='priceOfProduct '>Rs {productdata.price}</b>
        <h4 className='addcart bg-blue-500 p-3 rounded-full text-white my-2 text-center'>Add to cart</h4>
    </div>
  )
}
