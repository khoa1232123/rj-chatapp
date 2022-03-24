import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";

const RoomList = () => {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]} className="room__list">
      <Collapse.Panel
        header="Danh sách các phòng"
        key="1"
        className="room__list__header"
      >
        {rooms.map((room) => (
          <Typography.Link
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
          >
            {room.name}
          </Typography.Link>
        ))}
        <Button
          className="room__btn"
          icon={<PlusSquareOutlined />}
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
      </Collapse.Panel>
    </Collapse>
  );
};

export default RoomList;
