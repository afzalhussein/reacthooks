import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

import Label from "./components/LabelComponent";
import FormField from "./components/FormFieldComponent";
import connectService from "./service/connector";
import Post from "./service/Post";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [posts, setPosts] = useState([]);
  const changeHandler = function (event: ChangeEvent<HTMLInputElement>): void {
    setCustomerName(event.target.value);
  };

  useEffect(function () {
    const getPosts = async () => {
      setPosts(await connectService().axiosTo("posts"));
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="hooks">React Hooks: Use Effect</h1>
        {PostsList(posts)}
        <FormField
          label="Enter customer name"
          labelText="customer name"
          changeHandler={changeHandler}
        />
        <Label label={customerName} />
      </header>
    </div>
  );
}

export default App;
function PostsList(posts: never[]) {
  return (
    <ol className="posts-container">
      {posts?.map((post: Post) => (
        <li key={post.id} className="post-card">
          <div>{post?.title}</div>
          <div className="post-card-body">{post.body}</div>
        </li>
      ))}
    </ol>
  );
}
