import CenteredText  from "./CenteredText";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactUs = () => {

  return (
    <CenteredText>
      <FaPhoneVolume style={{marginRight:"1rem"}}/> 0123456789
    </CenteredText>
  );
};

export default ContactUs;
