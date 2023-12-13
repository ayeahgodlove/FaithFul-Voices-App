import React from "react";
import { Button, Layout, Typography } from "antd";
import "./app-layout.scss";
import { useTheme } from "../hook/shared/theme.hook";

const { Header, Content, Footer } = Layout;
import { ConfigProvider, theme } from "antd";
import {
  DARK_COLOR,
  FONT_FAMILY,
  ORANGE_LIGHT,
  PRIMARY_COLOR,
} from "../utils/utilities";
// import { useNavigate } from "react-router-dom";
const { defaultAlgorithm, darkAlgorithm } = theme;
interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  const {
    // token: { colorBgContainer },
  } = theme.useToken();
  const { isDarkMode } = useTheme();
  // const navigate = useNavigate();

  const podbeanLogin = () => {
    const authenticationWindow = window.open(
      `${process.env.VITE_APP_API_URL}/dialog/oauth?redirect_uri=${process.env.VITE_APP_REDIRECT_URI}&scope=${process.env.VITE_APP_SCOPE}&response_type=${process.env.VITE_APP_RESPONSE_TYPE}&client_id=${process.env.VITE_APP_CLIENT_ID}`, // Your authentication URL
      "_blank",
      "width=600,height=400"
    );

    // You can handle post-authentication logic here
    authenticationWindow.addEventListener("load", () => {
      // Logic after authentication completes
      console.log("Authentication complete");
      // Close the authentication window if needed
      authenticationWindow.close();
    });
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: PRIMARY_COLOR,
          colorLink: ORANGE_LIGHT,
          fontFamily: FONT_FAMILY,
          colorPrimaryBg: PRIMARY_COLOR,
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: PRIMARY_COLOR,
          }}
        >
          <Typography.Title
            level={4}
            style={{ marginBottom: 20, color: DARK_COLOR }}
          >
            FaithFul Voices
          </Typography.Title>
          <Button type="primary" onClick={podbeanLogin}>
            Login
          </Button>
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: "transparent!",
              marginTop: 20,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
