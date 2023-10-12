import React, { useEffect } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Employee } from "@prisma/client";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Layout } from "../../components/layout";
import { CustomButton } from "../../components/custom-button";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import type { ColumnsType } from "antd/es/table";
import { Paths } from "../../paths";
import { selectUser } from "../../features/auth/authSlice";

const columns: ColumnsType<Employee> = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export const Employees = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const goToAddUser = () => {
    navigate(Paths.employeeAdd);
  };

  return (
    <Layout>
      <CustomButton
        type="primary"
        onClick={goToAddUser}
        icon={<PlusCircleOutlined />}
      >
        Add employee
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return { onClick: () => navigate(`${Paths.employee}/${record.id}`) };
        }}
      />
    </Layout>
  );
};
