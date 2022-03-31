import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 2px;
    margin-bottom: 15px;
    width: 300px;
    padding: 5px 15px;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1);
    transition: transform 500ms;

    :hover{
        cursor: pointer;
        transform: scale(0.97);
    }
`;

export const Status = styled.span`
    margin-right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const Avatar = styled.img`
    margin-right: 15px
`;

export const Name = styled.p`
    font-size: 40px
`;