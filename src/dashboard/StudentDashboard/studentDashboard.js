import React from 'react'
import StudentContainer from '../../Containers/studentContainer/studentContainer'
import {Student_Data} from '../../Data/Student.data'
import './studentDashboard.css'


function StudentDashboard(props) {
    return (
        <div className="student__dashboard">
        {Student_Data.map((student)=>
        (
            <div className="student__containera"  key={student.id}>
            <StudentContainer
            image={student.image}
            name={student.name}
            description={student.description}
            button="View Profile"
            />
            
            </div>
        ))}
        
    </div>
    )
}

export default StudentDashboard
