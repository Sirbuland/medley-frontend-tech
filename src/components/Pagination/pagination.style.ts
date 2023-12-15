import { device } from '@/styles/breakpoints.style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media ${device.mobileM} { 
    margin: 20px;
  }
`;

export const Button = styled.button<{ isActive?: boolean }>`
  padding: 8px 16px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#e0e0e0' : '#fff')};
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;