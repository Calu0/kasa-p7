import '../css/style.css';

function Banner(props){
    const {img, txt} = props
    return(
        <div id='banner'>
            <img src= {img} alt='landscape'></img>
            {txt}
        </div>
    )
}

export default Banner;