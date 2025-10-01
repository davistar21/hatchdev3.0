import { createRoot } from "react-dom/client";
import ProfileCard from "./assignment-1";
import "./styles/assignment-1.css";
import Card from "./wk3/Card";
import { ThemeProvider } from "./wk3/ThemeContext";
import TodoList from "./components/TodoList";

const root = createRoot(document.querySelector("#root"));

root.render(
  <ThemeProvider>
    {/* <ProfileCard /> */}
    {/* <Card /> */}
    <TodoList />
  </ThemeProvider>
);
