import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { storage } from "../../firebaseConfig";
import Article from "../../models/Article";
import { uploadBlog } from "../../services/blogSiteServices";
import "./BlogFormRoute.css";

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BlogFormRoute = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [shortDesc, setShortDesc] = useState<string>("");
  const [img_alt, setImg_alt] = useState<string>("");
  const fileInputImgRef = useRef<HTMLInputElement>(null);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const date: Date = new Date();
    const month: number = date.getMonth();
    const day_num: number = date.getDate();
    const year: number = date.getFullYear();

    const postToUpload: Article = {
      img_alt: img_alt,
      title: title,
      shortDescription: shortDesc,
      date: `${months[month - 1]} ${day_num}, ${year}`,
      bodyText: body,
      userId: user?.uid!,
    };

    const files = fileInputImgRef.current?.files;
    if (files && files[0]) {
      const file = files[0];
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          postToUpload.image = url;
          await uploadBlog(postToUpload);
          navigate("/");
        });
      });
    }
  };

  return (
    <form className="BlogFormRoute" onSubmit={submitHandler}>
      <h3>Creating a Post</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="opening-img">Opening Picture</label>
      <input
        type="file"
        name="opening-img"
        id="opening-img"
        ref={fileInputImgRef}
        required
      />
      <label htmlFor="Image-alt">Image Alternate</label>
      <input
        type="text"
        name="Image-alt"
        id="Image-alt"
        value={img_alt}
        maxLength={75}
        onChange={(e) => setImg_alt(e.target.value)}
        autoComplete="off"
      />
      <label htmlFor="short-desc">Short Description</label>
      <input
        type="text"
        name="short-desc"
        id="short-desc"
        autoComplete="off"
        maxLength={100}
        value={shortDesc}
        onChange={(e) => setShortDesc(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        placeholder="Type content here in HTML format..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default BlogFormRoute;
