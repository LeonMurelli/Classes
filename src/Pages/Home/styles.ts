import styled from "styled-components";
import Background from "../../Assets/UDF-fachada.jpeg";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  z-index: -5;
`;
