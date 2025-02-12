export default function StarsVote(vote) {
  let starFields = [];
  for (let i = vote; i > 0; i--) {
    starFields.push(<i className="fa-solid fa-star yellowStar" />);
  }

  for (let j = 5 - vote; j > 0; j--) {
    starFields.push(<i className="fa-solid fa-star greyStar" />);
  }

  console.log(starFields);
  return <div> {starFields} </div>;
}
