import Layout from "./components/Layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import "./App.css";
import ClassCard from "./components/UI/ClassCard";
import ClassesProvider from "./store/classesProvider";
import ErrorPage from "./components/UI/ErrorPage";

function App() {
  return (
    <ClassesProvider>
      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </HashRouter>
      </Layout>
    </ClassesProvider>
  );
}

export default App;
