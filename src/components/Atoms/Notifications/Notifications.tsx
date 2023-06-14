import { message } from "antd";

export const Notifications = () => {
  const [, contextHolder] = message.useMessage();

  return <>{contextHolder}</>;
};
