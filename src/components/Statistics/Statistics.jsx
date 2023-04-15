import { StatisticsElement, StatisticsList, StatsTitle, StatisticsWraper } from "./Statistics.styled"
import { StatsCard } from "./StatsCard"

export const StatsSection = ({data}) =>{
    return(
        <StatisticsWraper>
        <StatsTitle>Upload stats</StatsTitle>
      <StatisticsList>
            {data.map(item=>(
            <StatisticsElement key={item.id}>
                <StatsCard item={item}/>
       </StatisticsElement>))}
        </StatisticsList>
        </StatisticsWraper>
    )
}
