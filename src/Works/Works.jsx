import Anime from "../Image/girl.png"
import WorksCard from "./WorksCard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Works.css'

const Works = () => {
  return (
    <div className="works">
      <h1>How it works</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rem quas
        cupiditate enim repudiandae incidunt, fuga, molestias velit mollitia <br />
        maxime, quaerat dicta. Voluptas doloribus molestias modi fugiat, veniam
        nobis natus quos!
      </p>
      <div className='works-container'>
        <div className="works-left">
          <WorksCard 
          icon={<AccountCircleIcon style={{color:'rgb(70, 191, 238)'}}/>}
          title='perspiciatis unde omnis'
          content='create an account to login' style={{color:'rgb(70, 191, 238)'}} />
          <div className="blur"></div>
          <WorksCard 
          icon={<AccountCircleIcon style={{color:'rgb(70, 191, 238)'}} />}
          title='perspiciatis unde omnis'
          content='create an account to login'/>
          <WorksCard 
          icon={<AccountCircleIcon style={{color:'rgb(70, 191, 238)'}}/>}
          title='perspiciatis unde omnis'
          content='create an account to login'/>
        </div>
        <div className='works-right'>
         {/* <div className="blur2"></div> */}
          <img src={Anime} alt="" style={{height:'100vh'}} />
        </div>
      </div>
    </div>
  );
};

export default Works;
