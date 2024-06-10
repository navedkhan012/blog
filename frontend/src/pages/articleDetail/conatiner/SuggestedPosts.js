import React from "react";
import { Link } from "react-router-dom";
import { images, stables } from "../../../constants";

/**
 * @author
 * @function SuggestedPosts
 **/

const SuggestedPosts = ({ className, header, posts = [], tags = [] }) => {
  return (
    <div
      className={` w-full 
      shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((post, index) => {
          console.log("post", post);
          return (
            <div
              key={index}
              className=" flex space-x-3 flex-nowrap items-center"
            >
              <img
                src={
                  post.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + post?.photo
                    : images.post1
                }
                alt={post.title}
                className="aspect-square object-cover rounded-lg w-1/5"
              />
              <div className=" text-sm font-roboto text-dark-hard font-medium">
                <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <span className=" text-xs opacity-60">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className=" font-roboto font-medium text-dark-hard mt-4 md:text-xl">
        Tags
      </h2>

      {tags.length === 0 ? (
        <p className=" text-slate-400 text-xs mt-2">there is no tags</p>
      ) : (
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tags.map((tag, index) => {
            return (
              <Link
                key={index}
                to={"/"}
                className="capitalize inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
              >
                {tag}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SuggestedPosts;
