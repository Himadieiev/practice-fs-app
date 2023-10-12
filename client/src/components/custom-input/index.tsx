import { Form, Input } from "antd";
import React from "react";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

export const CustomInput = ({ placeholder, name, type = "text" }: Props) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{ required: true, message: "Required field" }]}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
