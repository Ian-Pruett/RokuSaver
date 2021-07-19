import React from "react";
import Remote from "./Remote";
import KeyboardInput from "./KeyboardInput";
import IpField from "./IpField";
import Store from "./stores/Store";


function App() {
  return (
    <React.Fragment>
      <Store>
        <IpField />
        <Remote />
        <KeyboardInput />
      </Store>
    </React.Fragment>
  );
}

export default App;
