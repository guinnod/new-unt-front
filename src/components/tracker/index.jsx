import './tracker.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { CardDark } from '../cards/card-dark';
export const Tracker = ({ days, text }) => {
    return (
        <CardDark>
            <div className='tracker__text'>
                {text}:
            </div>
            <div className='tracker__anchor'>
                <CalendarHeatmap
                    startDate={new Date('2022-09-01')}
                    endDate={new Date('2023-06-01')}
                    values={days ?? []} />
            </div>
        </CardDark>
    );
};