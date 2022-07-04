import React, { useCallback, useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder={"어떤 신기한 일이 있었나요?"}
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
        <div>
          {imagePaths.map((value) => {
            return (
              <div key={value} style={{ display: "inline-block" }}>
                <img src={value} style={{ width: 200 }} alt={value} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
