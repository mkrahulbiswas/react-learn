import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { IoMdCloseCircleOutline, IoMdSave } from "react-icons/io";
import { MdDateRange, MdDescription, MdOutlineAccessTime, MdSubtitles } from "react-icons/md";

function TDLModal({ paramPass }: any) {
  const { types, toDoListData, setToDoListData, modalDisplay, setModalDisplay, setFormData, formData } = paramPass
  const [fromValidErr, setFromValidErr] = useState({ title: '', detail: '', date: '', time: '' })
  const closeModal = () => {
    setModalDisplay({ isDisplay: false, type: '' })
    setFromValidErr({ title: '', detail: '', date: '', time: '' })
    setFormData({ title: '', detail: '', date: '', time: '', reminder: false })
  }
  const submitToDoForm = (e: any) => {
    e.preventDefault()
    let vErr: any = {
      hasErr: false,
      errList: {
        title: '',
        detail: '',
        date: '',
        time: '',
      }
    }
    if (formData.title === '') {
      vErr.hasErr = true
      vErr.errList.title = 'You must provide a title'
    } else if (toDoListData.find((val: any) => val.title === formData.title)) {
      vErr.hasErr = true
      vErr.errList.title = 'The selected title is already in the list'
    }
    if (formData.detail === '') {
      vErr.hasErr = true
      vErr.errList.detail = 'You must provide a detail'
    }
    if (formData.date === '') {
      vErr.hasErr = true
      vErr.errList.date = 'You must provide a date'
    }
    if (formData.time === '') {
      vErr.hasErr = true
      vErr.errList.time = 'You must provide a time'
    } else if (toDoListData.find((val: any) => val.time === formData.time)) {
      vErr.hasErr = true
      vErr.errList.time = 'Time is already taken'
    }
    setFromValidErr(vErr.errList)

    if (vErr.hasErr == false) {
      if (modalDisplay.type == types[0]) {
        setToDoListData((prev: null): any => {
          if (prev != null) {
            return [...prev, formData]
          }
          return [formData]
        })
      } else {
        // toDoListData.map((value: any) => {
        //   if (value.name) { }
        //   return { ...value, age: 28 };
        // })
      }
    }
    localStorage.setItem('toDoListData', JSON.stringify(toDoListData));
  }
  return (
    <>
      <Modal show={modalDisplay.isDisplay} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-normal">{modalDisplay.type} new task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => submitToDoForm(e)}>
          <Modal.Body>
            <Row>
              <Form.Group className="col-12 mb-3">
                <Form.Label className="fw-bold" htmlFor="toDoHeading"><MdSubtitles /> Title</Form.Label>
                <Form.Control value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} id="toDoHeading" type="text" placeholder="Give title of task" />
                {
                  fromValidErr.title != '' ? <span className='vErr' id="nameErr">{fromValidErr.title}</span> : null
                }
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                <Form.Label className="fw-bold" htmlFor="toDoDetail"><MdDescription /> What you want to do</Form.Label>
                <Form.Control value={formData.detail} onChange={(e) => setFormData({ ...formData, detail: e.target.value })} id="toDoDetail" as="textarea" placeholder="Please enter anything that you want" cols={8} rows={8} />
                {
                  fromValidErr.detail != '' ? <span className='vErr' id="nameErr">{fromValidErr.detail}</span> : null
                }
              </Form.Group>
              <Col>
                <Row>
                  <Form.Group className="col-6 mb-3">
                    <Form.Label className="fw-bold" htmlFor="toDoDate"><MdDateRange /> Date</Form.Label>
                    <Form.Control value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} id="toDoDate" type="date" placeholder="Give date of task" />
                    {
                      fromValidErr.date != '' ? <span className='vErr' id="nameErr">{fromValidErr.date}</span> : null
                    }
                  </Form.Group>
                  <Form.Group className="col-6 mb-3">
                    <Form.Label className="fw-bold" htmlFor="toDoTime"><MdOutlineAccessTime /> Time</Form.Label>
                    <Form.Control value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} id="toDoTime" type="time" placeholder="Give date of task" />
                    {
                      fromValidErr.time != '' ? <span className='vErr' id="nameErr">{fromValidErr.time}</span> : null
                    }
                  </Form.Group>
                </Row>
              </Col>
              <Form.Group className="col-12 mb-3" controlId="formGridPassword">
                <Form.Check type="checkbox" defaultChecked={formData.reminder} onChange={(e) => setFormData({ ...formData, reminder: e.target.value })} label="Do you and reminder at the time" className="fw-bold" />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={closeModal}><IoMdCloseCircleOutline /> Close</Button>
            <Button variant="primary" type="submit"><IoMdSave /> {modalDisplay.type == types[0] ? 'Save' : 'Update'} Now</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
export default TDLModal