import '../css/style.css';
import { useState } from "react";
import arrow from "../assets/direction-arrow.png";



function Slideshow(props) {

    const { pictures } = props;
    const [currentIndex, setCurrentIndex] = useState(0)

    function hide() {
        if (pictures.length === 1) {
            return "none";
        }
    }

    function indexPlus() {
        if (currentIndex + 1 < pictures.length) {
            setCurrentIndex(currentIndex + 1)
        }
        else {
            setCurrentIndex(0)
        }
    }


    function indexMinus() {
        if (currentIndex + 1 > 1) {
            setCurrentIndex(currentIndex - 1)
        }
        else {
            setCurrentIndex(pictures.length - 1)
        }
    }


    return (
        <div className='slideshow-container'>

            <div className='slideshow-wrapper'>

                <img src={pictures[currentIndex]} alt='picture' className='picture'></img>

                <div className='dir-arrow-container'>
                    <img

                        src={arrow}
                        alt='directionnal-arrow'
                        className='dir-arrow dir-arrow__left'
                        style={{ display: hide() }}
                        onClick={() => indexMinus()}

                    ></img>
                    <img

                        src={arrow}
                        alt='directionnal-arrow'
                        className='dir-arrow dir-arrow__right'
                        style={{ display: hide() }}
                        onClick={() => indexPlus()}

                    ></img>
                </div>
                <p className='index' style={{ display: hide() }}>
                    {`${currentIndex + 1}/${pictures.length}`}
                </p>
            </div>


        </div>
    )
}

export default Slideshow;