import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import "./App.css";
import ClassCard from "./components/UI/ClassCard";
import ClassesProvider from "./store/classesProvider";

function App() {
  return (
    <ClassesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/card" element={<ClassCard />} />
          <Route path="*" element={<p>Not Found!</p>} />
        </Routes>
      </Layout>
    </ClassesProvider>
  );
}

export default App;
