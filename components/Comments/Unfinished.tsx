export default function displayComments() {
  return (
    <section className="animate__animated animate__fadeInUp pt-5" id="comments">
      <h1 className="display-4 mt-5">Comments</h1>
      <p className="lead pl-2 text-white">Updated every 3 hours.</p>
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
      <form action="/api/comments" method="post">
        <div className="form-outline w-50">
          <input
            className="form-control"
            id="comment"
            name="comment"
            style={{ background: "transparent", color: "white" }}
          ></input>
          <input hidden id="path" name="path" value="<%= path %>" />
          <div className="float-end mt-2 pt-1">
            <button
              type="submit"
              className="btn btn-primary btn-mg mt-3"
              style={{
                backgroundColor: "transparent",
                borderColor: "rgb(71, 71, 172);",
              }}
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
