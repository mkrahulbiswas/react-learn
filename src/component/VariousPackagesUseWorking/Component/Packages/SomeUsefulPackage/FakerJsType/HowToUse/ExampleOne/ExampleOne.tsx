import { faker } from "@faker-js/faker"

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <b>User Id:</b> {faker.string.uuid()}
        </div>
        <div className="exampleCommonContent">
          <b>User Name:</b> {faker.internet.username()}
        </div>
        <div className="exampleCommonContent">
          <b>Email:</b> {faker.internet.email()}
        </div>
        <div className="exampleCommonContent">
          <b>Password:</b> {faker.internet.password()}
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <b>Birth Date:</b> {faker.date.birthdate().toDateString()}
        </div>
        <div className="exampleCommonContent">
          <b>Registered At:</b> {faker.date.past().toDateString()}
        </div>
        <div className="exampleCommonContent">
          <b>Random Number :</b> {faker.number.int()}
        </div>
        <div className="exampleCommonContent">
          <b>Bicycle :</b> {faker.vehicle.bicycle()}
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <b>Avatar:</b> {faker.image.avatar()}
        </div>
      </div>
    </div>
  )
}