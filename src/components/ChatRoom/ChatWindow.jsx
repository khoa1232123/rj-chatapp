import { UserAddOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Form, Input, Tooltip } from "antd";
import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";
import useFirestore from "../../hooks/useFirestore";
import Message from "./Message";

const ChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberVisible } =
    useContext(AppContext);
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");

  const [form] = Form.useForm();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    addDocument("messages", {
      text: inputValue,
      uid,
      photoURL,
      displayName,
      roomId: selectedRoom.id,
    });

    form.resetFields(["message"]);
  };

  const mesCondition = useMemo(
    () => ({
      fieldName: "roomId",
      operator: "==",
      compareValue: selectedRoom?.id,
    }),
    [selectedRoom]
  );

  const messages = useFirestore("messages", mesCondition);

  console.log(messages);

  return (
    <div className="chat-window">
      {selectedRoom?.id ? (
        <>
          <div className="header">
            <div className="header__info">
              <p className="header__title">{selectedRoom?.name}</p>
              <span className="header__desc">{selectedRoom?.description}</span>
            </div>
            <div className="header__avatar">
              <Button
                icon={<UserAddOutlined />}
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Mời
              </Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0).toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </div>
          </div>
          <div className="chat-window__content">
            <div className="messages">
              {messages?.map((mes) => (
                <Message
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  displayName={mes.displayName}
                  createdAt={mes.createdAt}
                />
              ))}
            </div>
            <Form className="chat-window__form" form={form}>
              <Form.Item name="message">
                <Input placeholder="message..." onChange={handleInputChange} />
              </Form.Item>
              <Button onClick={handleOnSubmit}>Gửi</Button>
            </Form>
          </div>
        </>
      ) : (
        <Alert
          message="hãy chọn phòng"
          type="info"
          showIcon
          style={{ margin: 10 }}
          closable
        />
      )}
    </div>
  );
};

export default ChatWindow;
