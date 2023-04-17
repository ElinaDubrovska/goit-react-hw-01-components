import { FriendCard } from "./FriendCard";
import { FriendList } from "./FriendList.styled";

export const FriendMarkup =({friends}) => {
    return(
<FriendList>
 {friends.map(friend=>(
    <li key={friend.id}>
        <FriendCard friend ={friend}/>
    </li>
 ))}
</FriendList>
    );
}