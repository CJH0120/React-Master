import'../../../assets/fix/header.css';
import React from 'react';

const Header = () => {
   
   return(
        <div>
        <div className="header_wrap">
                <div className='header_top'>
                        <form>
                              
                             <label className='serchlabel'><img src='https://cdn.discordapp.com/attachments/594494873709707275/962039786250600528/unknown.png'/>
                             </label>
                             <input
                             className='searchInput'
                             />   
                            
                        </form>

                <div className='userProfile'>
                
                <div>
                        <img src='https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.99c612eb.jpg'/>
                        </div>
                <div  className='userProfileName'>
                <span>
                유저네임
                </span>
                </div>


                
                </div>  
                 </div>       
        </div>
    </div>
   )
}
export default Header;