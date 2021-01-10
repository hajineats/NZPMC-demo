import React from "react";
import UserInitForm from "./UserInitForm";

function UserInit(props) {
  const { initialized, setInitialized } = props;
  return (
    <>
      <UserInitForm
        initialized={initialized}
        setLoading={props.setLoading}
        setInitialized={setInitialized}
      />
    </>
  );
}

export default UserInit;
