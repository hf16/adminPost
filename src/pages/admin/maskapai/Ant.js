import React, { useEffect } from "react";
import "../../../assets/css/styleku.css";
import { Space, Table } from "antd";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListAirline } from "../../../redux/actions/airlineActions";

function Ant() {
  const dispatch = useDispatch();
  const airline = useSelector((state) => {
    return state.listAirline.data;
  });

  useEffect(() => {
    dispatch(getListAirline());
  }, [dispatch]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Nomor Hp",
      dataIndex: "phone",
    },
    {
      key: "3",
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
            <Table columns={columns} dataSource={airline}></Table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Ant;
