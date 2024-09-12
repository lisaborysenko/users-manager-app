import { useMemo, useState } from "react";
import Table from "../../components/Table";
import { User } from "../../store/userSlice";

import styles from "./styles.module.css";
import Input from "../../components/Input";
import { Column } from "react-table";

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  const [nameFilter, setNameFilter] = useState("");
  const [usernameFilter, setUsernameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");

  const columns: Column<User>[] = useMemo(
    () => [
      {
        Header: (
          <Input
            label="Name"
            id="name"
            placeholder="Filter by Name"
            filterValue={nameFilter}
            setFilterValue={setNameFilter}
          />
        ),
        accessor: "name",
      },
      {
        Header: (
          <Input
            label="Username"
            id="username"
            placeholder="Filter by Username"
            filterValue={usernameFilter}
            setFilterValue={setUsernameFilter}
          />
        ),
        accessor: "username",
      },
      {
        Header: (
          <Input
            label="Email"
            id="email"
            placeholder="Filter by Email"
            filterValue={emailFilter}
            setFilterValue={setEmailFilter}
          />
        ),
        accessor: "email",
      },
      {
        Header: (
          <Input
            label="Phone"
            id="phone"
            placeholder="Filter by Phone"
            filterValue={phoneFilter}
            setFilterValue={setPhoneFilter}
          />
        ),
        accessor: "phone",
      },
    ],
    [nameFilter, usernameFilter, emailFilter, phoneFilter]
  );

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
    );
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Users Manager</h1>
      <Table data={filteredUsers} columns={columns} />
    </div>
  );
};

export default Users;
