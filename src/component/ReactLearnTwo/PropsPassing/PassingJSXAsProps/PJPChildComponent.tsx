export const PJPChildComponentOne = ({ userData, message }: any) => {
  let { name, roll } = userData
  return (
    <div>
      <p>{message}</p>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
      <hr />
    </div>
  )
}

export const PJPChildComponentTwo = (props: any) => {
  return (
    <div>
      <p>{props.message}</p>
      <span>Name: <b>{props.userData.name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{props.userData.roll}</b></span>
      <span>Children: <b>{props.children}</b></span>
      <hr />
    </div>
  )
}