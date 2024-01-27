import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";
/**
 * @author
 * @function CommentContainer
 **/

const CommentContainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);

  const mainCommnets = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);

  // console.log("comments", comments);
  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const updateCommentHandler = (value, commentId) => {
    const updateComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return {
          ...comment,
          desc: value,
        };
      }
      return comment;
    });
    setComments(updateComments);
    setAffectedComment(null);
  };

  const addCommentHandler = (value, parentId = null, replyOnuser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parentId,
      replyOnUser: replyOnuser,
      createdAt: new Date().toISOString,
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const updateComments = comments.filter(
      (comment) => comment._id !== commentId
    );
    // console.log("updateComment", updateComments);
    setComments(updateComments);
  };

  const getReplyHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  return (
    <div className={`${className} `}>
      <CommentForm
        btnLabel="Send"
        formSubmitHadler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainCommnets.map((comment, index) => {
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
              replies={getReplyHandler(comment._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
