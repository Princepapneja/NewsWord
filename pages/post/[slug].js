import React from 'react'

const FullArticle = ({article}) => {
  
  return (
    <>
<div>
    <img src={article.urlToImage} alt="" />
    <h3>{article.title}</h3>
    <p>
        {article.description}  
    </p>
</div>
    </>
  )
}

export default FullArticle
export async function getServerSideProps() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
  const data = await response.json();
  return {
    props: {
      articles: data.articles
    }
  }
}
