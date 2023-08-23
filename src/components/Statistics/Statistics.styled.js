import styled from 'styled-components';

export const StatsBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const StatsElem = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-weight: 600;
  color: #4d5ae5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px 16px;
`;

export const StatsFeedback = styled.div`
  display: flex;
  gap: 20px;
`;

export const StatsCounter = styled.div`
  display: flex;
  gap: 20px;
`;

export const Notification = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.36;
  padding: 24px;
  color: #404bbf;
`;
