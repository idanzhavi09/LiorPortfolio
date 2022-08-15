import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        } , 3000)
        return console.log("");
    } , [])

    return(
            <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass = {letterClass}
                            strArray={['C' , 'o' , 'n' ,'t' , 'a' , 'c' , 't' , ' ' , 'M' , 'e']}
                            idx={15}/>
                    </h1>
                    <p>
                        I am interseted in Mostly FullStack Web Development opportunties But i keep an open mind,
                        if you have any question,Don't hesitate to contact me via the form below. 
                    </p>
                    </div>
                    <div className='contact-form'>
                        <form>
                                <ul>
                                    <li className='half'> <input type="text" name="name" placeholder='Name' required /> </li>
                                    <li className='half'> <input type="email" name="email" placeholder='Email' required /> </li>
                                    <li>
                                        <input placeholder="Subject" type ="text" name="subject" required />
                                    </li>
                                    <li>
                                        <textarea placeholder="Message" name="Message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value="SEND"/>
                                    </li>
                                </ul>
                        </form>
                    </div>
                

            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;