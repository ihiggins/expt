import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { query, history } from "../Service/Atoms";
import { getAnswers } from "../Service/Query";
import Answer from "./Answer";
import Search from "./Search";

const Draw = () => {
  const clip = useRecoilValue(query);
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const setHistory = useSetRecoilState(history);

  useEffect(() => {
    var async = async () => {
      if (clip !== "") {
        setLoading(true);
        var data = await getAnswers(clip);
        //@ts-ignore
        setList(data);
        setLoading(false);
        setHistory((currentState) => [
          ...currentState,
          { clip: clip, data: data },
        ]);
      }
    };

    async();
  }, [clip]);

  var built = [];
  for (var i in list) {
    built.push(
      <Answer
        key={i}
        question={list[i].question}
        answer={list[i].answer}
        match={list[i].match}
      />
    );
  }
  if (clip == "")
    return <div className="loading-wrapper">Copy a question.</div>;
  if (isLoading)
    return (
      <div className="loading-wrapper">
        <CircularProgress size={60} />
      </div>
    );
  return (
    <div className="list">
      <div className="list-inner">
        <div className="sub-heading">Results</div>
        {built}
      </div>
    </div>
  );
};

export default Draw;
