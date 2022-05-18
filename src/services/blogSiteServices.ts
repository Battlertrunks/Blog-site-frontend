import axios from "axios";
import Article from "../models/Article";

// Gets the URL.
const url: string = process.env.REACT_APP_API_URL || "";

// fetching the data to retrieve the articles to be displayed
export const getBlogCards = async (): Promise<Article[]> => {
  return (await axios.get(`${url}/articles`)).data;
};

export const getBlogsByUid = async (uid: string): Promise<Article[]> => {
  return (await axios.get(`${url}/articles/${encodeURIComponent(uid)}`)).data;
};

export const getBlogDetails = async (id: string): Promise<Article> => {
  return (
    await axios.get(`${url}/articles/view-blog/${encodeURIComponent(id)}`)
  ).data;
};

export const uploadBlog = async (blog: Article): Promise<Article> => {
  return (await axios.post(`${url}/articles/upload`, blog)).data;
};

export const deleteBlog = async (id: string): Promise<void> => {
  return (
    await axios.delete(`${url}/articles/delete/${encodeURIComponent(id)}`)
  ).data;
};
