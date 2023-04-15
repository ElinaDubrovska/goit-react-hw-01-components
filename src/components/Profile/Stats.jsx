import { StatsItem, StatsList, StatsName, StatsValue } from "components/Stats.styled";

export const Stats = (props) => {
    return(
       <StatsList>
    <StatsItem>
      <StatsName>Followers</StatsName>
      <StatsValue>{props.user.stats.followers}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsName>Views</StatsName>
      <StatsValue>{props.user.stats.views}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsName>Likes</StatsName>
      <StatsValue>{props.user.stats.likes}</StatsValue>
    </StatsItem>
  </StatsList>

    )
};
