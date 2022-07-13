import React from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import styles from "./styles/table.module.less";

const columns: TableColumnProps[] = [
  {
    title: "Name",
    dataIndex: "name",
    fixed: "left",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    phone: "15623591244",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    phone: "16623191244",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    phone: "15423591244",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    phone: "15023591248",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    phone: "17623591240",
    email: "william.smith@example.com",
  },
];

export function UserTable() {
  return (
    <div className={styles.wrapper}>
      <Table
        className={styles.table}
        columns={columns}
        data={data}
        scroll={{ x: 768 }}
      />
    </div>
  );
}
