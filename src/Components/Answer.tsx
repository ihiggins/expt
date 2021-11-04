var Answer = ({ question, answer, match }) => {
  return (
    <div className="Answer">
      {question}
      match{match}
      {answer}
    </div>
  );
};

export default Answer;
