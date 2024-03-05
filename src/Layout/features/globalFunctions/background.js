import styled from "styled-components";

export const Section = styled.section`
  background: radial-gradient(circle at 1.77% 47.6%, #101824, transparent 100%), radial-gradient(circle at 99.11% 63.1%, #3a7bd5, transparent 100%),
  radial-gradient(circle at 50% 50%, #0a0a0a, #0a0a0a 100%);
  width: 100%;
  background-size: 3000px 3000px;

  animation: identifier 20s ease infinite;

  @keyframes identifier {
    0% {
      background-position: 0% 0%;
    }
    20% {
      background-position: 0% 100%;
    }
    40% {
      background-position: 100% 0%;
    }
    60% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;