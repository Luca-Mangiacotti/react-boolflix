export default function StarsVote(vote) {
  let starFields = [""];
  for (let i = vote; i > 0; i--) {
    starFields.push(<i className="fa-solid fa-star text-amber-400" />);
  }

  for (let j = 5 - vote; j > 0; j--) {
    starFields.push(<i className="fa-solid fa-star text-gray-400" />);
  }

  //   console.log(starFields);
  return (
    <div>
      {starFields.map((elm, index) => (
        <span key={index}>{elm}</span>
      ))}
    </div>
  );
}
