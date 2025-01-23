export default function BasicPropDrilling() {
  return (
    <>
      <ParentComponent name='Rahul Biswas' />
    </>
  )
}


const ParentComponent = (props: any) => {
  return (
    <>
      <ChildComponent name={props.name} />
    </>
  )
}

const ChildComponent = (props: any) => {
  return (
    <>
      <GrandChildComponent name={props.name} />
    </>
  )
}

const GrandChildComponent = (props: any) => {
  return (
    <>
      <GrandGrandChildComponent name={props.name} />
    </>
  )
}

const GrandGrandChildComponent = (props: any) => {
  return (
    <>
      <span>Grand Grand Child Component: <b>{props.name}</b></span>
    </>
  )
}