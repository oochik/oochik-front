import styled from "@emotion/styled";
import giff from '../assets/0.gif'
import banner from '../assets/oochik-banner.svg'
import GoToButton from "./goToButton";
import { Link } from "react-router-dom";


const HeaderContainer = styled.div`
height:90vh;    
// width:100%;
padding:0 30px;
// border:1px solid white;
// margin-bottom:30vh;
@media screen and (max-width: 990px) {
    margin-bottom:100px;
    height:auto;
};

`
const OoChikGif = styled.div`
background-image: url(${banner});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
height:500px;
width:412px;
@media screen and (max-width: 990px) {
    height:340px;
    width:279px;
};
@media screen and (max-width: 575px) {
    height:205px;
    width:166px;
}    
`
const Title = styled.h5`
font-weight:700;
color:white;
font-size:26px;
text-transform:capitalize;
`
const GradientTitle = styled.h5`
font-size: 40px;
background: -webkit-linear-gradient(#ffffff 0%, #6B6F6C 70%);
background: linear-gradient(to right, #ffffff 0%, #6B6F6C 70%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-transform:capitalize;
font-size:45px;
@media screen and (max-width: 990px) {
    font-size:32px;
};
@media screen and (max-width: 575px) {
    font-size:30px;
}    

`
const Par = styled.p`
font-weight:400;
color:#d4d4d4;
`

const HalfCircle = styled.div`
border-radius:50%;
border-left:1px solid;
border-top:1px solid;
border-color:#9FC83B;
position:absolute;
`


const Header = () => {
    return (
        <HeaderContainer className="d-flex flex-column flex-sm-row-reverse justify-content-between">
            <div style={{}} className="col-12 col-sm-5 col-lg-5 d-flex justify-content-center align-items-center">
                <OoChikGif />
            </div>
            <div style={{}} className="col-12 col-sm-7 col-lg-5 d-flex flex-column justify-content-center  text-start">
                <div style={{ position: "relative", padding: '60px 0 0 60px' }}>
                    <HalfCircle style={{ opacity: 0.2, top: 0, left: 0, width: '80px', height: '80px' }} />
                    <HalfCircle style={{ opacity: 0.6, top: '15px', left: '15px', width: '80px', height: '80px' }} />
                    <HalfCircle style={{ top: '30px', left: '30px', width: '80px', height: '80px' }} />
                    <Title className="mb-2">
                        OOCHIK DAO Unleashing Creativity, Empowering Innovation
                    </Title>
                    <Par>oochik is a creative collective of independent creators. Our mission is to bring innovative ideas to life and empower others to express themselves through art and technology. Join us to explore the possibilities of creative collaboration!
                    </Par>
                </div>
                <div className="mt-3 mt-sm-5 mb-5" style={{ position: "relative", padding: '60px 0 20px 60px' }}>
                    <HalfCircle style={{ opacity: 0.2, top: 0, left: 0, width: '100px', height: '100px' }} />
                    <HalfCircle style={{ opacity: 0.6, top: '15px', left: '15px', width: '100px', height: '100px' }} />
                    <HalfCircle style={{ top: '30px', left: '30px', width: '100px', height: '100px' }} />
                    <GradientTitle >
                        OOCHIK DAO Minting 
                    </GradientTitle>
                </div>
                <Link to={'https://launchmynft.io/collections/6xpiZp7eWSrnB7jJAKSvH2pQfaUTSitnno4giHmYj9fD/oG2LtHCQHXfor6X4JRA2'} style={{ color: 'inherit', textDecoration: "none", borderRadius: "48px", }}>
                    <GoToButton />
                </Link>
            </div>
        </HeaderContainer>
    );
}

export default Header;