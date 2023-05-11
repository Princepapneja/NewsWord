import Link from "next/link";
import React, { useEffect, useRef } from "react";

const NewsCard = ({ article }) => {
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    // console.log(contentRef.current.scrollHeight)
    if(imgRef.current!==null){

      imgRef.current.setAttribute(
        "style",
        `height:calc(100% - ${contentRef.current.scrollHeight}px)`
        );
      }
  }, [article]);
  return (
    <>
      {article && (
        <div className="card  ">
          {/*Card 1*/}
          <div className="sm:max-w-[270px] h-full lg:max-w-[350px] w-full rounded overflow-hidden shadow-2xl bg-gray-100">
          <div ref={imgRef}>

            {article.urlToImage && article.urlToImage !== "" ? (
                <img className="w-full h-full" src={article.urlToImage} />
            ) : (
             
                
              <img
                className="w-full h-full"
                src="/bN.jpg"
                alt="Broken Image"
                />
            )}
</div>
            <div className="p-6" ref={contentRef}>
              <div className="mb-4">
                <div className="font-bold text-xl mb-4">
                  {article.title && <span>TItle: {article.title}</span>}
                </div>
                {article.description && (
                  <p className="text-gray-700 text-base">
                    {article.description}
                  </p>
                )}
              </div>
              <div className="">
                <a
                  href={article.url}
                  className="inline-block bg-blue-300 rounded-3xl py-1 px-2 text-sm font-semibold  cursor-pointer  transition delay-50 duration-300 ease-in-out"
                  target="_blank"
                >
                  Read More
                </a>
                {article.publishedAt && (
                  <div className="flex justify-between gap-2 mt-4">
                    <span>Published At: </span>
                    <span>{article.publishedAt.slice(0, -1)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
