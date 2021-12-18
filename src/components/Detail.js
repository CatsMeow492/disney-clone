import styled from 'styled-components';

const Detail = (props) => {
    return (

        <Container>
                <Background>

                </Background>
        </Container>

        )
};

const Container = styled.div`

    position: relative;
    min-height: calc(100vh- 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw - 5px);

`;

const Background = styled.div`

    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        width: 100vh;
        height: 200vh;
    }

`;


export default Detail;

