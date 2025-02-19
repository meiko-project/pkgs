import { Card, Descriptions, Typography, Space, Button, Tag } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function FlightBooking() {
  const costBreakdown = [
    { label: "机票费用", value: "RMB1500" },
    { label: "燃油附加费", value: "RMB200" },
    { label: "机场建设费", value: "RMB50" },
    { label: "会员折扣", value: "-RMB100" },
    { label: "促销优惠", value: "-RMB50" },
  ];

  return (
    <div className="max-w-3xl">
      <Space direction="vertical" size="large" className="w-full">
        {/* Header */}
        {/* Flight Info */}
        <Descriptions bordered>
          <Descriptions.Item label="航班信息" span={3}>
            CA1234;中国国际航空;北京首都国际机场 - 上海浦东国际机场;
          </Descriptions.Item>

          <Descriptions.Item label="航班详情" span={3}>
            <Space direction="vertical">
              <Text>
                2025年02月15日 10:00 - 2025年02月15日 12:30 | 经济舱 | 2 张票
              </Text>
              <Space>
                <Button type="link">查看退改规则</Button>
                <Button type="link">查看行李额度</Button>
              </Space>
              <Text>航班号 CA1234 | 空客 A320 | 无餐食提供</Text>
              <Text type="secondary">
                起飞前 24 小时前可免费取消 | 需提前 2 小时办理登机手续
              </Text>
            </Space>
          </Descriptions.Item>

          <Descriptions.Item label="购票提醒" span={3}>
            <Button type="link">查看全部...</Button>
            <Text type="secondary">
              • 请在规定时间内办理登机手续，以免耽误行程。
            </Text>
          </Descriptions.Item>
        </Descriptions>

        {/* Cost Breakdown */}
        <Card title="费用明细">
          <Descriptions bordered column={1}>
            {costBreakdown.map((item, index) => (
              <Descriptions.Item key={index} label={item.label}>
                {item.value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Card>

        {/* Total Amount */}
        <Descriptions>
          <Descriptions.Item label="总金额">
            <Text>在线付：RMB1600</Text>
          </Descriptions.Item>
        </Descriptions>
      </Space>
    </div>
  );
}
