import { device } from "@/styles/breakpoints.style";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto; 
  max-width: 1300px;
`;

export const InnerContainer = styled.div`
  margin: 0 auto; 
  max-width: 1250px;
`;

export const Heading = styled.h2`
  font-size: 40px;
  margin-top: 20px;
  font-weight: 600;
`

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;

  @media ${device.mobileM} { 
    padding: 10px;
    flex-direction: column;
    gap: 12px;
  }
`
