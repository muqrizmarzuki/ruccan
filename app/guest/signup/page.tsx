"use client";

import {
  Button,
  Form,
  Input,
  Typography,
  Flex,
  Row,
  Col,
  message,
} from "antd";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { Title, Text, Link } = Typography;

const SignupPage: React.FC = () => {
  const [form] = Form.useForm();
  const [phone, setPhone] = useState("");

  const onFinish = (values: any) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    console.log("✅ Success:", { ...values, phone });
    message.success("Registered successfully (dummy handler)");
    // TODO: Submit to backend API here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("❌ Failed:", errorInfo);
    message.error("Please check your input.");
  };

  return (
    <Row>
      <Col span={24}>
        {/* Logo */}
        <Flex justify="center" align="center" gap={10} className="!mb-6">
          <Image
            src="/ruccan_logo2.png"
            alt="Ruccan Logo"
            height={40}
            width={40}
            className="object-contain"
          />
          <Title level={3} className="!font-bold !m-0">
            Ruccan.com
          </Title>
        </Flex>

        {/* Form Container */}
        <Row style={{ width: "100%" }} justify="center">
          <Col span={24} className="!px-5">
            <Flex vertical className="!bg-white !p-8 !rounded-2xl !shadow-xl !min-w-[360px]">
              {/* Title */}
              <Flex vertical align="center" className="!mb-8 !text-center">
                <Title
                  level={2}
                  className="!mb-2 !text-transparent !font-bold !bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
                >
                  Sign Up
                </Title>
                <Flex justify="center" className="!mt-6">
                  <Text>
                    Already have an account?{" "}
                    <Link href="/guest/login" className="!text-blue-500">
                      Login
                    </Link>
                  </Text>
                </Flex>
              </Flex>

              {/* Form */}
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row gutter={12}>
                  <Col span={12}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[{ required: true, message: "First name is required" }]}
                    >
                      <Input placeholder="John" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[{ required: true, message: "Last name is required" }]}
                    >
                      <Input placeholder="Doe" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Invalid email format" },
                  ]}
                >
                  <Input placeholder="you@example.com" />
                </Form.Item>

                <Form.Item
                  label="Company Name"
                  name="company"
                  rules={[{ required: true, message: "Company name is required" }]}
                >
                  <Input placeholder="Ruccan Sdn Bhd" />
                </Form.Item>

                <Form.Item label="Phone Number" required>
                  <PhoneInput
                    country={"my"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    inputClass="!w-full"
                    containerClass="!w-full"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password placeholder="Create a password" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Passwords do not match");
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Repeat your password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </Flex>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignupPage;
