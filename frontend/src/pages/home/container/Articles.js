import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../../store/actions/countActions";
/**
 * @author
 * @function Articles
 **/

const Articles = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };

  return (
    <section className="container mx-auto  px-5 py-10 flex flex-col">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />

        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold  text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span> <FaArrowRight className="h-3 w-3" />
      </button>
      <div className="m-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler("INCREASE")}>descrse</button>
        {count.number}
        <button onClick={() => countChangeHandler("DECREASE")}>increse</button>
      </div>
    </section>
  );
};

export default Articles;
