import { StatisticsElement, StatisticsList, StatsTitle } from "./Statistics.styled"
import { StatsCard } from "./StatsCard"

export const StatsSection = ({data}) =>{
    return(
        <section>
        <StatsTitle>Upload stats</StatsTitle>
      <StatisticsList>
            {data.map(item=>(
            <StatisticsElement key={item.id}>
                <StatsCard item={item}/>
       </StatisticsElement>))}
        </StatisticsList>
        </section>
    )
}
