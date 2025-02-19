// flightTree.tsx
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";

const flightData = [
  {
    title: "搜索结果 (上海PVG → 大阪KIX) 共15个航班",
    key: "search-result",
    children: [
      {
        title: "中国东方航空 MU987 | ¥3580 | 09:00-12:00",
        key: "mu987",
        children: [
          {
            title: "机型: 空客A330-300",
            key: "aircraft-info",
          },
          {
            title: "余票: 12张 | 最近15分钟有3人预订",
            key: "ticket-info",
          },
        ],
      },
      {
        title: "日本航空 JL888 | ¥4280 | 08:30-11:50",
        key: "jl888",
        children: [
          {
            title: "机型: 波音787-9",
            key: "aircraft-info",
          },
          {
            title: "余票: 5张 | 商务舱特惠",
            key: "ticket-info",
          },
        ],
      },
    ],
  },
];

const FlightTree = () => {
  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={["search-result"]}
      treeData={flightData}
      style={{ margin: "16px 0" }}
    />
  );
};

export default FlightTree;
