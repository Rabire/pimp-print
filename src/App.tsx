import { Route, Routes } from "react-router";
import EditorPage from "./pages/editor/page";
import HomePage from "./pages/page";
import { EditorProvider } from "./stores/editor";

// TODO: use suspense & lazy

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
