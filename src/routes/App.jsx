import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { TodoProvider } from "../context";

function App() {
  return (
    <TodoProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </TodoProvider>
  );
}

export default App;
