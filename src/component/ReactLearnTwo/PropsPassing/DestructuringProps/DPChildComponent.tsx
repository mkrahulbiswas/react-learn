export const DPChildComponentOne = (props: any) => {
  const { userData } = props
  return (
    <div>
      <span>Name: <b>{userData.name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{userData.roll}</b></span>
    </div>
  )
}

export const DPChildComponentTwo = (props: any) => {
  const { name, roll } = props.userData
  return (
    <div>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
    </div>
  )
}

export const DPChildComponentThree = ({ userData }: any) => {
  const { name, roll } = userData
  return (
    <div>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
    </div>
  )
}

export const DPChildComponentFour = ({ userData: { name, roll } }: { userData: { name: string; roll: string; } }) => {
  return (
    <div>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
    </div>
  )
}

export const DPChildComponentFive = ({ userData, message }: any) => {
  let { name, roll } = userData
  return (
    <div>
      <>{message}</>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
    </div>
  )
}

export const DPChildComponentSix = ({ userData: { name, roll }, message }: { userData: { name: string; roll: string; }; message: any }) => {
  return (
    <div>
      <>{message}</>
      <span>Name: <b>{name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{roll}</b></span>
    </div>
  )
}

export const DPChildComponentSeven = (props: any) => {
  return (
    <div>
      <>{props.message}</>
      <span>Name: <b>{props.userData.name}</b></span>&nbsp;||&nbsp;
      <span>Roll: <b>{props.userData.roll}</b></span>&nbsp;||&nbsp;
      <span>Action: <b>{props.children}</b></span>
    </div>
  )
}