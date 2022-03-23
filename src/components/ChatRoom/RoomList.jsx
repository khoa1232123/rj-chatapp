import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";

const RoomList = () => {
  return (
    <Collapse ghost defaultActiveKey={["1"]} className="room__list">
      <Collapse.Panel
        header="Danh sách các phòng"
        key="1"
        className="room__list__header"
      >
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
        <Typography.Link>Room 4</Typography.Link>
        <Typography.Link>Room 5</Typography.Link>
        <Button className="room__btn" icon={<PlusSquareOutlined />}>
          Add Room
        </Button>
      </Collapse.Panel>
    </Collapse>
  );
};

export default RoomList;
