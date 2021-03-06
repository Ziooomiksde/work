import React from 'react'

import AnswerFromDoctor from './AnswerFromDoctor';
const AnswerFromDoctorDetails = ({odp,wizyty}) => {

  const dostanWizyte = (id) => !!wizyty && wizyty.find(item=>item.id===id); 
  
  
  

  
  return (
    <div>
      {!!odp && odp.map((item) => <AnswerFromDoctor wizyta={dostanWizyte(item.id)} key={item.id} asd={item} />)}
    </div>
  );






  
}




export default AnswerFromDoctorDetails;

