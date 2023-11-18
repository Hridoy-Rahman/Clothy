import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Card from '../Components/Card';

const Products = () => {
    const [products,setproducts] = useState(0)

    useEffect(()=>{
       const  fetchData = async()=>{
        try{

            const res = await fetch('/data.json') 
            const data = await res.json()
            setproducts(data)
        }catch(error){
            console.log("fetching error",error)
        }
            
        }
        fetchData()

    },[])

    return (
        <div className='max-w-screen-2xl xl:px-28 px-4 pt-16'>
            <h1 className='text-3xl capitalize font-semibold px-8 text-center mb-8'>Or Subscribe To The Newsletter</h1>

            <div className='flex justify-between items-center'>
                {/* Filtering Option */}
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-lg text-gray-800'>
                    <button className='hover:text-orange-500'>All products</button>
                    <button className='hover:text-orange-500'>T-shirt</button>
                    <button className='hover:text-orange-500'>Hodies</button>
                    <button className='hover:text-orange-500'>Bag</button>
                </div>

                {/* sorting option */}

                <div className='flex justify-end mb-4 rounded-lg'>
                    <div className='bg-black p-2'>
                        <FaFilter className='text-white h-4 w-4'></FaFilter> 
                    </div>
                    <select className='bg-black text-white p-2'>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to high</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </div>
            </div>

            <div>
                <Card products={products}></Card>
            </div>

            
        </div>
    );
};

export default Products;