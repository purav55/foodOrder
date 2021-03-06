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
      <h1 className='footer-heading'>FOODFAME</h1>
      <div className='footer-blocks'>
        {
         FooterData.map((data,i)=>{
           return(
            <div>
            <h1>{data.heading},{i.heading}</h1>
            {
              data.items.map((data,i)=>{
                return(
                  <React.Fragment key={i}>
                  <p>{data}</p>
                  </React.Fragment>
                )
              })
            }
            </div>
           )
         }) 
        }
        <div>
        <h1>FOODNETS</h1>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <WhatsAppIcon/>
        <div>
        <img className='play-icons' src="./assets/image/apple.svg" alt='playstoreicon' />
        </div>
        <div>
        <img className='play-icons' src="./assets/image/andriod.png" alt='playstoreicon' />
        </div>
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Footer