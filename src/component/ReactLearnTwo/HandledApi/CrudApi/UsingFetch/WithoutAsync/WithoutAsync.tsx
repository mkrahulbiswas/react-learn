import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { FaLock, FaLockOpen, FaRegSave } from "react-icons/fa";
import { MdAutoDelete, MdEditNote } from "react-icons/md";

export default function WithoutAsync() {
  const [actions, setActions] = useState({
    loader: false,
    formType: "save",
    formValidation: {
      isValid: false,
      name: '',
      email: '',
      phone: '',
      class: ''
    },
    apiResp: {
      hasResp: false,
      msg: '',
      title: '',
      status: 0,
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
  // const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })

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
      setActions({
        ...actions, apiResp: {
          hasResp: true,
          msg: data.msg,
          title: data.title,
          status: data.status
        }
      })
      setActions({ ...actions, loader: false })
      if (data.status == 1) {
        setGetTestData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const submitForm = (event: any) => {
    event.preventDefault()
    setActions({ ...actions, loader: false })
    fetch('https://kisalayakgschool.com/api/saveTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      },
      body: JSON.stringify(fromData)
    }).then((resp) => {
      resp.json().then((data) => {
        resetAction()
        setActions({
          ...actions, formValidation: {
            isValid: true,
            name: (data.payload.name == undefined) ? '' : data.payload.name[0],
            email: (data.payload.email == undefined) ? '' : data.payload.email[0],
            phone: (data.payload.phone == undefined) ? '' : data.payload.phone[0],
            class: (data.payload.class == undefined) ? '' : data.payload.class[0],
          }, apiResp: {
            hasResp: true,
            msg: data.msg,
            title: data.title,
            status: data.status
          }, loader: false
        })
        if (data.status == 1) {
          resetForm()
          getData()
        }
      })
    }).catch(error => console.log({ error }))
  }

  const deleteTestData = (id: any) => {
    setActions({ ...actions, loader: true })
    fetch(`https://kisalayakgschool.com/api/deleteTestData/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      }
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        getData()
      })
    }).catch(error => console.log({ error }))
  }

  const statusTestData = (id: any) => {
    setActions({ ...actions, loader: true })
    fetch(`https://kisalayakgschool.com/api/statusTestData/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'live'
      }
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        getData()
      })
    }).catch(error => console.log({ error }))
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
      }, apiResp: {
        hasResp: false,
        msg: '',
        title: '',
        status: 0,
      }
    })
  }

  useEffect(() => {
    getData()
    console.log(actions);
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
              <Form.Group as={Col} controlId="formGridClass" className="col-sm-6 col-md-9 col-lg-9 col-xl-9 mb-3">
                {actions.apiResp.hasResp && <span className={((actions.apiResp.status == 1) ? 'successResp' : ((actions.apiResp.status == 2) ? 'warningResp' : 'errorResp'))}>{actions.apiResp.msg}</span>}
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
                        <div className="common edit">
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