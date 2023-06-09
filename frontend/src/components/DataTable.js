import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable() {
  const [collaborators, setCollaborators] = useState([]);

  const loadCollaborators = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/collaborator");
      const data = await response.json();
      setCollaborators(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCollaborators();
  }, []);

  console.log(collaborators);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    { field: 'country', headerName: 'Country', width: 130 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'joinedDate', headerName: 'Joined', width: 90 },
    { field: 'deliveryManager', headerName: 'DM', width: 90 },
    { field: 'email', headerName: 'email', width: 90 },
    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'exitDate', headerName: 'Left', width: 90 },
];

/*
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
*/

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={collaborators}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}