// import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const UsersPage = () => {
  const datas = JSON.parse(localStorage.getItem("usersData"));
  const [users, setUsers] = useState([]);
  // Fetch data from API
  const fetchUsers = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setUsers(data);
  };
  console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Surname</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => {
          return (
            <tr key={data.username}>
              <td>{data.username}</td>
              <td>{data.surname}</td>
              <td>{data.country}</td>
              <td>{data.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // const columns = [
  //   { field: "username", headerName: "Username", width: 70 },
  //   { field: "surname", headerName: "Surname", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   { field: "country", headerName: "Country", width: 130 },
  //   { field: "city", headerName: "City", width: 130 },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.surname || ""} ${params.row.lastName || ""}`,
  //   },
  // ];
  // Get data from LocalStorage
  // const datas = JSON.parse(localStorage.getItem("usersData"));
  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // datas.map((data) => {
  //   return {
  //     id: data.id,
  //     username: data.username,
  //     surname: data.surname,
  //     lastName: data.lastName,
  //     country: data.country,
  //     city: data.city,
  //   };
  // }),
  // ];
  // return (s
  // <div style={{ height: 400, width: "100%" }}>
  //   <br />
  //   <DataGrid
  //     rows={rows}
  //     columns={columns}
  //     pageSize={5}
  //     rowsPerPageOptions={[5]}
  //     checkboxSelection
  //   />
  // </div>
  // );
};

export default UsersPage;
