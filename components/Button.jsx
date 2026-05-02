import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
  
        <button onClick={() => window.location.href = "mailto:manurirasara812@gmail.com"}>

 Comment
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   border: none;
   color: #fff;
   background-image: linear-gradient(30deg, #0f0f0f, #2b2b2b);
   border-radius: 20px;
   background-size: 100% auto;
   font-family: inherit;
   font-size: 12px;
   padding: 0.6em 1.5em;
  }

  button:hover {
   background-position: right center;
   background-size: 200% auto;
   -webkit-animation: pulse 2s infinite;
   animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
   0% {
    box-shadow: 0 0 0 0 #ffffff;
   }

   70% {
    box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
   }

   100% {
    box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
   }
  }`;

export default Button;
