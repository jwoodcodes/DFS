import HomeSiteName from './HomeSiteName';

export default function Card(props) {
  const whichCard = props.whichCard;

  const ColorName = function (e) {
    console.log(e);
    console.log(whichCard);
    if (whichCard === 'dfs') {
      console.log('dfs card entered');
      console.log(whichCard);
    }
    if (whichCard === 'dynasty') {
      console.log('dynasty card entered');
      console.log(whichCard);
    }
  };

  return (
    <div className={props.class} onMouseEnter={ColorName}>
      <div className={props.link}>{props.message}</div>
      <ul>{props.items}</ul>
    </div>
  );
}
