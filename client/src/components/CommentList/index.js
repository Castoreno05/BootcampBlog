import React from 'react';
import "./commentlist.css"

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return;
  }
console.log(comments)
  return (
    <>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3 commentArea">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
          <div className='commentBreak'></div>
      </div>
    </>
  );
};

export default CommentList;
