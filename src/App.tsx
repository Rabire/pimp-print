import { Route, Routes } from "react-router";
import { EditorProvider } from "./pages/editor/context";
import EditorPage from "./pages/editor/page";
import { SelectorProvider } from "./pages/selector/context";
import HomePage from "./pages/selector/page";

// TODO: use suspense & lazy

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SelectorProvider>
            <HomePage />
          </SelectorProvider>
        }
      />
      <Route
        path="/editor"
        element={
          <EditorProvider>
            <EditorPage />
          </EditorProvider>
        }
      />
    </Routes>
  );
}

export default App;
