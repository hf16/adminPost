import React, { useEffect, useState } from "react";
import "../../../assets/css/styleku.css";
import { Row, Space, Table } from "antd";
import { Container } from "react-bootstrap";
import axios from "axios";

function TableAir() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setDataSource(response.data);
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
          <h5 className="text-center mb-5">List Airport</h5>
          <div className="card-body">
            <Row>
              <div className="col d-flex">
                <button className="btn btn-primary">Tambah</button>
              </div>
              <div className="d-flex justify-content-end">
                <input type="text" placeholder="cari" />
                <button className="d-flex btn btn-primary">Cari</button>
              </div>
            </Row>
            <Table
              className="mt-5"
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

export default TableAir;
