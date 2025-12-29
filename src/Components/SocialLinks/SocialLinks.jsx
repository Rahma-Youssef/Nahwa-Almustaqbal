import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';


const SocialLinks = () => {
    return (
        <StyledWrapper >
            <div className="card  md:w-50 w-40 md:h-12.5 h-10 mx-auto" >
                <span className='md:text-xl text-lg'>Social Media</span>
                <a className="social-link" target='_blank' href="https://youtube.com/@nahwa.contracting?si=LbjcDh93xFUhF0sP" >
                    <Icon icon="logos:youtube-icon" className='md:w-7 md:h-7 w-5 h-5' />
                </a>
                <a className="social-link" target="_blank" href="https://www.instagram.com/invites/contact/?igsh=897m695z8omt&utm_content=z0saglg‎‏">
                    <Icon icon="skill-icons:instagram" className='md:w-7 md:h-7 w-5 h-5' />
                </a>
                <a className="social-link" target="_blank"  href="https://www.tiktok.com/@nahwa.contracting?_t=ZS-8ydTuZmXHNP&_r=1">
                    <Icon icon="logos:tiktok-icon" className='md:w-7 md:h-7 w-5 h-5'  />
                </a>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  :where(.wp-site-blocks *:focus) {
    outline-width: 2px;
    outline-style: solid;
  }
  .card svg {
    height: 25px;
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7e7e7;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    /* height: 50px;
    width: 200px; */
  }

  .card::before,
  .card::after {
    position: absolute;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: 0.25s linear;
    z-index: 1;
  }
  .card::before {
    content: "";
    left: 0;
    justify-content: flex-end;
    background-color: #C49542;
  }

  .card::after {
    content: "";
    right: 0;
    justify-content: flex-start;
    background-color: #2A485E;
  }

  .card:hover {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .card:hover span {
    opacity: 0;
    z-index: -3;
  }

  .card:hover::before {
    opacity: 0.5;
    transform: translateY(-100%);
  }

  .card:hover::after {
    opacity: 0.5;
    transform: translateY(100%);
  }

  .card span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    font-family: "Fira Mono", monospace;
    /* font-size: 24px; */
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
  }

  .card .social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    color: whitesmoke;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
  }

  .card .social-link svg {
    text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
    transform: scale(1);
  }

  .card .social-link:hover {
    background-color: rgba(249, 244, 255, 0.774);
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }`;

export default SocialLinks;
