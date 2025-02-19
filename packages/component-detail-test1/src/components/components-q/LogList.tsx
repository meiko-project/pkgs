import { Table } from "antd";

// 结构化航班数据
const flightData = [
  {
    key: "mu987",
    flight: "中国东方航空 MU987",
    price: "¥3580",
    time: "09:00-12:00",
    aircraft: "空客A330-300",
    availableSeats: "12张",
    recentBookings: "3人预订",
  },
  {
    key: "jl888",
    flight: "日本航空 JL888",
    price: "¥4280",
    time: "08:30-11:50",
    aircraft: "波音787-9",
    availableSeats: "5张",
    recentBookings: "商务舱特惠",
  },
];

const columns = [
  {
    title: "航班",
    dataIndex: "flight",
    key: "flight",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "机型",
    dataIndex: "aircraft",
    key: "aircraft",
  },
  {
    title: "余票",
    dataIndex: "availableSeats",
    key: "availableSeats",
  },
  {
    title: "最近预订",
    dataIndex: "recentBookings",
    key: "recentBookings",
  },
];

const FlightTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={flightData}
      pagination={false}
      rowKey="key"
      bordered
    />
  );
};

export default FlightTable;
