export default function StarsVote(vote) {
  let starFields = "";
  for (let i = vote; i > 0; i--) {
    starFields += " gialla";
  }

  for (let j = 5 - vote; j > 0; j--) {
    starFields += " grigia";
  }

  return starFields;
}
