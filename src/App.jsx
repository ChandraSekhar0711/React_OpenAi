import s from "./style.module.css";
import "./App.css";
import { fetchQuery } from "./components/api/index";
import { useState } from "react";

import { InputField } from "./components/Input/InputField";
import { useEffect } from "react";

function App() {
  const [res, setRes] = useState("");
  async function fetch(query){
    const queryRes = await fetchQuery.queryResult(query);
    setRes(queryRes);
  }
  function search(query) {
    fetch(query);
    console.log(query);
  }
useEffect(()=>{
  fetch("Hello!");
},[])
  return (
    <>
      <InputField onQueryClick={search} />

      <div className={s.container}>
        <div className={s.container2}>
          <span className={s.res}>{res}</span>
          <span className={s.note}><b>Note: </b>For essay or articles type mention words. Limit is 200.</span>
          </div>
          
      </div>
      
    </>
  );
}

export default App;
