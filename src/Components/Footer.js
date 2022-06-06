import React from 'react'
import FooterData from './../utils/FooterData.json'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer-maindiv'>
      <div className='footer'>
      <h1 className='footer-heading'>foddie</h1>
      <div className='footer-blocks'>
        {
         FooterData.map((data,i)=>{
           return(
            <div>
            <h1>{data.heading}</h1>
            {
              data.items.map((data,i)=>{
                return(
                  <p>{data}</p>
                )
              })
            }
            </div>
           )
         }) 
        }
        <div>
        <h1>SOCIAL LINKS</h1>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <WhatsAppIcon/>
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Footer