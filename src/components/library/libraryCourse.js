import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod sapien lacus, sed ultrices enim mollis a. Aliquam finibus eleifend ante, quis aliquam justo efficitur vitae.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;