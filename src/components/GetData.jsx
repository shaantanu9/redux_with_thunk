import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  getData,
  getDatafromURL,
  defaultFetchData
} from "../store/actionsCreators";
const GetData = () => {
  const [searchTearm, setSearchTeram] = useState("");
  const [page, setPage] = useState(1);

  const { data } = useSelector((state) => state);

  const dispatch = useDispatch();

  const getDataBookmark = () => {
    console.log("GetDataFromSearch", searchTearm);
    dispatch(getDatafromURL(searchTearm));
  };

  useEffect(() => {
    dispatch(defaultFetchData(page));
  }, [page, dispatch]);

  console.log("Data from Store", data);
  return (
    <>
      <input type="text" onChange={(e) => setSearchTeram(e.target.value)} />
      <button onClick={getDataBookmark}>GetData</button>
      <br />
      <br />
      <button onClick={() => setPage((pre) => pre + 1)}>NextPage</button>
      {data?.map(({ _id, title, url, description, code }, i, arr) => (
        <div key={_id}>
          <h1>{title}</h1>
          <p>{url}</p>
          <p>{description}</p>
          {showCode(code)}
        </div>
      ))}
    </>
  );
};

export default GetData;

///

function showCode(description, language = "javascript") {
  // console.log("language", language);
  language == "golang" && console.log("language", language, description);
  return (
    <div style={{ display: "inline" }}>
      <SyntaxHighlighter language={language} style={{ ...docco }}>
        {description}
      </SyntaxHighlighter>
    </div>
  );
}
