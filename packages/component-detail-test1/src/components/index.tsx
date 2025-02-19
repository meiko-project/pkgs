import { Badge, Breadcrumb, Flex, Space, Tabs, TabsProps, Tag, Timeline } from "antd";
import React, { useState } from "react";
import FlightTree from "./components-q/LogTree.tsx";
import FlightTable from "./components-q/LogList.tsx";
import HotelBooking from "./components-q/LogDetail.tsx";
import Logheader from "./components-q/Logheader.tsx";
import {HomeOutlined} from "@ant-design/icons";

const timelineItems = [
  {
    children: (
      <div>
        <span>进入机票搜索页面 2025-01-14 09:30:00</span>
        <Logheader />
        <FlightTree />
      </div>
    ),
  },
  {
    children: (
      <div>
        <span>进入航班列表页面 2025-01-14 09:32:15</span>
        <Logheader />
        <FlightTable />
      </div>
    ),
  },
  {
    children: (
      <div>
        <span>进入航班详情页面 2025-01-14 09:35:45</span>
        <Logheader />
        <HotelBooking />
      </div>
    ),
  },
];

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <Space>
        <span>Trip-App</span>
        <Badge count={3} style={{ backgroundColor: "#52c41a" }} />
      </Space>
    ),
    children: <Timeline items={timelineItems} />,
  },
  {
    key: "2",
    label: "Trip-Online",
    children: "...",
  },
];

const TravelLog = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div
    >
      <Breadcrumb
        items={[
          {
            href: "/",
            title: <Space>
              <HomeOutlined />Query
            </Space>,
          },
          {
            title: "Details",
          },
        ]}
        className="mb-6"
      />
      <div className={'h-6'}></div>
      <Tabs
        items={items}
        activeKey={activeKey}
        onChange={setActiveKey}
        tabBarStyle={{ paddingLeft: 24 }}
      />
    </div>
  );
};

export default TravelLog;
