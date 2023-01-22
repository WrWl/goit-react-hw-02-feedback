import propTypes from 'prop-types';
import { StatItem, StatItemHolder, StatisticsChild } from './statistic-styled'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StatisticsChild>
                <StatItemHolder>
                    <StatItem>Good: {good}</StatItem>
                    <StatItem>Neutral: {neutral}</StatItem>
                    <StatItem>Bad: {bad}</StatItem>
                </StatItemHolder>
                <StatItemHolder>
                    <StatItem>Total: {total}</StatItem>
                    <StatItem>Positive feedback: {Math.round(positivePercentage)}%</StatItem>
                </StatItemHolder>
            </StatisticsChild>
        </>
    )
};
Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage:propTypes.number.isRequired
}
export default Statistics