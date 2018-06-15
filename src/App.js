import React,{Fragment} from "react";

const App = (props) => {
  return (
    <Fragment>
    <h1>Users</h1>
    <ul>
      {props.data.map((user, i) => {
        return <li key={i}>{user.name}</li>
      })}
    </ul>
 </Fragment>
  )
}

export default App;