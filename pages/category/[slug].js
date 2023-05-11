import MainLayout from '@/components/Layouts/mainLayout'
import Context from '@/components/context/Context';
import NewsCard from '@/components/newsCard'
import React, { useContext, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Category = ({articles,category,results}) => {
  const {
    totalResult,
    setTotalResult,
    fetchData,
    newsArticle,setNewsArticle,
    setCategory
  } = useContext(Context);
  useEffect(() => {
    setNewsArticle(articles);
    setTotalResult(results);
    setCategory(category)
  }, []);

  return (
    <>
 <div className="container ">
    <h1 className=" mt-20 text-center text-4xl mb-6">{category} Head Lines</h1>
    <div className="flex flex-wrap gap-5  sm:justify-center ">
    <InfiniteScroll
          dataLength={newsArticle && newsArticle.length} //This is important field to render the next data
          next={fetchData}
          hasMore={newsArticle && newsArticle.length !== totalResult}
          loader={
            
            <div className='text-center'>
            <img src="/loader.gif" className='h-8 w-8' alt="" />
  
            </div>
          }
          
        
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
    </div>
  </div>

    </>
  )
}

export default Category
Category.Layout=MainLayout
export async function getServerSideProps(context) {
  const apiKey = process.env.API_KEY;
  let slug=context.query.slug.toLowerCase()
  let category=context.query.slug
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${slug}&apiKey=${apiKey}&page=1&pageSize=6`);
  const data = await response.json();
  return {
    props: {
      articles: data.articles,
      category:category,
      results:data.totalResults,
      
    }
  }
}
