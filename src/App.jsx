import { useState } from "react";

import "./App.css";
import LayOut from "./Component/LayOut";
import PostList from "./features/post/PostList";
import { Route, Routes } from "react-router-dom";
import UserList from "./features/user/UserList";
import AddPost from "./features/post/AddPost";
import SinglePost from "./features/post/SinglePost";
import EditPost from "./features/post/EditPost";
import UserPosts from "./features/user/UserPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<PostList />} />

          <Route path="post">
            <Route index element={<AddPost />} />
            <Route path=":postid" element={<SinglePost />} />
            <Route path="editpost/:postid" element={<EditPost />} />
          </Route>

          <Route path="user">
            <Route index element={<UserList />} />
            <Route path=":userid" element={<UserPosts />} />
          </Route>

          <Route path="*" element={<h1>NO Page Found</h1>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
