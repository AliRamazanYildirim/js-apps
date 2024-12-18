import { Link } from "react-router-dom";
import { TbSettingsSearch } from "react-icons/tb";
import CenteredText from "./CenteredText";

const NotFoundPage = () => {
  return (
    <CenteredText>
      <p>Not Found Page</p>
      <TbSettingsSearch />
      <Link to="/">Go to Home</Link>
    </CenteredText>
  );
};

export default NotFoundPage;
