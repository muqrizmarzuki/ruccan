"use client";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Flex,
  Row,
  Col,
  message,
} from "antd";
import Image from "next/image";
import React from "react";

const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("✅ Success:", values);
    message.success("Logged in successfully (dummy handler)");
    window.location.href = "/user"
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("❌ Failed:", errorInfo);
    message.error("Please check your input.");
  };

  return (
    <Row>
      <Col span={24}>
        {/* Logo on Top */}
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

        <Row style={{ width: "100%" }} justify="center">
          <Col span={24} className="!px-5">
            <Flex vertical className="!bg-white !p-8 !rounded-2xl !shadow-xl !min-w-[360px]">
              {/* Title */}
              <Flex vertical align="center" className="!mb-8 !text-center">
                <Title
                  level={2}
                  className="!mb-2 !text-transparent !font-bold !bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
                >
                  Get started now
                </Title>
                <Text type="secondary" className="!text-xs">
                  Create an account or log in to explore our app
                </Text>
              </Flex>

              {/* Social Buttons */}
              <Flex vertical gap="middle" className="mb-6">
                <Button
                  block
                  className="!bg-white !text-black !border !border-gray-300 hover:!border-blue-400"
                  icon={
                    <Image
                      src="/google_logo.png"
                      alt="Google"
                      width={18}
                      height={18}
                    />
                  }
                >
                  Sign in with Google
                </Button>

                <Button
                  block
                  className="!bg-white !text-black !border !border-gray-300 hover:!border-blue-600"
                  icon={
                    <Image
                      src="/facebook_icon.svg"
                      alt="Facebook"
                      width={18}
                      height={18}
                    />
                  }
                >
                  Sign in with Facebook
                </Button>
              </Flex>

              {/* Divider */}
              <Row align="middle" className="!my-2">
                <Col flex="auto">
                  <div className="!border-t !border-gray-300 !w-full" />
                </Col>
                <Col>
                  <Text type="secondary" className="!px-4 !text-sm">
                    OR
                  </Text>
                </Col>
                <Col flex="auto">
                  <div className="!border-t !border-gray-300 !w-full" />
                </Col>
              </Row>

              {/* Login Form */}
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Invalid email format" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Flex justify="space-between" wrap align="center" className="!mb-4">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <Link href="#" className="!text-blue-500">
                    Forgot password?
                  </Link>
                </Flex>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Log In
                  </Button>
                </Form.Item>
              </Form>

              {/* Sign Up */}
              <Flex justify="center" className="!mt-6">
                <Text>
                  Don’t have an account?{" "}
                  <Link href="/guest/signup" className="!text-blue-500">
                    Sign Up
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
