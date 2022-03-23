import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip } from "antd";
import React from "react";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="header">
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__desc">Day la room 1</span>
        </div>
        <div className="header__avatar">
          <Button icon={<UserAddOutlined />}>Mời</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>a</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <div className="chat-window__content"></div>
    </div>
  );
};

export default ChatWindow;
