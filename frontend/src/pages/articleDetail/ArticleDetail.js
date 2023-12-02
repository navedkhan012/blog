import React from "react";
import MainLayout from "../../components/MainLayout";
import Breadcrumbs from "../../components/BreadCurmbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./conatiner/SuggestedPosts";
import CommentContainer from "../../components/comments/CommentContainer";

/**
 * @author
 * @function ArticleDetail
 **/

const breadcrumbsData = [
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
    link: "/blog/1",
  },
];

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
  return (
    <MainLayout>
      <section className=" container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <Breadcrumbs data={breadcrumbsData} />
          <img
            src={images.post2}
            alt="article"
            className=" rounded-xl w-full"
          />
          <Link
            to={"/blog?category=selectedCategory"}
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className=" leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentContainer className="mt-10" logginedUserId={"a"} />
        </article>

        <SuggestedPosts
          header={"Lastest Article"}
          posts={postsData}
          tags={tagsData}
          className={"mt-8 lg:mt-0 max-w-xs"}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetail;
