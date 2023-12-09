import React from "react";
import {  Layout, Typography } from "antd";
import "./app-layout.scss";
import { useTheme } from "../hook/shared/theme.hook";

const { Header, Content, Footer } = Layout;
import { ConfigProvider, theme } from "antd";
import { DARK_COLOR, FONT_FAMILY, ORANGE_LIGHT, PRIMARY_COLOR } from "../utils/utilities";
const { defaultAlgorithm, darkAlgorithm } = theme;
interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { isDarkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: PRIMARY_COLOR,
          colorLink: ORANGE_LIGHT,
          fontFamily: FONT_FAMILY,
          colorPrimaryBg: PRIMARY_COLOR
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
            justifyContent: 'center',
            background: PRIMARY_COLOR
          }}  
        >
          <Typography.Title level={4} style={{ marginBottom: 20, color: DARK_COLOR}}>FaithFul Voices</Typography.Title>
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              marginTop: 20
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
