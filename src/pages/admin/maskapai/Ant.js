import React, { useEffect, useState } from "react";
import "../../../assets/css/styleku.css";
import { Space, Table } from "antd";
import axios from "axios";
import { Container } from "react-bootstrap";

function Ant() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setDataSource(response.data);
        console.log(response.data);
      })
      .then((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "user",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Done" : "In Progress"}</p>;
      },
    },
    {
      key: "4",
      title: "Action",
      render: () => (
        <Space size="middle">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </Space>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Container>
        <div className="card">
          <div className="card-body">
            <Table
              loading={loading}
              columns={columns}
              dataSource={dataSource}
            ></Table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Ant;
