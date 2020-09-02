import React, {Component} from 'react';
import '../stylesheets/ExploreFooter.scss';

const img1 = "https://images.arcadis.com/media/B/B/A/%7BBBA972D3-97ED-4C9F-9C4D-12E15AE3381D%7Dcontractor-1.jpg?width=1920&height=0&mode=crop&anchor=top";
const img2 = "https://cleantucson.com/wp-content/uploads/2019/07/house-cleaning-1200x659.jpg";
const img3 = "https://www.burpee.com/on/demandware.static/-/Sites/default/dwf74347a5/BP16_AAG_814x431_Ask_A_Gardener_VERB.jpg";
const naviImg = "https://icons-for-free.com/iconfiles/png/512/location+navigation+icon-1320196186093642713.png";

class ExploreFooter extends Component {
    render() {
        return (
            <div>
                <h1 className="footer-text">Popular Services Around You!</h1>
                <div className="footer-container">
                    <div className="image-section">
                        <div className="img-text-group">
                            <img className="single-img" src={img1} alt="first image"/>
                            <div className="title-group">
                                <h3 className="img-title">Contractor</h3>
                                <img className="navi-img" src={naviImg} alt="navigation icon"/>
                                <h3 className="img-title-finder">Find Pros Around You</h3>
                            </div>
                        </div>
                        <div className="img-text-group">
                            <img className="single-img" src={img2} alt="second image"/>
                            <div className="title-group">
                                <h3 className="img-title">House Cleaner</h3>
                                <img className="navi-img" src={naviImg} alt="navigation icon"/>
                                <h3 className="img-title-finder">Find Pros Around You</h3>
                            </div>
                        </div>
                        <div className="img-text-group">
                            <img className="single-img" src={img3} alt="third image"/>
                            <div className="title-group">
                                <h3 className="img-title">Gardener</h3>
                                <img className="navi-img" src={naviImg} alt="navigation icon"/>
                                <h3 className="img-title-finder">Find Pros Around You</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExploreFooter;