import { useState } from 'react';
import WorkList from "../../components/workList/WorkList";

function PortfolioPage(props) {

  const [works, setWorks] = useState([]);

  const getWorks = () => {
    setWorks(["Works 1", "Works 1"]);
  }

  return (
    <>
      <button onClick={getWorks}>get</button>
      <WorkList workList={works}/>
    </>
  );
}

export default PortfolioPage;