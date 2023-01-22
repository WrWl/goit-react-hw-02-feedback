import propTypes from 'prop-types';
import { Message } from 'components/notification/notification-styled'

const Notification = ({message}) => {
    return <Message>{message}</Message>

}
 



Notification.propTypes = {
    message: propTypes.string.isRequired,
}

    export default Notification