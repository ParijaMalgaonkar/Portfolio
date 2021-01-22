import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 68px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-bottom: 70px;
    }
`

export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 48px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin-bottom: 50px;
        
    }
`

export const HeroP = styled.p`
    color: #fff;
    margin-top: 24px;
    fony-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`

export const DownloadButton = styled.div`
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #de7863;
    color: black;
    border-radius: 50px;
    font-size: 20px;

    :hover {
        transform: scale(1.1);
        transition: all ease 0.3s;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;

    }
`