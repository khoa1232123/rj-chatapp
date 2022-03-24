import { Avatar, Button, Typography } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../firebase/config";

const UserInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <div className="user-info">
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="user-info__name">
          {displayName}
        </Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng Xuất
      </Button>
    </div>
  );
};

export default UserInfo;
