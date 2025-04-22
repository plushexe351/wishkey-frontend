import Menubar from "./components/Menubar.jsx";
import { Navigate, Route, Routes } from "react-router";
import MyDreams from "./pages/MyDreams.jsx";
import Connections from "./pages/Connections.jsx";
import Transactions from "./pages/Transactions.jsx";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Navigate to="/mydreams" />} />
        <Route path="/mydreams" element={<MyDreams />} />
        <Route path="/friends" element={<Connections />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
