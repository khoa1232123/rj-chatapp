import { Button, Col, Row, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
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
