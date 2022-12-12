import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function NewProjects() {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/photos";
  console.log("url", url);
  const fetchPhotos = async (api) => {
    setLoading(true);
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setPhoto(data.slice(0, 21));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPhotos(url);
  }, []);
  return (
    <div>
      <h2> New Projects </h2>

      <div>
        {loading ? (
          <div>
            <h3> LOADING...!</h3>
          </div>
        ) : (
          <div className="photo-container">
            {photo.map((info) => {
              const { id, thumbnailUrl } = info;
              return (
                <div key={id} className="photos">
                  <Link to={`/projects/new/${id}`}>
                    <img alt="title" src={thumbnailUrl} width={200} />
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
