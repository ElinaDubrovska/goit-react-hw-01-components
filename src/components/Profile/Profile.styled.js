import styled from 'styled-components';

export const ProfileBox = styled.div`
width: 300px;
margin-left: auto;
margin-right: auto;
margin-top: 0;
margin-bottom: 0;

background-color: fff;
border: 2px solid gray;
border-radius: 5px;
`;
export const UserInfo = styled.div`
margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  margin-left: auto;
  margin-right: auto;

`;
export const UserImage = styled.img`
    width: 200px;
    margin-bottom: 25px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
`;

export const UserText = styled.p`
font-family: serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;