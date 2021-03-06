import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { Modal, Button, Form as BForm } from 'react-bootstrap'
import { INewCampusAndUfDto } from '../../../interfaces/contracts/INewCampusAndUfDto'
import campusService from '../../../services/campusService'

const PopUpCampus: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handleSubmit(newCampus:INewCampusAndUfDto) {
    campusService.createCampusNameAndUf(newCampus)
      .finally(() => {
        handleClose()
        window.location.reload(false)
      })
  }

  return (
    <>
      <Button type="button" onClick={handleShow}>Adiconar Campus</Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>Insira as informações do Campus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              campus_name: '',
              name_uf: ''
            }}
          >
            <Form>
              <BForm.Group controlId="createCampus">
                <BForm.Label>Campus:</BForm.Label>
                <Field
                  className="form-control"
                  type="text"
                  name="campus_name"
                  placeholder="Nome do Campus"
                  required
                />
                <BForm.Label>UF:</BForm.Label>
                <Field
                  className="form-control"
                  type="text"
                  name="name_uf"
                  placeholder=" UF do campus"
                  required
                />
              </BForm.Group>
              <Button type="submit">Criar</Button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopUpCampus
