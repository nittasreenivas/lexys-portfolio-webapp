import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function FeaturedProjects() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });
  const url = "https://fakestoreapi.com/products";
  console.log("url:", url);
  const fetchProducts = async (api) => {
    setLoading(true);
    setError({ status: false, msg: "" });
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
      setError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError({
        status: true,
        msg: error.message || "something went wrong try after sometime"
      });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  if (error?.status) {
    return (
      <div>
        <h3 style={{ textAlign: "center", color: "red" }}> {error?.msg} </h3>
      </div>
    );
  }
  return (
    <div>
      <h2> Featured Projects </h2>
      <div>
        {loading ? (
          <div>
            <h3> LOADING...!</h3>
          </div>
        ) : (
          <div className="prod-container">
            {products.map((info) => {
              const { id, image } = info;
              return (
                <div key={id} className="prod-list">
                  <Link to={`/projects/featured/${id}`}>
                    <img src={image} alt="title" width={200} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
