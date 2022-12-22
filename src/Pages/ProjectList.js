import React from 'react'

import DemoGridProject from './functiones/DataGridProProject'

import "../Styles/main.css"

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    
      rows:
      [{
        id: 1,
        Date: "2022-12-1",
        'Project Name': 'Website Redesign',
        Description:
          'Redesing the existing website for better user experience',
        Status:
          'AVAILABLE'
      },
      {
        id: 2,
        Date: "2021-10-6",
        'Project Name': 'Mobile App Development',
        Description: 'Develop a mobile app to improve customer engagement',
        Status:
          'AVAILABLE'
      },
      {
        id: 3,
        Date: new Date('2020-9-1'),
        'Project Name': 'Data Migration',
        Description: 'Migrate data from legacy system to modern system',
        Status:
          'PENDING'
      },
      {
        id: 4,
        Date: new Date('2021-4-20'),
        'Project Name': 'AI Implementation',
        Description:
          'Implement Artificial Intelligence to automate processes',
        Status:
          'PENDING'
        },
      {
        id: 5,
        Date: new Date('2021-5-5'),
        'Project Name': 'Cloud Migration',
        Description: 'Migrate existing infrastructure to cloud platform',
        Status:
          'INACTIVE'
      }]
    }
  }

  /** TEST DATA
   *  this.setState({
      rows:
      [{
        id: 1,
        Date: "2022-12-1",
        'Project Name': 'Website Redesign',
        Description:
          'Redesing the existing website for better user experience',
        Status:
          'AVAILABLE'
      },
      {
        id: 2,
        Date: "2021-10-6",
        'Project Name': 'Mobile App Development',
        Description: 'Develop a mobile app to improve customer engagement',
        Status:
          'AVAILABLE'
      },
      {
        id: 3,
        Date: new Date('2020-9-1'),
        'Project Name': 'Data Migration',
        Description: 'Migrate data from legacy system to modern system',
        Status:
          'PENDING'
      },
      {
        id: 4,
        Date: new Date('2021-4-20'),
        'Project Name': 'AI Implementation',
        Description:
          'Implement Artificial Intelligence to automate processes',
        Status:
          'PENDING'
        },
      {
        id: 5,
        Date: new Date('2021-5-5'),
        'Project Name': 'Cloud Migration',
        Description: 'Migrate existing infrastructure to cloud platform',
        Status:
          'INACTIVE'
      }]
   */

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
   .then((json) => console.log("AAAAAAAAAAAA" + json));
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
