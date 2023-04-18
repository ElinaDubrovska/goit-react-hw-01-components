import PropTypes from 'prop-types';
import { UserImage, UserInfo, UserText} from './Profile.styled'


export const Profile = (
  {user:{avatar, username,tag,location}}
) => {
    return (
    
  <UserInfo>
    <UserImage
      src={avatar}
      alt="User avatar"
    />
    <UserText>{username}</UserText>
    <UserText>{tag}</UserText>
    <UserText>{location}</UserText>
  </UserInfo>
  );
}

Profile.propTypes = {
user: PropTypes.shape({
  avatar: PropTypes.string.isRequired,
   username:PropTypes.string.isRequired,
   tag:PropTypes.string.isRequired,
   location:PropTypes.string.isRequired,
}).isRequired
}