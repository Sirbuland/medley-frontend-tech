import { device } from "@/styles/breakpoints.style";
import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  width: 200px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:hover {
    border-color: #555;
  }

  @media ${device.mobileM} { 
    width: auto;
    margin: 0;
  }
`;