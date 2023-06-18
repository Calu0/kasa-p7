import "../css/style.css";
import imgHome from "../assets/banner-homepage.png";
import PropTypes from 'prop-types'

function Banner(props) {
    const { img, txt, classNameImg, classNameBanner } = props;
    return (
        <div className={classNameBanner}>
            <img src={img} alt="landscape" className={classNameImg}></img>
            {txt}
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
}

Banner.defaultProps = {
    img: imgHome,
}


export default Banner;
