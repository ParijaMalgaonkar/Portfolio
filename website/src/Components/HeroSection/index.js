import React from 'react'
// import video from '../../Videos/ColorfulVideo.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, DownloadButton, HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello!</HeroH1>
                <br />
                <HeroH2>Something magnificient is under construction!<br />
                Meanwhile, take a look at my resume</HeroH2>
                <HeroBtnWrapper>
                    <a style={{textDecoration: "none"}} href="../../ParijaMalgaonkarResume.pdf" download> 
                        <DownloadButton>
                            Download Resume
                        </DownloadButton>
                    </a>
                
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
