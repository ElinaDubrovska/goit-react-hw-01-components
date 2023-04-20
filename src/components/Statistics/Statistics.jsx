import PropTypes from 'prop-types';
import { StatisticsElement, StatisticsList, StatsTitle, StatisticsWraper } from "./Statistics.styled"
import { StatsCard } from "./StatsCard"

export const StatsSection = ({title, data}) =>{
    return(
        <StatisticsWraper>
          {title && <StatsTitle>{title}</StatsTitle>}
      <StatisticsList>
            {data.map(item=>(
            <StatisticsElement key={item.id}>
                <StatsCard item={item}/>
       </StatisticsElement>))}
        </StatisticsList>
        </StatisticsWraper>
    )
}
StatsSection.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };