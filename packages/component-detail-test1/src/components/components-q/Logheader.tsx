import { Button, Space, Tag, Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Logheader = () => {
  // const nav= useNavigate()
  return (
    <>
      <Space className="w-full justify-between">
        <Space>
          <Tag color="blue">Airline-App(123456)</Tag>
          <Tag>乘客属性</Tag>
          <Tag color="cyan">点击显示订单号</Tag>
        </Space>
        <Space>
          <Text>订单号:ORD12345678</Text>
          <CopyOutlined />
          <Button type="primary" onClick={()=>{
            // nav(`/query/1/log/2`)
          }}>
            点击查看详情
          </Button>
        </Space>
      </Space>
    </>
  );
};

export default Logheader;
