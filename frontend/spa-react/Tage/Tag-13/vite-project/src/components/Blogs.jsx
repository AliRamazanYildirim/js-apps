import CenteredText from "./CenteredText";
import { Link, useParams } from "react-router-dom";

const Blogs = () => {
    const params = useParams();
    const { id } = params;
    const isNumber = !isNaN(id);
  return (
    <CenteredText>
      {isNumber ? <p>Blog {id}</p> : <p>Blog Page</p>}
      <Link to='/blog'>Back to Blog</Link>    
    </CenteredText>
  );
};

export default Blogs;
