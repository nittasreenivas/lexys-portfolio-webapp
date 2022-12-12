import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  console.log(navigate);
  const BackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2> Data not found </h2>
      <button onClick={BackToHome}> BackToHome </button>
    </div>
  );
}
