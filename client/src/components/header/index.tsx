import React from "react";
import { Layout, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import css from "./index.module.css";
import { CustomButton } from "../custom-button";
import { Paths } from "../../paths";

import { logout, selectUser } from "../../features/auth/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout.Header className={css.header}>
      <Space>
        <TeamOutlined className={css.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="link" block>
            <Typography.Title level={3} style={{ margin: 0 }}>
              Employees
            </Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton
          type="text"
          icon={<LoginOutlined />}
          onClick={onLogoutClick}
        >
          Log out
        </CustomButton>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <CustomButton type="text" icon={<UserOutlined />}>
              Sing Up
            </CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type="text" icon={<LoginOutlined />}>
              Log In
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
