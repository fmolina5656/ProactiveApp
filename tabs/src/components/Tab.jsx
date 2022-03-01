import React from "react";
import { Welcome } from "./sample/Welcome";
import {ProactiveWelcome} from './sample/ProactiveWelcome'

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME);
/*
export default function Tab() {
  return (
    <div>
      <Welcome showFunction={showFunction} />
    </div>
  );
}*/
export default function Tab() {
  return (
    <div>
     <ProactiveWelcome />
    </div>
  );
}

