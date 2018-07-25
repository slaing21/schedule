import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../Action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-arrow">
                    <label className="library-course__title">Problem Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action"/>
                {Icon('fas fa-plus-circle', 'library-course__action')}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod sapien lacus, sed ultrices enim mollis a. Aliquam finibus eleifend ante, quis aliquam justo efficitur vitae.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;