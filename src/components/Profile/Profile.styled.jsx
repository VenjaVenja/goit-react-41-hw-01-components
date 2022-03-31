import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
    margin: 0 auto;
    width: 280px;
    border: 1px solid #5d5d5d;
    border-radius: 2px;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1);
    transition: transform 500ms;
  
  :hover{
    cursor: pointer;
    transform: scale(0.97);
  }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
`;

export const Avatar = styled.img`
    width: 150px;
    height: auto;
    border: 3px solid #5d5d5d;
    border-radius: 50%;
    margin-bottom: 30px;
`;

export const Name = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    color: #5d5d5d;
`;

export const Location = styled.p`
    margin-bottom: 30px;
    color: #5d5d5d;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    text-align: center;
    padding: 20px;
    border: 1px solid #a0a0a0;
    background-color: #d4def589;
`;

export const Label = styled.span`
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 5px;
`;

export const Quantity = styled.span`
    font-weight: 900;
`;
