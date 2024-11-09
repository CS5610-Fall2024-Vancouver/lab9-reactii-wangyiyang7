import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Delete from "./Delete";
import Post from "./Post";
import Detail from "./Detail";
import PostFetch from "./PostFetch";
import Navigate from "./Navigate";

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <hr />
        <Link to="/delete">Delete</Link>
        <hr />
        <Link to="/post">Post</Link>
        <hr />
        <Link to="/postFetch">Post Fetch</Link>
        <hr />
        <Link to="/navigate">Navigate</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/post" element={<Post />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/postFetch" element={<PostFetch />} />
        <Route path="/navigate" element={<Navigate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
