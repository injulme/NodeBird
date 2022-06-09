import React, { useMemo } from "react";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const FollowList = ({ header, data }) => {
  const ListStyle = useMemo(() => ({ marginBottom: 20 }), []);
  const ListGrid = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const ListItemStyle = useMemo(() => ({ marginTop: 20 }), []);
  const loadMoreStyle = useMemo(
    () => ({ textAlign: "center", margin: "10px 0" }),
    []
  );

  return (
    <List
      style={ListStyle}
      grid={ListGrid}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={loadMoreStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered={true}
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={ListItemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
