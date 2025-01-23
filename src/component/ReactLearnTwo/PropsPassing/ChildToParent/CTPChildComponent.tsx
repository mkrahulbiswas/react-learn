const CTPChildComponent = (props: any) => {
  // console.log(props.getData)
  let userData = [
    {
      name: 'Somenath Dash',
      class: '30',
    }, {
      name: 'Aroshi Basu',
      class: '40',
    }
  ]
  return (
    <div>
      {props.getData(userData)}
    </div>
  )
}
export default CTPChildComponent
