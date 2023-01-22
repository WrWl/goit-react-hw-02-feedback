import propTypes from 'prop-types';
import {Btn, BtnHolder} from 'components/feedbackOptions/feedbackOptions-styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
            <BtnHolder>
                {options.map(option => {
                return <Btn key={option} type="button" name={option} onClick={(e) => onLeaveFeedback(e)}>{ option}</Btn>
                })}
            </BtnHolder>
            
        )
    }


FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
}



    export default FeedbackOptions