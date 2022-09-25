"use strict";

import { useState, useEffect } from "react";
import axios from "axios";

export default function CommentPanel({ url }) {
  let [comments, setComments] = useState(null);
  let [newComment, setNewComment] = useState(null);

  useEffect(() => {
    fetch(`/api/comments/fetch?url=${url}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [comments]);

  async function postComment() {
    if (!newComment.content) return;

    await axios
      .post("/api/comments/new", {
        url: newComment.url,
        time: newComment.time,
        date: newComment.date,
        content: newComment.content,
      })
      .catch((e) => {
        console.error(e);
      });

    console.log(newComment);
    setNewComment({});
  }

  if (comments == null) {
    return (
      <section
        className="animate__animated animate__fadeInUp pt-5"
        id="comments"
      >
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
            <p className="mt-3 mb-4 pb-2">
              There are no comments for this page.
            </p>
          </div>
        </div>
        <div className="form-outline w-50">
          <input
            className="form-control"
            id="comment"
            name="comment"
            onChange={(e) =>
              setNewComment({
                ...newComment,
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
  } else {
    return (
      <section
        className="animate__animated animate__fadeInUp pt-5"
        id="comments"
      >
        <h1 className="display-4 mt-5">Comments</h1>
        <p className="lead pl-2 text-white">
          Comments are not monitored routinely.
        </p>
        {comments.map((x) => (
          <div className="card" style={{ backgroundColor: "black" }}>
            <div className="card-body">
              <div className="d-flex flex-start align-items-center">
                <div>
                  <p className="text-white small mb-0">
                    {x.date} {x.time}
                  </p>
                </div>
              </div>
              <p className="mt-3 mb-4 pb-2">{x.content}</p>
            </div>
          </div>
        ))}
        <div className="form-outline w-50">
          <input
            className="form-control"
            id="comment"
            name="comment"
            onChange={(e) =>
              setNewComment({
                ...newComment,
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
}
