import { findByLabelText } from '@testing-library/dom';
import styled from 'styled-components';

const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
                <SignUp>GET THE DISNEY BUNDLE</SignUp>
                <Terms>Stream now. <b><u>Terms Apply</u></b></Terms>
                <CTALogoTwo src='/images/cta-logo-two.png' alt='' />
                <CTAText>Sign up for Disney+ only</CTAText>
            </CTA>
            <BgImage />
        </Content>
    </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    font-size: 5vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpeg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1; 
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: eas-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    min-height: 1px;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
`

const SignUp = styled.a`
    max-width: 600px;
    font-size: 18px;
    font-weight: 450px;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 20px;
    margin-top: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    padding: 18.5px 24px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0383ee;
    }
`;

const Terms = styled.p`
    font-size: 11px;
    letter-spacing: .2px;
    color: silver;
    font-weight: 400;
    font-style: normal;
    margin: 0 0 24px;
    margin-bottom: 20px;
    display: flex-center;
    line-height 1.5;
`;

const CTAText = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    line-spacing: .2px;
    text-decoration: underline;
`;

export default Login;