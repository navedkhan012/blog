import React, { useState } from "react";

/**
 * @author
 * @function CommentForm
 **/

const CommentForm = ({
  btnLabel,
  formSubmitHadler,
  formCancelHandler = null,
  initialText = "",
  loading = false,
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHadler(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border  border-primary rounded-lg p-4">
        <textarea
          className=" w-full focus:outline-none bg-transparent"
          rows="4"
          placeholder="Leave your comment here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              type="cancel"
              className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500"
              onClick={formCancelHandler}
            >
              cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary  font-semibold text-white disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
