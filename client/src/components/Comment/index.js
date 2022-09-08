import React from "react";
import "./comment.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Comment = ({ blogId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          blogId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(event);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Button 
          onClick={handleShow} 
          className="btn-dark" 
          style={{borderRadius:"35px", 
          boxShadow:"0 2px 2px var(#A3A3A3), 0 6px 12px var(#A3A3A3)", 
          position:"relative", 
          top:80,
          fontFamily:"Arial, Helvetica, sans-serif"}}>
            Comment
          </Button>
          <Modal show={show} id="modal">
            <Modal.Header>
              <Button className="btn-close" onClick={handleClose} style={{backgroundColor: "#212529"}}></Button>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3 userDiv">
                  <div className="avatar"></div>
                  <label className="col-form-label username"></label>
                </div>
                <div className="mb-3">
                  <p>This is where the post content will go</p>
                </div>
                <div className="mb-3">
                  <label className="col-form-label comment">Comment:</label>
                  <textarea
                    name="commentText"
                    className="form-control"
                    value={commentText}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Modal.Footer>
                  <Button style={{backgroundColor: "#5b5b62", border:"solid 1px black"}} type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleClose} style={{backgroundColor: "#5b5b62", border:"solid 1px black"}}>Close</Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <p className="loggedInMessage">You need to be logged in to share your blogs.</p>
      )}
    </div>
  );
};

export default Comment;
