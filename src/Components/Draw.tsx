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
      console.log(clip)
      if(clip !== ''){
      var data = await getAnswers(clip);
      }
      // var data = [
      //   { question: "test question", match: 85, answer: "this is the answer" },
      //   {
      //     question: `1) Scraping of data from the web can be accomplished by using which of the following tools:
      // A. Microsoft Excel
      // B. A python program
      // C. A software tool specifically designed for scraping
      // D. Copying a table of data from a web page and pasting into Excel
      // E. All of the above are correct`,
      //     match: 45,
      //     answer: "this is the answer",
      //   },
      //   { question: "test question", match: 25, answer: "this is the answer" },
      // ];
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

  return (
    <div className="list">
      <div className="list-inner">
        {built}
      </div>
    </div>
  
  );
};

export default Draw;
