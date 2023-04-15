import { Profile } from "./Profile/Profile";
import user from "../user.json"
import { Stats } from "./Profile/Stats";
import { ProfileBox } from "./Profile/Profile.styled";

import data from "../data.json"
import { StatsSection } from "./Statistics/Statistics";

export const App = () => {
  return (
    
    <><ProfileBox>
      <Profile user={user} />
      <Stats user={user} />
    
    </ProfileBox>
    <StatsSection data={data}/>
    </>

  );
};
