import React from 'react'
import WorkshopCard from '../../components/WorkshopCard/WorkshopCard'
import WorkshopCatalogue from '../../components/WorkshopCatalogue/WorkshopCatalogue'
import Up from "/src/components/Up/Up";

const WorkshopView = () => {
  return (
    <>
        <WorkshopCard/>
        <WorkshopCatalogue/>
        <Up/>
    </>
    
  )
}

export default WorkshopView;