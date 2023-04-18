import user from "../user.json";
import { Profile } from "./Profile/Profile";

import { Stats } from "./Profile/Stats";
import { ProfileBox } from "./Profile/Profile.styled";

import data from "../data.json";
import { StatsSection } from "./Statistics/Statistics";

import friends from "../friends.json";
import {  FriendMarkup } from "./FriendList/FriendList";

import transactions from "../transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    
    <><ProfileBox>
      <Profile user={user} />
      <Stats user={user} />
    </ProfileBox>
    <StatsSection data={data} />
    <FriendMarkup friends={friends} />
     <TransactionHistory items={transactions} />;
    </>

  );
};
