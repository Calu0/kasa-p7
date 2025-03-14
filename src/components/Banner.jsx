import "../css/style.css";
import imgHome from "../assets/banner-homepage.png";
import PropTypes from 'prop-types'

function Banner(props) {
    const { img, txt, classNameImg, classNameBanner } = props;
    return (
        <div className={classNameBanner}>
            <img src={img ? img : imgHome} alt="landscape" className={classNameImg}></img>
            {txt}
        </div>
    );
}



export default Banner;
