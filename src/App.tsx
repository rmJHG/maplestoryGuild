import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import SearchResult from "./components/Search/SearchResult";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/result/:server/:guildName" Component={SearchResult} />
      </Routes>
    </Layout>
  );
}

export default App;
