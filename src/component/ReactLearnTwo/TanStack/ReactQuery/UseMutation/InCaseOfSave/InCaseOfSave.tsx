import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { getStudentApi, saveStudentApi } from "../../../../../../services/api-service"
import { useState } from "react"

export default function InCaseOfSave() {
  return (
    <>
      <ExampleThree />
      <ExampleOne />
      <ExampleTwo />
    </>
  )
}

export const ExampleOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
  })
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const saveStudent = async (data: any) => {
    try {
      const res = await saveStudentApi(data)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent31'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (data: { name: string; phone: string; email: string; class: string }) => saveStudent(data),
    onSuccess: (_data, _id) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent31'] })
    }
  })

  return (
    <>
      <p>Hear we update the list after save data by calling the api again</p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              class: formData.class,
            })
          }}>
            <Row className="col-12">
              <Form.Group as={Col} controlId="formGridName" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Class</Form.Label>
                <Form.Control type="text" placeholder="Enter class" value={formData.class} onChange={(e) => setFormData({ ...formData, class: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Button className="mt-4" variant="primary" type="submit">Save</Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className="col-12">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                resp.data && resp.data.payload.data.map((item: any, index: any) =>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export const ExampleTwo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
  })
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const saveStudent = async (data: any) => {
    try {
      const res = await saveStudentApi(data)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent32'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (data: { name: string; phone: string; email: string; class: string }) => saveStudent(data),
    onSuccess: (_apiData, id) => {
      queryClient.setQueryData(['getStudent32'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: [...oldData.payload.data, { ...id, status: '1' }]
          }
        }
      })
    }
  })

  return (
    <>
      <p>Hear we update the list after save data by changing in local cache data</p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              class: formData.class,
            })
          }}>
            <Row className="col-12">
              <Form.Group as={Col} controlId="formGridName" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Class</Form.Label>
                <Form.Control type="text" placeholder="Enter class" value={formData.class} onChange={(e) => setFormData({ ...formData, class: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Button className="mt-4" variant="primary" type="submit">Save</Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className="col-12">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                resp.data && resp.data.payload.data.map((item: any, index: any) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export const ExampleThree = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
  })
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const saveStudent = async (data: any) => {
    try {
      const res = await saveStudentApi(data)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent33'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (data: { name: string; phone: string; email: string; class: string }) => saveStudent(data),
    onMutate: async (id) => {

      await queryClient.cancelQueries({ queryKey: ['getStudent33'] })
      const prevData = queryClient.getQueryData(['getStudent33'])
      queryClient.setQueryData(['getStudent33'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: [...oldData.payload.data, { ...id, status: '1' }]
          }
        }
      })
      return { prevData }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(['getStudent33'], context?.prevData)
    },
    onSettled: (_data) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent33'] })
    },
  })

  return (
    <>
      <p>Hear we update the list after save data by using <b>optimistic update</b></p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              class: formData.class,
            })
          }}>
            <Row className="col-12">
              <Form.Group as={Col} controlId="formGridName" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Form.Label className="fw-bold mb-0">Class</Form.Label>
                <Form.Control type="text" placeholder="Enter class" value={formData.class} onChange={(e) => setFormData({ ...formData, class: e.target.value })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridClass" className="col-4 mb-3">
                <Button className="mt-4" variant="primary" type="submit">Save</Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className="col-12">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                resp.data && resp.data.payload.data.map((item: any, index: any) =>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}