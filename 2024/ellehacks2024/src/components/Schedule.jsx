import React from 'react'
import './schedule.css'
import { schedules } from './schedules';
import Card from 'react-bootstrap/Card';
import '@fontsource/space-grotesk'
import {v4 as uuidv4} from 'uuid';

const Schedule = () => {
    
    return (
        <React.Fragment className='schedule'>
            <h1 className='title sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold'>Schedule</h1>
            <div className='schedule-cards'>
                <div className='__row'>
                    {schedules.map((schedule) => {
                        return (
                            <div className='__col' key={uuidv4()}>
                            <Card>
                                <Card.Body style={{ paddingBottom: '63px' }}>
                                    <Card.Text className='date'>{schedule.date}</Card.Text>
                                        <Card.Text className='day'>{schedule.dayOfWeek}</Card.Text>
                                        {schedule.activities.map((activity) => {
                                            return (
                                                <div className={`agenda ${activity.isGold ? 'gold-background' : ''}`} key={uuidv4()}>
                                                    <div className='agenda-item'>
                                                        <div className='time'>
                                                            <p className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>{activity.time}</p>
                                                        </div>
                                                        <div className='agenda-time-location'>
                                                            <div className='activity-name'>
                                                                <p className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>{activity.activityName}</p>
                                                            </div>
                                                            <div className='location'>
                                                                <p className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>{activity.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );})}
                                </Card.Body>
                            </Card>
                        </div>
                        );})}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Schedule