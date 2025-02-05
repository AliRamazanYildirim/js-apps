import { useNavigate } from "react-router-dom";
import CenteredText from "./CenteredText";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <CenteredText>
      <p>This is About Us Page</p>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </CenteredText>
  );
};

export default AboutUs;
