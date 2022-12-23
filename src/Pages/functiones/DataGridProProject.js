import * as React from 'react'

import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'date',
    headerName: 'Date',
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
    headerName: 'Status',
    width: 150,
    editable: false,
  },
  {
    field: 'coach',
    headerName: 'Coach',
    width: 200,
    editable: false
  },
]

export default function DataGridProProject(props) {
  return (
    <Box sx={{ 
      height: 400, 
      m:2,
      '& .super-app-theme--AVAILABLE': {
        bgcolor: "#AAF683"
      },
      '& .super-app-theme--PENDING': {
        bgcolor: "#FFD97D"
      },
      '& .super-app-theme--INACTIVE': {
        bgcolor: "#FF9B85"
      }
      
    
    }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowClassName={(props) => `super-app-theme--${props.row.Status}`}
      />
    </Box>
  )
}
