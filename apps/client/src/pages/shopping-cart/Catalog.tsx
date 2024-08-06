import { useEffect, useState } from "react"
import { Product, PropsProduct } from "./components/Product"

export const Catalog = () => {
    const [products, setProducts] = useState <PropsProduct[]>([])
    
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/stock-product/book-products');
              const data = await response.json();
              setProducts(data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
      
          fetchProducts();
         
    },[])

    console.log(products)
    return (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {products.map(product => (
                <li key={product.book.title} className="flex flex-col gap-4 shadow-lg rounded-md bg-[#111] text-white p-4">
                    <Product {...product} />
                </li>
            ))}
        </ul>
    )
}