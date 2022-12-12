import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function NewDescription() {
  const [prods, setProds] = useState({});
  const params = useParams();
  console.log("params", params);
  const url = "https://jsonplaceholder.typicode.com/photos";
  console.log("url", url);
  const fetchPhotos = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setProds(data);
  };
  useEffect(() => {
    const coreectUrl = `${url}/${params.id}`;
    fetchPhotos(coreectUrl);
  }, [params.id]);
  return (
    <div>
      <h2> New Project description </h2>
      <div className="prod-desc">
        <h3> {prods?.title} </h3>
        <img alt={prods?.title} src={prods?.thumbnailUrl} width={185} />
      </div>
    </div>
  );
}
