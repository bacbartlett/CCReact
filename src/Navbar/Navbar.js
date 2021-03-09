import React, { useEffect, useRef, useState } from "react"
import "./Navbar.css"
import DropDown from "./DropDown/DropDown"
import { useHistory } from "react-router"

const Navbar = (props) => {

    const history = useHistory()

    const generateLink = (link) => {
        return () => {
            history.push(link)
        }
    }

    const group1 = useRef(null)
    const group2 = useRef(null)
    const ABOUTUS = useRef(null)

    const listForDropDown=[]
    listForDropDown.push({
        title: "OUR TEAM",
        link: "/team"
    })
    listForDropDown.push({
        title: "OUR MISSION AND GOALS",
        link: "/mission"
    })
    listForDropDown.push({
        title: "CITY CONSULTING SERVICES",
        link: "/city-consulting-services"
    })
    listForDropDown.push({
        title: "CAREERS",
        link: "/careers"
    })
    listForDropDown.push({
        title: "IN THE NEWS",
        link: "/news"
    })
    listForDropDown.push({
        title: "FAQS",
        link: "/faqs"
    })

    const [AboutUsHover, setAboutUsHover] = useState(false)
    const [DropDownHover, SetDropDownHover] = useState(false)
    const [DropDownActive, SetDropDownActive] = useState(false)

    const aboutUsHover = () => {setAboutUsHover(true)}
    const dropDownHover = () => {SetDropDownHover(true)}
    const dropDownActive = () => SetDropDownActive(true)

    const deactiveAboutUsHover = () => {setAboutUsHover(false)}
    const deactiveDropDownHover = () => {SetDropDownHover(false)}
    const deactiveDropDown = () => SetDropDownActive(false)

    useEffect(()=>{
        if(AboutUsHover || DropDownHover){
            ABOUTUS.current.classList.add("navBar__pseduoHover")
            dropDownActive()
        } else{
            ABOUTUS.current.classList.remove("navBar__pseduoHover")
            deactiveDropDown()
        }
    }, [aboutUsHover, DropDownHover])

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
                <a onClick={generateLink("/")} className="navBar__link navBar__item">HOME</a>
                <a onClick={generateLink("/rhub")} className="navBar__link navBar__item">OUR MODEL</a>
                <a onClick={generateLink("/about-us")} className="navBar__link navBar__item" onMouseEnter={aboutUsHover} onMouseLeave={deactiveAboutUsHover} ref={ABOUTUS}>ABOUT US</a>
                {DropDownActive ? <DropDown list={listForDropDown} left={ABOUTUS.current.getBoundingClientRect().left} top={ABOUTUS.current.getBoundingClientRect().bottom} mouseEnter={dropDownHover} mouseLeave={deactiveDropDownHover} /> : null}
            </div>
            <img onClick={generateLink("/")} className="navBar__logo navBar__item" src="Cambium_Logo_Green.jpg" />
            <div onMouseEnter={generateHover(group2)} onMouseLeave={generateNotHover(group2)} className="navBar__group navBar__group2" ref={group2}>
                <a onClick={generateLink("/pre-order")} className="navBar__link navBar__item">PRE ORDER</a>
                <a onClick={generateLink("/contact-us")} className="navBar__link navBar__item">CONTACT US</a>
            </div>
            <a className="navBar__link navBar__item">CART FILLIN</a>
        </div>
    )
}

export default Navbar