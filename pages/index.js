import MainLayout from "@/components/Layouts/mainLayout";
import { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "@/components/newsCard";
import Context from "@/components/context/Context";
export default function Home({ articles, results }) {

  const {
    totalResult,
    setTotalResult,
    fetchData,
    newsArticle,setNewsArticle
  } = useContext(Context);
  useEffect(() => {
    setNewsArticle(articles);
    setTotalResult(results);
  }, []);

  return (
    <>
      <div className="container ">
        <h1 className=" mt-20 text-center text-4xl mb-6">Top Head Lines</h1>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        <input
          type="text"
          className="px-4 py-1 rounded-xl max-w-xs w-full"
          placeholder="Search..."
        />
        {
newsArticle&&
        <InfiniteScroll
          dataLength={newsArticle && newsArticle.length} //This is important field to render the next data
          next={fetchData}
          hasMore={newsArticle && newsArticle.length !== totalResult}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap gap-5  sm:justify-center ">
            {newsArticle &&
              newsArticle.map((e, i) => {
                return <NewsCard key={i} article={e} />;
              })}
          </div>
        </InfiniteScroll>
        }

      </div>
    </>
  );
}
Home.Layout = MainLayout;

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=1&pageSize=6`
  );
  const data = await response.json();
  return {
    props: {
      articles: data.articles,
      results: data.totalResults,
    },
  };
}
