import './navbar.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForumIcon from '@mui/icons-material/Forum';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h2 style={{alignSelf : 'center'}}>Configuration</h2>
      <div>
      <input style={{width : '500px' , padding : '10px' , borderRadius : '25px' , border : '0px', paddingLeft:'50px' }} id="icon" />
      </div>
      <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : '25px'}}>
        <GitHubIcon className='Haver' style={{width : '75px'}}/>
        <AccessTimeIcon className='Haver' style = {{width : '75px'}}/>
        <ForumIcon className='Haver' style = {{width : '75px'}}/>
        <NotificationsNoneIcon className='Haver' style = {{width : '75px'}}/>
        <InsertPhotoIcon className='Haver' style = {{width : '75px'}}/>
      </div>
    </div>
  )
}

export default Navbar