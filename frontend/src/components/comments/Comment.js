import React from "react";
import images from "../../constants/images";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin4Line } from "react-icons/ri";
import CommentForm from "./CommentForm";
import { stables } from "../../constants";

/**
 * @author
 * @function Comment
 **/

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedined = Boolean(logginedUserId);
  const commentBelogsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replaying" &&
    affectedComment._id === comment._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  console.log("comment", comment);
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-4 rounded-lg">
      <img
        src={
          comment?.user?.avatar
            ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
            : images.postProfileImage
        }
        alt="user profile"
        className="w-9 h-9 object-cover rounded-lg"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard  text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className=" text-dark-light text-xs">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-2 text-dark-light">{comment.desc}</p>
        )}

        {isEditing && (
          <CommentForm
            btnLabel={"update"}
            formSubmitHadler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 md-3">
          {isUserLoggedined && (
            <button
              className=" flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({
                  type: "replaying",
                  _id: comment._id,
                })
              }
            >
              <BiMessageSquareDots className=" w-4 h-auto" />
              <span>reply</span>
            </button>
          )}
          {commentBelogsToUser && (
            <>
              <button
                className=" flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({
                    type: "editing",
                    _id: comment._id,
                  })
                }
              >
                <BiMessageSquareEdit className=" w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button
                className=" flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <RiDeleteBin4Line className=" w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        <div className="mt-2">
          {isReplying && (
            <CommentForm
              btnLabel="Reply"
              formSubmitHadler={(value) =>
                addComment(value, repliedCommentId, replyOnUserId)
              }
              formCancelHandler={() => setAffectedComment(null)}
            />
          )}

          {replies.length > 0 && (
            <div>
              {replies.map((reply, index) => (
                <Comment
                  key={index}
                  addComment={addComment}
                  affectedComment={affectedComment}
                  setAffectedComment={setAffectedComment}
                  comment={reply}
                  deleteComment={deleteComment}
                  logginedUserId={logginedUserId}
                  replies={[]}
                  updateComment={updateComment}
                  parentId={comment._id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
