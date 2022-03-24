import { Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";

const AddRoomModal = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    // Add new room to firebase
    console.log({ formData: form.getFieldsValue() });
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

    // Reset form
    form.resetFields();

    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    setIsAddRoomVisible(false);
  };

  return (
    <Modal
      title="Tạo phòng"
      visible={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Tên phòng" name="name">
          <Input placeholder="Nhập tên phòng..." />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea placeholder="Nhập Mô tả..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddRoomModal;
