import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { FaLock, FaLockOpen, FaRegSave } from "react-icons/fa";
import { MdAutoDelete, MdEditNote } from "react-icons/md";

export default function WithAsync() {
  const [actions, setActions] = useState({
    loader: false,
    formType: "save",
    id: 0,
    formValidation: {
      isValid: false,
      name: '',
      email: '',
      phone: '',
      class: ''
    }
  })
  const [getTestData, setGetTestData] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })
  const [fromData, setFromData] = useState({ name: '', email: '', phone: '', class: '' })

  const getData = async () => {
    try {
      const res = await fetch("https://kisalayakgschool.com/api/getTestData", {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'live'
        }
      })
      const data = await res.json()
      setActions({ ...actions, loader: false })
      if (data.status == 1) {
        setGetTestData(data)
        resetAction()
        resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const submitForm = (event: any) => {
    event.preventDefault()
    const apiData: { url: string, method: string } = { url: '', method: '' }
    if (actions.formType === 'save') {
      apiData.url = "https://kisalayakgschool.com/api/saveTestData"
      apiData.method = 'POST'
    } else {
      apiData.url = "https://kisalayakgschool.com/api/updateTestData/" + actions.id
      apiData.method = 'PUT'
    }
    setActions({ ...actions, loader: true })
    fetch(apiData.url, {
      method: apiData.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      },
      body: JSON.stringify(fromData)
    }).then((resp) => {
      resp.json().then((data) => {
        setActions({
          ...actions, formValidation: {
            isValid: true,
            name: (data.payload.name == undefined) ? '' : data.payload.name[0],
            email: (data.payload.email == undefined) ? '' : data.payload.email[0],
            phone: (data.payload.phone == undefined) ? '' : data.payload.phone[0],
            class: (data.payload.class == undefined) ? '' : data.payload.class[0],
          }
        })
        if (data.status == 1) {
          getData()
        }
      })
    }).catch(error => console.log({ error }))
  }

  const deleteTestData = async (id: any) => {
    setActions({ ...actions, loader: true })
    const resp = await fetch(`https://kisalayakgschool.com/api/deleteTestData/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      }
    })
    const data = await resp.json()
    if (data.status == 1) {
      getData()
    }
  }

  const statusTestData = async (id: any) => {
    setActions({ ...actions, loader: true })
    const resp = await fetch(`https://kisalayakgschool.com/api/statusTestData/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      }
    })
    const data = await resp.json()
    if (data.status == 1) {
      getData()
    }
  }

  const editTestData = (data: any) => {
    let action: any = {
      id: data.id,
      formType: 'edit',
    }
    setActions({ ...actions, ...action })
    setFromData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      class: data.class,
    })
  }

  const resetForm = () => {
    setFromData({ name: '', email: '', phone: '', class: '' })
  }

  const resetAction = () => {
    setActions({
      ...actions,
      formValidation: {
        isValid: false,
        name: '',
        email: '',
        phone: '',
        class: ''
      }, id: 0, formType: 'save'
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main">
      <div className="student">
        <div className="form">
          <Form onSubmit={(e) => submitForm(e)}>
            <Row className="col-12">
              <Form.Group as={Col} controlId="formGridName" className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                <Form.Label className="fw-bold mb-0">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={fromData.name} onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
                {actions.formValidation.isValid && <span className="validation">{actions.formValidation.name}</span>}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                <Form.Label className="fw-bold mb-0">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={fromData.email} onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
                {actions.formValidation.isValid && <span className="validation">{actions.formValidation.email}</span>}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                <Form.Label className="fw-bold mb-0">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" value={fromData.phone} onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
                {actions.formValidation.isValid && <span className="validation">{actions.formValidation.phone}</span>}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                <Form.Label className="fw-bold mb-0">Class</Form.Label>
                <Form.Control type="text" placeholder="Enter class" value={fromData.class} onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
                {actions.formValidation.isValid && <span className="validation">{actions.formValidation.class}</span>}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                <Button variant="primary" type="submit"><FaRegSave /><span className="ms-2">{(actions.formType == 'save') ? 'Save' : 'Update'}</span></Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className="table">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Class</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                getTestData.payload.data.map((item: any) =>
                  <tr key={item.id}>
                    <td>{item.idOrg}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.class}</td>
                    <td>
                      <div className="status">
                        {
                          (item.status === '1') ?
                            <span className="open">Open</span> :
                            <span className="close">Closed</span>
                        }
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <div className="common edit" onClick={() => editTestData(item)}>
                          <MdEditNote />
                        </div>
                        <div className="common delete" onClick={() => deleteTestData(item.id)}>
                          <MdAutoDelete />
                        </div>
                        <div className="common status" onClick={() => statusTestData(item.id)}>
                          {
                            (item.status === '1') ?
                              <FaLock /> :
                              <FaLockOpen />
                          }
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
      {
        actions.loader && <div className="loader">
          <span>Loading...</span>
          <div />
        </div >
      }
    </div >
  )
}