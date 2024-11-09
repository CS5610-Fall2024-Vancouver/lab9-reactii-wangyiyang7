import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Navigate;
