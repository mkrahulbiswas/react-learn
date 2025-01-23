import { Form } from "react-router"

export default function Contact() {
  return (
    <>
      <div>Contact Page</div>
      <Form method="POST" action="/contact">
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="text" name="phone" id="phone" placeholder="phone" />
        <textarea name="about" id="about" placeholder="about"></textarea>
        <button>Submit</button>
      </Form>
    </>
  )
}