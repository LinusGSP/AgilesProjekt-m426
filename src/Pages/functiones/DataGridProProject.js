import * as React from 'react'

import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import { DataGrid } from '@mui/x-data-grid'


const handleRowCLick = (params) => {
  const result = window.confirm("Do you want to Coach this Project?");

  if (result) {
    window.alert("Thank u for Accepting this Project");
    /**
     * CREATE THE FETCH TO UPDATE THE PROJECT TABLE WITH NEW COACH!
     **/
    function updateProject() {
      const requestOptions = {
        method: 'PUT',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({
          id: 5,
          name: "testproj",
          status: "ACTIVE"
        })
      }
      fetch('http://127.0.0.1:8080/api/project/update', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    }
    updateProject()
  } else {
    window.alert("You have declined this Project");
  }
}

      
const renderDetailsButton = (params) => {
  return (
    <strong>
      <button style={{ padding: "10px" }} onClick={handleRowCLick}>SignUp as Coach</button>
    </strong >
  )
}

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'date',
    headerName: 'date',
    type: 'date',
    width: 200,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 150,
    editable: false,
  },
  {
    field: 'coach',
    headerName: 'coach',
    width: 200,
    editable: false,
  },
  {
    field: 'edit',
    headerName: 'Accept',
    width: 100,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
  }
]

export default function DataGridProProject(props) {

  return (
    <Box
      sx={{
        height: 400,
        m: 2,
        '& .super-app-theme--ACTIVE': {
          bgcolor: '#AAF683',
        },
        '& .super-app-theme--PENDING': {
          bgcolor: '#FFD97D',
        },
        '& .super-app-theme--INACTIVE': {
          bgcolor: '#FF9B85',
        },
      }}
    >
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        getRowClassName={(props) => `super-app-theme--${props.row.status}`}
      />
    </Box>
  )
}
