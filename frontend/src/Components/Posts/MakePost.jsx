import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputFields/Input";
import "./posts.css";

const MakePost = ({ setOpenPost }) => {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const dispatch = useDispatch();

  const handlePost = () => {
     setOpenPost(false);
     const newPost = {
          title: title,
          desc: desc,
          tag: selectedIdx,
     }

     // createPost(newPost);
     dispatch(createPost(newPost));
  };


  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlePost}>
            Post
          </p>
        </div>
        <Input
          label="Title"
          data={title}
          type="textarea"
          setData={setTitle}
          cls="makepost-title"
        />

        <Input
          label="Descriptions"
          data={desc}
          type="textarea"
          setData={setDesc}
          cls="makepost-desc"
        />
        <label> Tags </label>
        <div className="makepost-tags">
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedIdx(index);
                }}
                className={`${
                  selectedIdx === index
                    ? `makepost-tags-selected`
                    : `makepost-tags-${tag}`
                }`}
              >
                {" "}
                {tag}{" "}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MakePost;
