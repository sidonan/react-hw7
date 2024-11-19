import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

const defaultValue = [
  {
    id: 0,
    name: "Product 1",
    price: 100,
    category: "Category 1",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_792_805_2.jpg"
  },
  {
    id: 1,
    name: "Product 2",
    price: 100,
    category: "Category 1",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_792_805_2.jpg"
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);


  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(()=> setLoading(false)) ;
  }, [] );
  return (
    <div>
      {loading && <div>Loading...</div> }
      {

        products.map((product)=>(
          <ProductCard data={product} />
        ))
      }
    </div>
  );
}

export default App;
