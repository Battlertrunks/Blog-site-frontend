import axios from "axios";
import Article from "../models/Article";

// Gets the URL.
const url: string = process.env.REACT_APP_API_URL || "";

// fetching the data to retrieve the articles to be displayed
export const getBlogCards = async (): Promise<Article[]> => {
  return (await axios.get(`${url}/articles`)).data;
};

export const getBlogDetails = async (id: string): Promise<Article> => {
  return (await axios.get(`${url}/articles/${encodeURIComponent(id)}`)).data;
};

export const uploadBlog = async (blog: Article): Promise<Article> => {
  return (await axios.post(`${url}/upload`, blog)).data;
};
