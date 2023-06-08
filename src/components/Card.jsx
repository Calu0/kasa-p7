import "../css/style.css";
import data from "../data.json";
import { Link } from 'react-router-dom'

function Card() {
  return (
    <main>
    <div className='card-container'>
      {data.map(({ id, title, cover }) => (
        <Link to='/housing'>
        <article className='card' key={id}> 
        <img src={cover} alt={title}></img>
        <p>{title}</p>
        </article>
        </Link>
      ))}
    </div>
    </main>
  );
}

export default Card;
