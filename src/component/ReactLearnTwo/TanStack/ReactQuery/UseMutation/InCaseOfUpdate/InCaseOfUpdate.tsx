import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { getStudentApi, updateStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { useState } from "react"

export default function InCaseOfUpdate() {
  return (
    <>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </>
  )
}

export const ExampleOne = () => {
  const [formData, setFormData] = useState({
    id: '',
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

  const updateStudent = async (id: any, data: any) => {
    try {
      const res = await updateStudentApi(data, id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent28'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: ({ id, data }: any) => updateStudent(id, data),
    onSuccess: (_data, _id) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent28'] })
    }
  })

  return (
    <>
      <p>Hear we update the list after update data by calling the api again</p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              id: formData.id,
              data: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                class: formData.class,
              }
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
                <Button className="mt-4" variant="primary" type="submit">Update</Button>
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
                <th>Action</th>
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
                    <td>
                      <button className="btn btn-sm btn-info" onClick={() => setFormData({
                        id: item.idOrg,
                        name: item.name,
                        phone: item.phone,
                        email: item.email,
                        class: item.class,
                      })}>Edit</button>
                    </td>
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
    id: '',
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

  const updateStudent = async (id: any, data: any) => {
    try {
      const res = await updateStudentApi(data, id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent29'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: ({ id, data }: any) => updateStudent(id, data),
    onSuccess: (_apiData, postData) => {
      queryClient.setQueryData(['getStudent29'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: oldData.payload.data.map((element: any) => {
              return element.idOrg == postData.id ? {
                ...element,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                class: formData.class
              } : element
            })
          }
        }
      })
    }
  })

  return (
    <>
      <p>Hear we update the list after update data by changing in local cache data</p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              id: formData.id,
              data: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                class: formData.class,
              }
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
                <Button className="mt-4" variant="primary" type="submit">Update</Button>
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
                <th>Action</th>
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
                    <td>
                      <button className="btn btn-sm btn-info" onClick={() => setFormData({
                        id: item.idOrg,
                        name: item.name,
                        phone: item.phone,
                        email: item.email,
                        class: item.class,
                      })}>Edit</button>
                    </td>
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
    id: '',
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

  const updateStudent = async (id: any, data: any) => {
    try {
      const res = await updateStudentApi(data, id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent30'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: ({ id, data }: any) => updateStudent(id, data),
    onMutate: async (data) => {

      await queryClient.cancelQueries({ queryKey: ['getStudent30'] })
      const prevData = queryClient.getQueryData(['getStudent30'])
      queryClient.setQueryData(['getStudent30'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: oldData.payload.data.map((element: any) => {
              return element.idOrg == data.id ? {
                ...element,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                class: formData.class
              } : element
            })
          }
        }
      })
      return { prevData }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(['getStudent30'], context?.prevData)
    },
    onSettled: (_data) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent30'] })
    },
  })

  return (
    <>
      <p>Hear we update the list after update data by using <b>optimistic update</b></p>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={(e) => {
            e.preventDefault()
            respTwo.mutate({
              id: formData.id,
              data: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                class: formData.class,
              }
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
                <Button className="mt-4" variant="primary" type="submit">Update</Button>
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
                <th>Action</th>
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
                    <td>
                      <button className="btn btn-sm btn-info" onClick={() => setFormData({
                        id: item.idOrg,
                        name: item.name,
                        phone: item.phone,
                        email: item.email,
                        class: item.class,
                      })}>Edit</button>
                    </td>
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