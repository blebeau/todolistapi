import HTTP from "http";
import { getTasks, deleteTask, addTask, updateTask } from "./controller";

const myServer = HTTP.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/api/tasks") {
    console.log("GET req.method", req.method);
    console.log("req.url", req.url);
    return getTasks(req, res);
  }

  // Creating a task
  if (req.method == "POST" && req.url == "/api/tasks") {
    console.log("POST req.method", req.method);
    console.log("req.url", req.url);
    return addTask(req, res);
  }

  // Updating a task
  if (req.method == "PUT" && req.url == "/api/tasks") {
    console.log("PUT req.method", req.method);
    console.log("req.url", req.url);
    return updateTask(req, res);
  }

  // Deleting a task
  if (req.method == "DELETE" && req.url == "/api/tasks") {
    console.log("DELETE req.method", req.method);
    console.log("req.url", req.url);
    return deleteTask(req, res);
  }
});

myServer.listen(3000, () => {
  console.log("Server is running on port 3000. Go to http://localhost:3000/");
});

// myServer.close();
