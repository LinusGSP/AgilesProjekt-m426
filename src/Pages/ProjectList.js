import React from 'react'

import DemoGridProject from './functiones/DataGridProProject'

import "../Styles/main.css"

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      rows: [
        {
          id: 1,
          Date: new Date('2022-12-9'),
          'Project Name': 'Website Redesign',
          Description:
            'Redesing the existing website for better user experience',
          Status:
            'AVAILABLE'
        },
        {
          id: 2,
          Date: new Date('2021-10-6'),
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
        },
      ],
    }
  }

  getTableData() {
    /*
     * FETCH TO GET PROJECT DATA FOR TABLE
     */
  }

  render() {
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
