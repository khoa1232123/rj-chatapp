import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns";
import React from "react";

const formatDate = (seconds) => {
  let formatedDate = "";

  if (seconds) {
    formatedDate = formatRelative(new Date(seconds * 1000), new Date());
  }

  return formatedDate;
};

const Message = ({ text, displayName, createdAt, photoURL }) => {
  return (
    <div className="message">
      <div className="message__info">
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="message__info__author">
          {displayName}
        </Typography.Text>
        <Typography.Text className="message__info__date">
          {formatDate(createdAt.seconds)}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="message__content">{text}</Typography.Text>
      </div>
    </div>
  );
};

export default Message;
