import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/menu/Menu";
import MainPage from "./pages/mainPage/MainPage";
import PostsPage from "./pages/postsPage/PostsPage";
import UserList from "./pages/userList/UserList";
import UserPage from "./pages/userPage/UserPage";
import CountPage from "./pages/countPage/CountPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="posts" element={<PostsPage/>}/>
          <Route path="user" element={<UserPage/>}/>
          <Route path="list" element={<UserList/>}/>
          <Route path="count" element={<CountPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
