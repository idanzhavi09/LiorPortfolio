import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect , useState } from 'react';

import { faAngular , faHtml5 , faCss3, faReact ,faJsSquare ,faGit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from 'react-loaders';
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        } , 3000)
        return console.log("");
    } , [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A' , 'b' , 'o' ,'u' , 't' , ' ' , 'M' , 'e']}
                    idx={15}
                    />
            </h1>
            <p>A 3rd year Bsc.CS Student and a highly motivated programmer</p>
            <p>I'm Fullstack developer I'm a 3rd year Bsc computer science student, I'm on a journey to learn and develop, using a variety of technological stacks, I have created different project for both my degree and out of self interest, I seek to join the industry in order to gain expiriance and learn from people, i'm highly passionate about Programming and for this reason I believe that I can overcome almost every issue that might arrise,</p>
            <p>When i put my mind into something i'll always give my 150% into it , i inspire to learn from people in the industry with more expiriance,
                always keeping an open mind and willing to put in the effort to improve
                </p>      
                  
                  
            </div>

            <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;