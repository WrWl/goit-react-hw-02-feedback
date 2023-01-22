import propTypes from 'prop-types';
import { SectionWraper, SectionTitle } from 'components/section/section-styled'



const Section = ({title, children}) => {
    return (
            <SectionWraper>
                <SectionTitle>{ title}</SectionTitle>
                {children}
            </SectionWraper> 
    )
}



Section.propTypes = {
title: propTypes.string.isRequired
}

export default Section