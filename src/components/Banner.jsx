import "../css/style.css";
import imgHome from "../assets/banner-homepage.png";
import PropTypes from 'prop-types'

function Banner(props) {
    const { img, txt, className } = props;
    return (
        <div id='banner'>
            <img src={img} alt="landscape" className={className}></img>
            {txt}
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

Banner.defaultProps = {
    img: imgHome,
}


export default Banner;
