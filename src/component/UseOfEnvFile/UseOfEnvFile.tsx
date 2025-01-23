function UseOfEnvFile() {
  const projectName = import.meta.env.VITE_project_name
  const projectType = import.meta.env.project_type
  return (
    <div>
      <p><b>.env</b> we use for create those <b>variable</b> which we want to keep private and want to <b>prevent</b> accessing the <b>value</b>.</p>
      <p>In react we need to create a .end five in root</p>
      <p>Hear in react one thing mist be noted that is you need to prefix the <b>VITE_</b> before the created variable otherwise it will not call in project</p>
      <p>as example we create two <b>variable</b> in <b>.env</b></p>
      <p>One is: <b>VITE_project_name</b></p>
      <p>Another one is: <b>project_type</b></p>
      <p>If we call both the first one value we will get properly, but another one will return <b>undefined</b></p>
      <hr />
      <p>{projectName}</p>
      <p>{projectType}</p>
    </div>
  )
}

export default UseOfEnvFile
