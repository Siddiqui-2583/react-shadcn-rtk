import Layout from "./components/common/layout/Layout";
import ProtectedRoute from "./components/common/layout/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
  );
}

export default App;
