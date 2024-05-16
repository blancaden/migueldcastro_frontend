import React from 'react'

const WorkshopDetail = () => {

  const location = useLocation();
  const talleres = location.state.talleres;

  return (

    <>
    <h1>ESTO ES WorkshopDetail</h1>^
    <p> </p>talleres
    </>
  )
}

export default WorkshopDetail