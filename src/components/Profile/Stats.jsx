import PropTypes from 'prop-types';
import { StatsItem, StatsList, StatsName, StatsValue } from "components/Stats.styled";

export const Stats = ({user:{stats:{followers,views,likes}}}) => {
    return(
       <StatsList>
    <StatsItem>
      <StatsName>Followers</StatsName>
      <StatsValue>{followers}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsName>Views</StatsName>
      <StatsValue>{views}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsName>Likes</StatsName>
      <StatsValue>{likes}</StatsValue>
    </StatsItem>
  </StatsList>

    )
};

Stats.propTypes = {
  user: PropTypes.shape({stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
    
  })})
  .isRequired
  }