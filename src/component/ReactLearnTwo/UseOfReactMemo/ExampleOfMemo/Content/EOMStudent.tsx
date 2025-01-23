import { memo } from "react";

function EOMStudent({ student }: any) {
  console.log('Student Component');
  return (
    <>
      <section className='pc_content'>
        <div className="row gap-2">
          {
            student.map((item: any, index: number) => {
              return (
                <div className="col-12" key={index}>
                  <span className="d-block"><b>Name:</b> {item.name}</span>
                  <span className="d-block"><b>Age:</b> {item.age}</span>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
export default memo(EOMStudent)
