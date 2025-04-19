import { faker } from "@faker-js/faker"

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <b>User Id:</b> {faker.string.uuid()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>User Name:</b> {faker.internet.username()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Email:</b> {faker.internet.email()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Password:</b> {faker.internet.password()}
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Birth Date:</b> {faker.date.birthdate().toDateString()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Registered At:</b> {faker.date.past().toDateString()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Random Number :</b> {faker.number.int()}
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Bicycle :</b> {faker.vehicle.bicycle()}
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <b>Avatar:</b> {faker.image.avatar()}
        </div>
      </div>
    </div>
  )
}