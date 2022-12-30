import * as React from 'react'

import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import { DataGrid } from '@mui/x-data-grid'

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
    field: 'user_id',
    headerName: 'Coach',
    width: 200,
    editable: false,
  },
]

export default function DataGridProProject(props) {
  const handleRowCLick = (params) => {
    const result = window.confirm("This is an Alert for the Project u just clicked. To be coming: More information about the Project(long description)"
    +"if u want to sign up for the Project press 'OK', else press 'Cancel'");
    
    if(result){
      window.alert("Thank u for Accepting this Project");
      /**
       * CREATE THE FETCH TO UPDATE THE PROJECT TABLE WITH NEW COACH!
       */
    }else{
      window.alert("Ok, maybe the next project is better");
    }
  }
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
        onRowClick={handleRowCLick}
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
