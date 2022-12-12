import { useEffect, useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
export default function FeaturedDescription() {
  const [products, setProducts] = useState({});
  const params = useParams();
  console.log("params", params);
  const url = "https://fakestoreapi.com/products";
  console.log("url", url);
  const fetchProducts = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    const correctUrl = `${url}/${params.id}`;
    fetchProducts(correctUrl);
  }, [params.id]);
  return (
    <div>
      <h2> Featured Projects Description </h2>
      <div className="prod-desc">
        <h3> {products?.title}</h3>
        <img alt={products?.title} src={products?.image} width={150} />
        <p> {products?.description}</p>
        <button>${products?.price} </button>
      </div>
    </div>
  );
}
