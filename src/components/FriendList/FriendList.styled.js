import styled from 'styled-components';

export const FriendList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
list-style: none;
width:340px;
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;

`;

export const StatusIsOnline = styled.span`
  > svg {
    color: green;
  }
`;
export const StatusIsOffline = styled.span`
  > svg {
    color: red;
  }
`;

export const FriendAvatar = styled.img`
width: 48px;
height: 48px;
`;
export const FriendItem = styled.div`
display:flex;
padding: 20px 20px;
border: solid 2px gray;
width: 300px;
margin: 0px auto;
display: flex;
align-items: center;

`;