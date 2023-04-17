import {BsCircleFill} from 'react-icons/bs';
import { FriendAvatar, FriendItem, StatusIsOffline, StatusIsOnline } from './FriendList.styled';

export const FriendCard = ({friend}) =>{
    return(
        <FriendItem>
        {friend.isOnline ? (
        <StatusIsOnline>
          <BsCircleFill size={16} />
        </StatusIsOnline>
      ) : (
        <StatusIsOffline>
          <BsCircleFill size={16} />
        </StatusIsOffline>
      )}
        <FriendAvatar
            src={friend.avatar}
            alt="User avatar" />
            <p>{friend.name}</p>
            </FriendItem>

    )
}