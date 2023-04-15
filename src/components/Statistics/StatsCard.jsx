export const StatsCard =({item}) =>{
    return(
        <>
        <span>{item.label}</span>
        <span>{item.percentage}%</span></>   
    )
}