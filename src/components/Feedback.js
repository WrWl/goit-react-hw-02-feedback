import React, {Component} from "react"
import FeedbackOptions from "./feedbackOptions/feedbackOptions"
import Statistics from "./statistics/statistics"
import SectionTitle from "./section/section"
import Notification from "./notification/notification"
class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    feedbackCounter = (e) => this.setState(prevState => {
        const { name } = e.target
        return { [name]: prevState[name] + 1 };
    })
      
    
    
    render() {
        const { good, neutral, bad } = this.state
        const total = good + neutral + bad
        const positivePercentage = Math.round((good/total)*100)
        return (
          
            <>
                <SectionTitle title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.feedbackCounter } />
                </SectionTitle>
                
                {total > 0 ? (
                    <SectionTitle title="Statistics">
                        <Statistics  good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
                    </SectionTitle>) :
                    (<Notification message="There is no feedback"/>)}
            </>
        )
    };

}
export default Feedback