import { Avatar, Button, Typography } from "antd";
import React from "react";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div>
        <Avatar>K</Avatar>
        <Typography.Text className="user-info__name">Hello</Typography.Text>
      </div>
      <Button>Đăng Xuất</Button>
    </div>
  );
};

export default UserInfo;
