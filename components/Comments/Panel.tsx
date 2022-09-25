"use strict";

import { useState, useEffect } from "react";

export default function CommentPanel({ url }) {
  let [comment, setComment] = useState(null); // to post
  let [comments, setComments] = useState(null); // to fetch

  async function postComment() {
    if (!comment.content) return;

    console.log(comment);
  }

  useEffect(() => {
    //db api stuff
  }, [comments]);

  return (
    <section className="animate__animated animate__fadeInUp pt-5" id="comments">
      <h1 className="display-4 mt-5">Comments</h1>
      <p className="lead pl-2 text-white">
        Comments are not monitored routinely.
      </p>
      <div className="card" style={{ backgroundColor: "black" }}>
        <div className="card-body">
          <div className="d-flex flex-start align-items-center">
            <div>
              <p className="text-white small mb-0"></p>
            </div>
          </div>
          <p className="mt-3 mb-4 pb-2"></p>
        </div>
      </div>
      <div className="form-outline w-50">
        <input
          className="form-control"
          id="comment"
          name="comment"
          onChange={(e) =>
            setComment({
              ...comment,
              url: url,
              content: e.target.value,
              time: new Date().toLocaleTimeString(),
              date: new Date().toLocaleDateString(),
            })
          }
          style={{ background: "transparent", color: "white" }}
        ></input>
        <div className="float-end mt-2 pt-1">
          <button
            type="submit"
            className="btn btn-primary btn-mg mt-3"
            onClick={postComment}
            style={{
              backgroundColor: "transparent",
              borderColor: "rgb(71, 71, 172)",
            }}
          >
            Post comment
          </button>
        </div>
      </div>
    </section>
  );
}
