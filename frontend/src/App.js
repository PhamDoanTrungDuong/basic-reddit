import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./Components/Edit/EditPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MakePost from "./Components/Posts/MakePost";
import Posts from "./Components/Posts/Posts";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {/* render app */}
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />

          <div className="post-container">
            <Posts />
          </div>

          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header isEdit={isEdit} setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
        </>
      )}

      {/* render pending */}
      {pending && <p className="loading"> Loading... </p>}

      {/* render error */}
      {!isEdit && error && (
        <p className="error"> Error when fetching data from server </p>
      )}
    </div>
  );
}

export default App;
