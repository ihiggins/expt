import { useRecoilState } from "recoil";
import { history } from "../Service/Atoms";

var PastQuerys = () => {
  const [list, setClip] = useRecoilState(history);

  var built = [];
  for (var i in list) {
    built.push(
      <div className="query" key={i}>
        {list[i].clip}
      </div>
    );
  }

  return (
    <div className="list-left">
      <div className="list-inner">{built}</div>
    </div>
  );
};

export default PastQuerys;
