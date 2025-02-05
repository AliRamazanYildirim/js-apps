import CenteredText from "./CenteredText";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    { id: 1, title: "Blog 1", to: "/blogs/1" },
    { id: 2, title: "Blog 2", to: "/blogs/2" },
    { id: 3, title: "Blog 3", to: "/blogs/3" },
    { id: 4, title: "Blog 4", to: "/blogs/4" },
    { id: 5, title: "Blog 5", to: "/blogs/5" },
  ];
  return (
    <CenteredText>
      <p>Blog</p>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link to={blog.to}>{blog.title}</Link>
        </li>
      ))}
    </CenteredText>
  );
};

export default BlogPage;
