import { Route, Routes } from "react-router-dom";
import { MetasProvider } from "./app/metas";
import { WorldProvider } from "./app/world";
import "react-toastify/dist/ReactToastify.css";

import Dashboard, { Notes, Tags } from "./Dashboard";
import Editor from "./Editor";
import Home from "./Home";
import usePreventScrollShifting from "./hooks/usePreventScrollShifting";
import ToastContainer from "./components/ToastContainer";

function App() {
  usePreventScrollShifting();

  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<MetasProvider />}>
          <Route index element={<Home />} />
          <Route path=":world" element={<WorldProvider />}>
            <Route path="" element={<Dashboard />}>
              <Route index element={<Notes />} />
              <Route path="tags" element={<Tags />} />
            </Route>
            <Route path="new" element={<Editor />} />
            <Route path=":id" element={<Editor />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
