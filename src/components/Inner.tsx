import ShareIcon from '@mui/icons-material/Share'
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import './inner.css'
const Inner = () => {
  return (
    <div>
      <div className = 'config-nav'>
        <div style={{display : 'flex' , justifyContent : 'space-between' , padding : '10px' , margin : '10px'}}>
          <button className='Haver' style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , backgroundColor : '#32C5FF' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><DashboardIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Dashboard</button>
          <button className='Haver' style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><AssessmentIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Report</button>
          <button className='Haver' style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><SettingsIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Settings</button>
        </div>
        <div style={{display : 'flex' , alignItems : 'center' , marginRight : '20px'}}>
          <ShareIcon className='Haver' style={{width : '75px'}}/>
          <button className='Haver' style={{height : '40px' , fontSize : '17px' , width : '164px' , borderRadius : '25px' , border : '0px' , margin : '5px' , backgroundColor : '#32C5FF'}}><span style={{fontSize : '20px'}}>+</span> Import Report</button>
        </div>
      </div>
    </div>
   
  )
}

export default Inner
