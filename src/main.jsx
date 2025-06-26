import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Project1 from "./pages/project1.jsx";
import Project2 from "./pages/project2.jsx"; 
import Project3 from "./pages/project3.jsx";
import Project4 from "./pages/project4.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project-1" element={<Project1 />} />
      <Route path="/project-2" element={<Project2 />} /> 
      <Route path="/project-3" element={<Project3 />} /> 
      <Route path="/project-4" element={<Project4 />} />
    </Routes>
    </BrowserRouter>
  </Provider>
);
