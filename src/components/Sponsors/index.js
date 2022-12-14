import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Header from "../Header";
import './styles.css';

const SponsorsContainer = styled(Container)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  justify-content: center;
`
const Title = styled.h2`
  text-align: center;
  margin-top: 52px;
  margin-bottom: 0px;
  letter-spacing: -2px;
  color: cyan !important;
  font-size: 44px !important;
  font-family: "Montserrat", sans-serif;
`
const Subtitle = styled.h3`
  text-align: center;
  margin-top: 40px;
  letter-spacing: -2px;
  color: white;
  font-size: 36px;
  font-family: "Moneterrat", sans-serif;
`
const StyledImg = styled.img`
  height: 120px !important;
`

export default function Sponsors() {
  const [windowHeight, setWindowHeight] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", updateDimensions);
  })

  useEffect(() => {
    fetch("https://admin.concetto.in/sponsors/", { mode: 'cors' }).then(res => res.json()).then(data => setData(data));
  }, []);


  return (
    <>
      <Header />
      <section className="sponsors" style={{ minHeight: { windowHeight } + 'px' }}>
        <Title>Sponsors</Title>
        <Subtitle>Major Sponsors </Subtitle> 
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Major Sponsors"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Skill Development Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Skill Development Partner"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Event Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Event Sponsor"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Food Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Food Partner"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Education Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Education Sponsor"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Hospitality Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Hospitality Partner"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Technology Service Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Technology Service Partner"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>
        <Subtitle>Books Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              if(sponsor.category == "Books Partner"){
                return <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
              }
            })}
          </div>
        </SponsorsContainer>

      </section>
    </>
  )
}