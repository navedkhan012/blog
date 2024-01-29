import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import Breadcrumbs from "../../components/BreadCurmbs";
import { images, stables } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SuggestedPosts from "./conatiner/SuggestedPosts";
import CommentContainer from "../../components/comments/CommentContainer";
import SocialShareButton from "../../components/SocialShareButton";
import { getSinglePost } from "../../services/index/posts";

import { generateHTML } from "@tiptap/html";

import toast from "react-hot-toast";
import Bold from "@tiptap/extension-bold";
// import { generateHTML } from "@tiptap/core";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

/**
 * @author
 * @function ArticleDetail
 **/

const postsData = [
  {
    _id: "1",
    image: images.post2,
    title: "Help children get better education",
    createAt: "Jun 27, 2022",
  },
  {
    _id: "2",
    image: images.post2,
    title: "2 Help children get better education",
    createAt: "Jun 27, 2022",
  },
];

const tagsData = ["one", "two"];

const ArticleDetail = (props) => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadcrumbsData, setBreadcrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  console.log("userState", userState);

  // api part
  const { data, isError, isLoading } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      if (data) {
        setBreadcrumbsData([
          {
            name: "Home",
            link: "/",
          },
          {
            name: "blog",
            link: "/blog",
          },
          {
            name: "Article",
            link: `/blog/${data.slug}`,
          },
        ]);

        setBody(
          parse(
            generateHTML(JSON.parse(data.body), [
              Document,
              Paragraph,
              Text,
              Bold,
              Italic,
            ])
          )
        );
      } else {
        console.warn("No data received from the API.");
      }
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Error fetching data:", error);
    },
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message={"detail api data not work"} />
      ) : (
        <>
          <section className=" container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
              <Breadcrumbs data={breadcrumbsData} />
              <img
                src={
                  data?.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                    : images.post2
                }
                alt="article"
                className=" rounded-xl w-full"
              />
              <div>
                {data.categories.map((category) => {
                  return (
                    <Link
                      to={`blog?category?=${category.name}`}
                      className="text-primary text-sm font-roboto inline-block mt-4 md:text-base mr-4"
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
              <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                {data?.title}
              </h1>
              <div className="mt-4 text-dark-soft">
                <div className="leading-7 prose prose-sm sm:prose-base">
                  {body}
                </div>
              </div>
              <CommentContainer
                comments={data?.comments}
                className="mt-10"
                logginedUserId={userState?.info?._id}
                postSlug={slug}
              />
            </article>
            <div>
              <SuggestedPosts
                header={"Lastest Article"}
                posts={postsData}
                tags={tagsData}
                className={"mt-8 lg:mt-0 max-w-xs"}
              />
              <div className="mt-7">
                <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
                  Share on
                </h2>
                <SocialShareButton
                  url={encodeURI(
                    "https://react-icons.github.io/react-icons/search/#q=bin"
                  )}
                  title={encodeURIComponent("Font icon react")}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </MainLayout>
  );
};

export default ArticleDetail;
