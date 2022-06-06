import React, { useEffect, useRef, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Loader from '../Components/Loader';
import Images from './../utils/Images.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Questions from './../utils/Questions.json'
import ImageCarasoul from './../utils/ImageCarasoul.json'
import Cards from './../utils/Cards.json'
import Services from './../utils/Services.json'


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= Images.length) {
      setLoading(false);
    }
  };


  const handleClick = (index) => {
    setShow(show => !show)
    setId(index)
  }


  return (
    <>
      <div className='home-maindiv'>
        <SimpleImageSlider
          width={896}
          height={504}
          images={ImageCarasoul}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
        />

      </div>
      <div style={{ display: loading ? "block" : "none" }}>Loading images,</div>
      <div style={{ display: loading ? "none" : "grid" }} className='grid-show'>
        {
          Images.map((image) => {
            return (
              <div key={image.url}>
                <img key={image.url} src={image.url} onLoad={imageLoaded} alt='image' />
              </div>
            )
          })
        }
      </div>
      <div className='text-food'>
        <div className='text-food-div'>
          <div className='text-food-div-data'>
            {Services.map((data,i) => {
              return (
                <div key={i}>
                  <img src={data.image} />
                  <h1>{data.title}</h1>
                  <p>{data.service}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      <div className='food-card'>
        {
          Cards.map((data,i) => {
            return (
              <>
                <div key={i}>
                  <img src={data.image} alt='card' />
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </>
            )
          })
        }
      </div>



      <div className='explore-questions'>
        <div className='explore-questions-main-div'>
          <h1>Explore options near me </h1>
          {
            Questions.map(((que, index) => {
              return (
                <>
                  <div className='explore-questions-main-div-item'>
                    <div className='questions-div' >
                      <p key={index}>
                        {que.question}
                      </p>
                      <ExpandMoreIcon onClick={() => handleClick(index)} />
                    </div>
                    {
                      show && index === id ? <div className='answers'>
                        {
                          que.answer.map((q,i)=>{
                            return(
                              <React.Fragment key={i}>
                                {q}
                              </React.Fragment>
                            )
                          })
                        }
                      </div>
                        :
                        null
                    }

                  </div>

                </>
              )
            }))
          }

        </div>

      </div>


    </>
  )
}

export default Home