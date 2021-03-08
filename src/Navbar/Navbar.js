import React, { useRef } from "react"
import "./Navbar.css"

const Navbar = (props) => {
    const group1 = useRef(null)
    const group2 = useRef(null)

    const generateHover = (ref) => {
        return () => {
            ref.current.childNodes.forEach(el=>{
                el.classList.add("navBar__activeGroup")
            })
        }
    }

    const generateNotHover = (ref) => {
        return ()=>{
            ref.current.childNodes.forEach(el=>{
                el.classList.remove("navBar__activeGroup")
            })
        }
    }

    return(
        <div className="navBar">
            <div onMouseEnter={generateHover(group1)} onMouseLeave={generateNotHover(group1)} className="navBar__group navbar__group1" ref={group1}>
                <a className="navBar__link navBar__item">HOME</a>
                <a className="navBar__link navBar__item">OUR MODEL</a>
                <a className="navBar__link navBar__item">ABOUT US</a>
            </div>
            <img className="navBar__logo navBar__item" src="Cambium_Logo_Green.jpg" />
            <div onMouseEnter={generateHover(group2)} onMouseLeave={generateNotHover(group2)} className="navBar__group navBar__group2" ref={group2}>
                <a className="navBar__link navBar__item">PRE ORDER</a>
                <a className="navBar__link navBar__item">CONTACT US</a>
            </div>
            <a className="navBar__link navBar__item">CART FILLIN</a>
        </div>
    )
}

export default Navbar