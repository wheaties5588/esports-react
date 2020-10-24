import React, { useState, useContext } from 'react';
import { Button, Comment, Form, Header } from "semantic-ui-react";
import Axios from "axios";

export default function Comments() {

    const [comment, setComment] = useState();

    // const history = useHistory();
    const { setUserData } = useContext(UserContext);
    
    const submit = async (e) => {
        // e.preventDefault();
        // try {
        //     const newComment = { comment };
        //     await Axios.post("", newComment
        // );
        // const commentRes = await Axios.post("", {
        //     comment,
        // });
        // setUserData({
        //     token: loginRes.data.token,
        //     user: loginRes.data.user,
        // });

        // } catch (err) {
        //     err.response.data.msg && setError(err.response.data.msg);
        // }

    };

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>I like liquid peen</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Comments;
