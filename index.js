const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const data = require("./data/allToys.json");
const blogsData = require("./data/blogs.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send(data);
});


app.get("/blogs", (req, res) => {
  res.send(blogsData);
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const selectedBlog = blogsData.find((b) => b.id == id);
  res.send(selectedBlog);
});


app.listen(port, () => {
  console.log("server is running at port: ", port);
});
