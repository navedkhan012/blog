import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";
/**
 * @author
 * @function CommentContainer
 **/

const CommentContainer = ({ className, logginedUserId, comments }) => {
  const [affectedComment, setAffectedComment] = useState(null);

  const updateCommentHandler = (value, commentId) => {
    setAffectedComment(null);
  };

  const addCommentHandler = (value, parentId = null, replyOnuser = null) => {
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {};

  return (
    <div className={`${className} `}>
      <CommentForm
        btnLabel="Send"
        formSubmitHadler={(value) => addCommentHandler(value)}
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
