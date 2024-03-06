import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Comment from "./Comment";
import { createNewComment, updateComment } from "../../services/index/comments";
import toast from "react-hot-toast";
/**
 * @author
 * @function CommentContainer
 **/

const CommentContainer = ({
  className,
  logginedUserId,
  comments,
  postSlug,
}) => {
  const queryClient = useQueryClient();
  const [affectedComment, setAffectedComment] = useState(null);
  const userState = useSelector((state) => state.user);

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
      onSuccess: () => {
        toast.success(
          "your comment sent suceesfully., it  will visiable after confirm bu admin"
        );
      },
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
    });

  const { mutate: mutateUpdateComment, isLoading: isLoadingUpdateComment } =
    useMutation({
      mutationFn: ({ token, desc, commentId }) => {
        console.log("mutateUpdateComment commentId", commentId);
        return updateComment({ token, desc, commentId });
      },
      onSuccess: () => {
        toast.success("your comment sent suceesfully updated.");
        queryClient.invalidateQueries(["blog", postSlug]);
      },
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
    });

  const addCommentHandler = (value, parent = null, replyOnuser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnuser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
    setAffectedComment(null);
  };
  const updateCommentHandler = (value, commentId) => {
    console.log("commentId", commentId);
    mutateUpdateComment({
      token: userState.userInfo.token,
      desc: value,
      commentId,
    });
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {};

  return (
    <div className={`${className} `}>
      <CommentForm
        btnLabel="Send"
        formSubmitHadler={(value) => addCommentHandler(value)}
        loading={isLoadingNewComment}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              comment={comment}
              logginedUserId={logginedUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandler}
              updateComment={updateCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={comment.replies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
