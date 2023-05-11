import Context from "@/components/context/Context";
import { useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || ((page) => page.children);
  const [progress, setProgress] = useState(0);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(2);
  const [totalResult, setTotalResult] = useState(0);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [newsArticle, setNewsArticle] = useState([]);


  const fetchData = async () => {
    setLoader(true);
    setProgress(10);
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=90e7adaadaf14a03b5f7890f3d67062a&page=${page}&pageSize=6`
    );
    setProgress(30);
    const data = await response.json();
    setProgress(70);
    setNewsArticle(newsArticle.concat(data.articles));
    setTotalResult(data.totalResults);
    setPage(page + 1);
    setProgress(100);
    setLoader(false);
  };
  return (
    <Context.Provider
      value={{
        progress,
        setProgress,
        loader,
        setLoader,
        category,
        setCategory,
        country,
        setCountry,
        totalResult,
        setTotalResult,
        page,
        setPage,
        fetchData,newsArticle, setNewsArticle
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
