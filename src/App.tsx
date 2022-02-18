import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

import Label from "./components/LabelComponent";
import FormField from "./components/FormFieldComponent";
import connectService from "./service/connector";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [posts, setPosts] = useState([]);
  const changeHandler = function (event: ChangeEvent<HTMLInputElement>): void {
    setCustomerName(event.target.value);
  };

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  useEffect(function () {
    const getPosts = async () => {
      setPosts(await connectService().connectTo("posts"));
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="hooks">React Hooks: Use Effect</h1>
        <ol>
          {posts?.map((post: Post) => (
            <li key={post.id} className="post">{post?.title}</li>
          ))}
        </ol>
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
