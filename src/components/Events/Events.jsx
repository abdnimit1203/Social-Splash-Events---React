import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';

const Events = ({events}) => {
    console.log(events);
    return (
        <div className='grid  grid-cols-1 gap-6 md:gap-8 overflow-x-hidden'>
           {
            events.map((event,id)=> <EventCard key={id} event={event}></EventCard>)
           }
        </div>
    );
};
Events.propTypes = {
    events: PropTypes.array.isRequired
}
export default Events;