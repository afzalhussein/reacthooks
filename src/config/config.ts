type configTtype = {
  base_url: string;
  app: {[index: string]: string};
}
const configurations:configTtype = {
  base_url: "https://jsonplaceholder.typicode.com",
  app: { posts: "posts", comments: "comments" },
};

export default configurations;
