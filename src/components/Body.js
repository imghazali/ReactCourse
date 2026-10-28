import ResCard from "./ResCards";
import { resObj } from "../utils/mockdata";


const Body = () => {
  return (
    <div className="res-container">
      {/* <ResCard resData={resObj} /> */}

      {
        resObj.map((data,id) => {
          return <ResCard key={id} resData={[data]} />;
        })
      }
    </div>
  );
};


export default Body;