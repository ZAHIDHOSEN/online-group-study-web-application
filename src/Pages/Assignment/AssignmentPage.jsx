import React from 'react';
import SimpleAssignments from '../../Components/SimpleAssignments';
import AssignmentBanner from '../../Components/AssignmentBanner/AssignmentBanner';

const AssignmentPage = () => {
    return (
        <div>
       <div className='my-5'>
       <AssignmentBanner></AssignmentBanner>
       </div>
        <SimpleAssignments></SimpleAssignments>
        </div>
    );
};

export default AssignmentPage;