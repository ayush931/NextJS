import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.data;
}

interface ITodo {
  title: String,
  completed: Boolean
}

export default async function Blog() {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog: ITodo) => <Todo title={blog.title} completed={blog.completed} />)}
    </div>
  )
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      {title} {completed ? "done" : "not done"}
    </div>
  )
}

