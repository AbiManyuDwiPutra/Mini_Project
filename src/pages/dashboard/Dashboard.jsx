import {
  Button,
  Form,
  Input,
  Table,
  Typography,
  Popconfirm,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
// import { INITIAL_TABLE_DATA } from "./constants";

//   import Error from "../../components/error/error";
import Gap from "../../components/gap/gap";
import { useQuery } from "@apollo/client";
import { GET_OFFLINE_CLASS } from "../OfflineClass/query";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const FormComponentExp = () => {
  const { Title } = Typography;

  const { data: consumenData, loading: isProductLoading } =
    useQuery(GET_OFFLINE_CLASS);

  const [data = consumenData?.offline_class, setData] = useState();

  // const [data, setData] = useState(INITIAL_TABLE_DATA);

  const TABLE_COLUMNS = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "id",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "id",
    },
    {
      title: "Nomor HP",
      dataIndex: "no_hp",
      key: "id",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        data.length >= 1 ? (
          <Space>
            {/* <a onClick={() => handleEdit(record)}>Edit</a> */}
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => deleteData(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const deleteData = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  // useEffect(() => {}, []);

  return (
    <>
      {isProductLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Title>Form Biodata Mahasiswa</Title>

          <Gap height={30} />

          {/* Table */}
          {/* {data?.map((item) => ( */}
            <Table columns={TABLE_COLUMNS} dataSource={data} />
          {/* ))} */}
        </>
      )}
    </>
  );
};

export default FormComponentExp;
