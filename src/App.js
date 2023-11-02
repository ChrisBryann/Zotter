import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import "./App.css";
import ClassesProvider from "./store/classesProvider";
import ErrorPage from "./components/UI/ErrorPage";

function App() {
  return (
    <ClassesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </ClassesProvider>
  );
}

export default App;
