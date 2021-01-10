import React from "react";
import UserInitForm from "./UserInitForm";

function UserInit(props) {
  const { initialized } = props;
  return (
    <>
      <UserInitForm
        initialized={initialized}
        setLoading={props.setLoading}
        setUserInitialised={props.setUserInitialised}
      />
    </>
  );
}

export default UserInit;
