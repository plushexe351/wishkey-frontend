import Menubar from "./components/Menubar.jsx";
import { Navigate, Route, Routes } from "react-router";
import MyDreams from "./pages/MyDreams.jsx";
import Connections from "./pages/Connections.jsx";
import Transactions from "./pages/Transactions.jsx";
import FriendsList from "./components/FriendsList.jsx";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Navigate to="/mydreams" />} />
        <Route path="/mydreams" element={<MyDreams />} />
        <Route path="/connections/*" element={<Connections />}>
          <Route path="" element={<Navigate to="friends" />} />
          <Route path="friends" element={<FriendsList />} />
          <Route
            path="followers"
            element={
              <h1 style={{ paddingInline: "1rem" }}>
                Followers will appear here
              </h1>
            }
          />
          <Route
            path="requests"
            element={
              <h1 style={{ paddingInline: "1rem" }}>
                Requests will be visible here
              </h1>
            }
          />
        </Route>
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
