import React from 'react';

export function WorkList({workList}) {
  return (
   <ul>
     {
       workList.map((works, index) => <li key={index}>{works}</li>)
     }
   </ul>
  )
}

