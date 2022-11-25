import React from 'react';

function WorkList({workList}) {
  return (
    <ul>
      {
        workList.map((works, index) => <li key={index}>{works}</li>)
      }
    </ul>
  );
}

export default WorkList;