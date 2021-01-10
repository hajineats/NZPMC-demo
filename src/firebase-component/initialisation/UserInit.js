import React from "react";
import UserInitForm from "./UserInitForm";

function UserInit(props) {
  return (
    <>
      <UserInitForm
        setLoading={props.setLoading}
        setUserInitialised={props.setUserInitialised}
      />
    </>
  );
}

export default UserInit;
