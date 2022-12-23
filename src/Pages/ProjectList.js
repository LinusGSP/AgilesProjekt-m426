import React from 'react'

import DemoGridProject from './functiones/DataGridProProject'

import "../Styles/main.css"

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }
  }

  componentDidMount(){
    this.getTableData();
  }



  getTableData() {
    const requestOptions = {
      method:"GET",
      headers : {
        "Content-Type":"application/json",
        'Acces-Control-Allow-Origin': '*'
      }
    }

   fetch("http://127.0.0.1:8080/api/project/", requestOptions)
   .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({rows:data})
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
      <h2>
        All Projects
      </h2>
        <div className="projectTable">
          <DemoGridProject rows={this.state.rows} />
        </div>
      </>
    )
  }
}

export default ProjectList
