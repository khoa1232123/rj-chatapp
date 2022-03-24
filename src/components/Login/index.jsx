import { Button, Col, Row, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const handleFBLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
  };

  return (
    <div className="login">
      <Row justify="center">
        <Col span={8}>
          <Title className="login__title">Hello</Title>
          <Button className="login__button google">
            Đăng nhập bằng Google
          </Button>
          <Button
            className="login__button facebook"
            onClick={() => handleFBLogin()}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
