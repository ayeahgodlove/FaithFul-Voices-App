import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ConfigProvider, Spin } from "antd";
import { Navigate } from "react-router-dom";
import { PRIMARY_COLOR } from "../utils/utilities";
import { LoadingOutlined } from "@ant-design/icons";

const CallbackPage: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: PRIMARY_COLOR,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
            size="large"
          />
        </div>
      </ConfigProvider>
    );
  }

  return <Navigate to={"/"} />;
};

export default CallbackPage;
