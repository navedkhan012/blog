import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../../../services/index/posts";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
/**
 * @author
 * @function Articles
 **/

const Articles = (props) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <section className="container mx-auto  px-5 py-10 flex flex-col">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]`}
            />
          ))
        ) : isError ? (
          <ErrorMessage message={"counld not fetch the posts data"} />
        ) : (
          data.map((post) => {
            return (
              <ArticleCard
                key={post._id}
                post={post}
                className={
                  "w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
                }
              />
            );
          })
        )}

        {/* <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        /> */}
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold  text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span> <FaArrowRight className="h-3 w-3" />
      </button>
    </section>
  );
};

export default Articles;
