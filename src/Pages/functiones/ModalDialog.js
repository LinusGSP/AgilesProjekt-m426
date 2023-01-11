import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import '../../Styles/modal.css'

function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }
  const closeModal = () => {
    return invokeModal(false)
  }
  const addProject = () => {
    /**
     * FETCH TO ADD PROJECT
     */

    return invokeModal(false)
  }
  return (
    <>
      <Button variant="dark" onClick={initModal}>
        Add new Project
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Add new project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label for="name">Project Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label for="date">Datum:</label>
              <input type="date" id="date" name="date" />
            </div>
            <label for="desc">Description:</label>
            <textarea id="desc" name="desc" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={addProject}>
            Add Project
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog
