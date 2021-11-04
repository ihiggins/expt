import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { query } from "../Service/Atoms";
import { getAnswers } from "../Service/Query";
import Answer from "./Answer";

const Draw = () => {
  const clip = useRecoilValue(query);
  const [list, setList] = useState([]);

  useEffect(() => {
    var async = async () => {
      var data = await getAnswers(clip);
      //@ts-ignore
      setList(data);
      console.log(data);
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

  return <div className="list">{built}</div>;
};

export default Draw;
