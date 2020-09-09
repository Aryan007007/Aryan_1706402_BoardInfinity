import React, { useState } from 'react';
import { Form, Input, Button, Space} from 'antd';

import DateTime from './DateTime';

import './style.css';

const TextInput = () => {
  const [form] = Form.useForm();
  const [requiredMark]= useState('optional');


  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMark
      }}>

      <Form.Item label="Your Tweet" required>
        <Input placeholder="Your Twitter Message Goes Here ....." />
      </Form.Item>
      <Form.Item label="Auto Delete Date and Time" required>
        <DateTime />
      </Form.Item>
      <Form.Item >
        <Space className = "btnCentered"align = "center">
          <Button type="primary" shape="round" size="middle">Publish</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TextInput;