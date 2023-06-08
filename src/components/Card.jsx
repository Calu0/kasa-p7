import "../css/style.css";
import data from "../data.json";

function Card() {
  return (
    <main>
    <div className='card-container'>
      {data.map(({ id, title, cover }) => (
        <article className='card' key={id}> 
        <img src={cover} alt={title}></img>
        <p>{title}</p>
        </article>
      ))}
    </div>
    </main>
  );
}

export default Card;
