import { UserImage, UserInfo, UserText} from './Profile.styled'


export const Profile = (props) => {
    return (
    
  <UserInfo>
    <UserImage
      src={props.user.avatar}
      alt="User avatar"
    />
    <UserText>{props.user.username}</UserText>
    <UserText>{props.user.tag}</UserText>
    <UserText>{props.user.location}</UserText>
  </UserInfo>
  );


}