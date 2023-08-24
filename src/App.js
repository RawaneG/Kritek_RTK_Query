import "./App.css";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import Adduser from "./Component/Adduser";
import Updateuser from "./Component/Updateuser";
import { ToastContainer } from "react-toastify";
import Userlisting from "./Component/Userlisting";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header bg-dark text-center">
            <Link to={"/user"}>KRITEK</Link>
          </div>
          <Routes>
            <Route path="/" element={<Userlisting></Userlisting>}></Route>
            <Route path="/user" element={<Userlisting></Userlisting>}></Route>
            <Route path="/user/add" element={<Adduser></Adduser>}></Route>
            <Route
              path="/user/edit/:code"
              element={<Updateuser></Updateuser>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
        ></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
