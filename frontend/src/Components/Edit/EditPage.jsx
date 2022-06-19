import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequests";
import Input from "../InputFields/Input";
import "./edit.css";

const EditPage = ({ setEdit }) => {
  const avaUrl = [
    "https://i.redd.it/snoovatar/avatars/ad5a439e-5d3a-4165-975b-70342abf6a5a.png",
    "https://i.redd.it/snoovatar/avatars/983dd567-8c1b-4aef-92b3-150563ef8562.png",
    "https://i.redd.it/snoovatar/avatars/853ce74e-bb62-4b35-9a28-b107b010a546.png",
    "https://i.redd.it/snoovatar/avatars/378dddf7-258e-447c-9b1e-9fbe410cada0.png",
    "https://i.redd.it/snoovatar/avatars/581734d8-763b-4832-9b58-49168338dfe5.png",
    "https://i.redd.it/snoovatar/avatars/37fa000c-cd4f-46f2-94af-24459d49fc31.png",
    "https://i.redd.it/snoovatar/avatars/c9f4f73d-cfa8-4444-bf1e-2a350d061c94.png",
    "https://i.redd.it/snoovatar/avatars/dc75efff-a226-4956-94dc-e4502ce2c044.png",
    "https://i.redd.it/mkemq6sqf7261.png"
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.theme);
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      theme: theme,
      avaUrl: url,
    };
    // dispatch(update(updatedUser));
    updateUser(updatedUser, dispatch);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close"> SAVE </button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input
              label="Display Name"
              data={user.name}
              setData={setName}
              type="text"
            />

            <Input label="Age" data={user.age} setData={setAge} type="text" />

            <Input
              inputType="textarea"
              cls="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
              type="text"
            />

            <label> Profile Picture </label>
            <div className="input-image-container">
              {avaUrl.map((url, index) => {
                return (
                    <span key={index}>
                      <img
                        src={url}
                        className="input-image"
                        alt=""
                        onClick={(e) => setUrl(e.target.src)}
                      />
                    </span>
                );
              })}
            </div>

            <div className="theme-container">
              <Input
                cls="theme-color"
                label="Theme"
                data={user.theme}
                setData={setTheme}
                type="color"
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
