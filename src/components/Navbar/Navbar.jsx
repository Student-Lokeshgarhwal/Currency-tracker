import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext';
import { PiCurrencyInrBold } from "react-icons/pi"
import { MdOutlineEuroSymbol } from 'react-icons/md';
import { IoLogoUsd } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar() {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event)=>{
        switch(event.target.value){
            case "usd" : {
                setCurrency({name: "usd" , symbol: <IoLogoUsd />})
                break;
            }
            case "eur" : {
                setCurrency({name: "eur" , symbol: <MdOutlineEuroSymbol />})
                break;
            }
            case "inr" : {
                setCurrency({name: "inr" , symbol: <PiCurrencyInrBold />})
                break;
            }
            default : {
                setCurrency({name: "usd" , symbol: "$"})
                break;
            }
        }
    }

  return (
    <>
    <div className="Navbar">
        <div className="logo">
            <Link to={`/`}>
            <img src={logo} alt="" />
            </Link>
        </div>
        <div>
            <ul>
               <Link to={`/`}><li>Home</li></Link> 
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="nav-right">
            <div>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            </div>
            <div className="btn">
            <button>
                Sing up 
                <img src={arrow_icon} alt="" />
            </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar