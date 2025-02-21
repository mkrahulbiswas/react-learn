import { useEffect, useState } from "react"
import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap"
import Swal from 'sweetalert2'
import Style from './SinglePageCrud.module.css'


function SinglePageCrud(props: any) {
  const [testDataList, setTestDataList] = useState({
    status: 0,
    msg: "",
    payload: {
      data: [],
      count: 0
    }
  })
  const [fromData, setFromData] = useState({ name: '', email: '', phone: '', class: '' })
  const [fromValidErr, setFromValidErr] = useState({ name: '', email: '', phone: '', class: '' })
  const [targetId, setTargetId] = useState('')
  const [modalDisplay, updateModalDisplay] = useState({
    addModal: false,
    editModal: false,
  });


  const saveStudent = (event: any) => {
    event.preventDefault()
    props.dataPass.loader(true)
    fetch('https://kisalayakgschool.com/api/saveStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(fromData)
    }).then((result) => {
      result.json().then((response) => {
        let vErr: any = { name: '', email: '', phone: '', class: '' };
        props.dataPass.loader(false)
        if (response.status == 0) {
          props.dataPass.toast({ msg: response.msg, title: response.title, type: 'warn' })

          if (response.payload.name != undefined) {
            response.payload.name.forEach((key: any) => {
              vErr.name = response.payload.name[key]
            });
          }
          if (response.payload.email != undefined) {
            response.payload.email.forEach((key: any) => {
              vErr.email = response.payload.email[key]
            });
          }
          if (response.payload.class != undefined) {
            response.payload.class.forEach((key: any) => {
              vErr.class = response.payload.class[key]
            });
          }
          if (response.payload.phone != undefined) {
            response.payload.phone.forEach((key: any) => {
              vErr.phone = response.payload.phone[key]
            });
          }
          setFromValidErr(vErr)
        } else {
          props.dataPass.toast({ msg: response.msg, title: response.title, type: 'success' })
          getStudent()
        }
      })
    }).catch(error => console.log({ error }))
  }

  const updateStudent = (event: any) => {
    event.preventDefault()
    props.dataPass.loader(true)
    fetch('https://kisalayakgschool.com/api/updateStudent/' + targetId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(fromData)
    }).then((result) => {
      result.json().then((response) => {
        let vErr: any = { name: '', email: '', phone: '', class: '' };
        props.dataPass.loader(false)
        if (response.status == 0) {
          props.dataPass.toast({ msg: response.msg, title: response.title, type: 'warn' })

          if (response.payload.name != undefined) {
            response.payload.name.forEach((key: any) => {
              vErr.name = response.payload.name[key]
            });
          }
          if (response.payload.email != undefined) {
            response.payload.email.forEach((key: any) => {
              vErr.email = response.payload.email[key]
            });
          }
          if (response.payload.class != undefined) {
            response.payload.class.forEach((key: any) => {
              vErr.class = response.payload.class[key]
            });
          }
          if (response.payload.phone != undefined) {
            response.payload.phone.forEach((key: any) => {
              vErr.phone = response.payload.phone[key]
            });
          }
          setFromValidErr(vErr)
        } else {
          props.dataPass.toast({ msg: response.msg, title: response.title, type: 'success' })
          getStudent()
        }
      })
    }).catch(error => console.log({ error }))
  }

  const deleteStudent = (data: any) => {
    Swal.fire({
      title: "Do you want to delete the student " + data.name,
      showDenyButton: true,
      icon: 'info',
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.dataPass.loader(true)
        fetch(`https://kisalayakgschool.com/api/deleteStudent/${data.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'appVersion': '1',
            'mode': 'test'
          },
        }).then((result) => {
          result.json().then((response) => {
            props.dataPass.loader(false)
            if (response.status === 0) {
              props.dataPass.toast({ msg: response.msg, title: response.title, type: 'warn' })
            } else {
              props.dataPass.toast({ msg: response.msg, title: response.title, type: 'success' })
              getStudent()
            }
          })
        }).catch(error => console.log({ error }))
      } else if (result.isDenied) {
        props.dataPass.toast({ msg: 'Changes are not done', title: '', type: 'info' })
      }
    });
  }

  const statusStudent = (data: any) => {
    Swal.fire({
      title: "Do you want to change the status of student " + data.name,
      icon: 'info',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.dataPass.loader(true)
        fetch(`https://kisalayakgschool.com/api/statusStudent/${data.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'appVersion': '1',
            'mode': 'test'
          },
        }).then((result) => {
          result.json().then((response) => {
            props.dataPass.loader(false)
            if (response.status === 0) {
              props.dataPass.toast({ msg: response.msg, title: response.title, type: 'warn' })
            } else {
              props.dataPass.toast({ msg: response.msg, title: response.title, type: 'success' })
              getStudent()
            }
          })
        }).catch(error => console.log({ error }))
      } else if (result.isDenied) {
        props.dataPass.toast({ msg: 'Changes are not done', title: '', type: 'info' })
      }
    });
  }

  const getStudent = () => {
    closeModal()
    fetch('https://kisalayakgschool.com/api/getStudent?page=1&perPage=10', {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      }
    }).then((result) => {
      result.json().then((response) => {
        setTestDataList(response)
        props.dataPass.loader(false)
      })
    })
  }

  function openModal(dataPass: any) {
    if (dataPass.type === 'add') {
      updateModalDisplay({ ...modalDisplay, addModal: true })
    } else {
      updateModalDisplay({ ...modalDisplay, editModal: true })
      setTargetId(dataPass.data.id)
      setFromData({
        name: dataPass.data.name,
        email: dataPass.data.email,
        phone: dataPass.data.phone,
        class: dataPass.data.class,
      })
    }
  }

  function closeModal() {
    setTargetId('')
    updateModalDisplay({ addModal: false, editModal: false })
    setFromData({ name: '', email: '', phone: '', class: '' })
    setFromValidErr({ name: '', email: '', phone: '', class: '' })
  }

  useEffect(() => {
    props.dataPass.loader(true)
    getStudent()
  }, [])

  return (
    <div>
      <Row>
        <Col className="col-12 mb-3 text-end">
          <Button variant="primary" onClick={() => openModal({ type: 'add' })}>
            <i className="bi bi-plus-square"></i>
            <span className="ps-2">Add Student</span>
          </Button>
        </Col>
        <Col className="col-12">
          {/* <Card>
            <DataTable value={testDataList.payload.data} tableStyle={{ minWidth: '50rem' }}>
              <Column field="name" header="Name"></Column>
              <Column field="email" header="Email"></Column>
              <Column field="phone" header="Phone"></Column>
              <Column field="class" header="Class"></Column>
              <Column field="date" header="Date"></Column>
            </DataTable>
          </Card> */}
          <Card>
            <Table striped bordered hover variant="light" className="m-0">
              <thead>
                <tr>
                  <th className="text-center">Sl No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  testDataList.payload.data.length > 0 ?
                    testDataList.payload.data.map((item: any, index: any) =>
                      <tr key={index} style={{ verticalAlign: 'middle' }}>
                        <td className="fw-bold text-center">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td className="text-center">{item.class}</td>
                        <td className="text-center">{item.date}</td>
                        <td className="text-center">
                          <Row>
                            <Col>
                              <Button variant="primary" className="btn-sm" title="Edit" onClick={() => openModal({ type: 'edit', data: item })}>
                                <i className="bi bi-pencil-square"></i>
                              </Button>
                              <Button variant="danger" className="ms-2 btn-sm" title="Delete" onClick={() => deleteStudent(item)}>
                                <i className="bi bi-trash"></i>
                              </Button>
                              <Button variant="success" className="ms-2 btn-sm" title={item.status == '1' ? 'Block' : 'Un-Block'} onClick={() => statusStudent(item)}>
                                {
                                  item.status == '0' ? <i className="bi bi-lock-fill"></i> : <i className="bi bi-unlock-fill"></i>
                                }
                              </Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    ) :
                    <tr>
                      <td colSpan={7}>
                        <span className={Style.noDataFound}>No data found</span>
                      </td>
                    </tr>
                }
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <Modal show={modalDisplay.addModal} onHide={() => closeModal()}>
        <Modal.Header closeButton className="bg-info">
          <Modal.Title className="fw-bold">Create & Save New Student</Modal.Title>
        </Modal.Header>
        <Form onSubmit={saveStudent}>
          <Modal.Body className="bg-light">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
                {
                  fromValidErr.name != '' ? <span className={Style.vErr} id="nameErr">{fromValidErr.name}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
                {
                  fromValidErr.email != '' ? <span className={Style.vErr} id="emailErr">{fromValidErr.email}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
                {
                  fromValidErr.phone != '' ? <span className={Style.vErr} id="phoneErr">{fromValidErr.phone}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Class</Form.Label>
                <Form.Control type="text" placeholder="Enter class" onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
                {
                  fromValidErr.class != '' ? <span className={Style.vErr} id="classErr">{fromValidErr.class}</span> : null
                }
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className="bg-info">
            <Button variant="danger" onClick={() => closeModal()}>
              <i className="bi bi-x-circle"></i>
              <span className="ps-2">Close</span>
            </Button>
            <Button variant="success" type="submit">
              <i className="bi bi-save"></i>
              <span className="ps-2">Save Student</span>
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={modalDisplay.editModal} onHide={() => closeModal()}>
        <Modal.Header closeButton className="bg-info">
          <Modal.Title className="fw-bold">Edit & Update New Student</Modal.Title>
        </Modal.Header>
        <Form onSubmit={updateStudent}>
          <Modal.Body className="bg-light">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" value={fromData.name} placeholder="Enter name" onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
                {
                  fromValidErr.name != '' ? <span className={Style.vErr} id="nameErr">{fromValidErr.name}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="text" value={fromData.email} placeholder="Enter email" onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
                {
                  fromValidErr.email != '' ? <span className={Style.vErr} id="emailErr">{fromValidErr.email}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Phone</Form.Label>
                <Form.Control type="text" value={fromData.phone} placeholder="Enter phone" onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
                {
                  fromValidErr.phone != '' ? <span className={Style.vErr} id="phoneErr">{fromValidErr.phone}</span> : null
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="mb-3 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                <Form.Label className="fw-bold">Class</Form.Label>
                <Form.Control type="text" value={fromData.class} placeholder="Enter class" onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
                {
                  fromValidErr.class != '' ? <span className={Style.vErr} id="classErr">{fromValidErr.class}</span> : null
                }
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className="bg-info">
            <Button variant="danger" onClick={() => closeModal()}>
              <i className="bi bi-x-circle"></i>
              <span className="ps-2">Close</span>
            </Button>
            <Button variant="success" type="submit">
              <i className="bi bi-save"></i>
              <span className="ps-2">Update Student</span>
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default SinglePageCrud
