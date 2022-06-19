import { useSelector } from "react-redux";
import "./posts.css";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  return (
    <>
      <section className="post-container">
        {posts.slice(1).map((post, index) => {
          return (
            <div key={index} className="posts">
              <div className="posts-title">{post.title}</div>
              <div className={`posts-tags-${tags[post.tag]} posts-tags`}> {tags[post.tag]} </div>
              <div className="posts-description"> {post.desc} </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Posts;
