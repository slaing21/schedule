import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './ScheduleCourse';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule_title">My Schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule;