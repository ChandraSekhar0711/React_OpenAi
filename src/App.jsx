import s from "./style.module.css";
import "./App.css";
import { fetchQuery } from "./components/api/index";
import { useState } from "react";

import { InputField } from "./components/Input/InputField";

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

  return (
    <>
      <InputField onQueryClick={search} />

      <div className={s.container}>
        <div className={s.container2}>
          <span className={s.res}>{res}</span>
          </div>
      </div>
    </>
  );
}

export default App;
