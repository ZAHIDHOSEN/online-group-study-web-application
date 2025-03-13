import React from 'react';
import SimpleAssignments from '../../Components/SimpleAssignments';
import AssignmentBanner from '../../Components/AssignmentBanner/AssignmentBanner';

const AssignmentPage = () => {
    return (
        <div>
       <div className='my-5'>
       <AssignmentBanner></AssignmentBanner>
       </div>
        <div className='max-w-7xl mx-auto'>
        <SimpleAssignments></SimpleAssignments>
        </div>
        </div>
    );
};

export default AssignmentPage;