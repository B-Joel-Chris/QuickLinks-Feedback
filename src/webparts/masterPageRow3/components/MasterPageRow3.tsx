import * as React  from 'react'
import './MasterPageRow3.scss'
import Training from './Trainings'
import Tasks from './Tasks'
import OpinionPoll from './Opinion Poll'

const MasterPageRow3 = () => {
  return (
    <div className="Containers3" >
    <div><Training/></div>
    <div><Tasks/></div>
    <div><OpinionPoll/></div>
    </div>
  )
}

export default MasterPageRow3