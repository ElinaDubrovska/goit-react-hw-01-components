import { Profile } from "./Profile/Profile";
import user from "../user.json"
import { Stats } from "./Profile/Stats";
import { ProfileBox } from "./Profile/Profile.styled";

export const App = () => {
  return (
    <ProfileBox>
      <Profile user={user}/>
      <Stats user={user}/>
    </ProfileBox>
  )
};
