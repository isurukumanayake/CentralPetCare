import React, { useState } from "react";
import "./HeaderAdvanced.scss";
import logo from '../../../assets/imgs/hero-sec-image/logo.png'
import noData from '../../../assets/imgs/error-displayers/no-data.png'
import {SlArrowDown} from 'react-icons/sl'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderTransparent = () => {
	const navigate = useNavigate()
    const [visibility , setVisibility] = useState(false)
	const [logStatus, setLogStatus] = useState(false)
	return (
		<div className="nav-container-header-adv-transparent">
			{/* this is for the company logo */}
			<div className="partition-nav-1">
				<span className="brand-text-header-adv">Central Pet Care </span>
			</div>
			{/* this is for the link section */}
			<div className="partition-nav-2-header-adv">
				<span className="nav-links-header-advanced">Home</span>
				{/* <span className="nav-links-header-old-advanced">About</span> */}
				<span className="nav-links-header-advanced" onClick={()=>{
					navigate("/services")
				}}>Services</span>
				{/* <span className="nav-links-header-old-advanced">Contact</span> */}
				<span className="nav-links-header-advanced" onClick={()=>{
					navigate("/store")
				}}>Store</span>
				<div className={logStatus ? `hide` : `show`}>
					<div className="nav-login-btn-header-advanced"onClick={()=>{
					navigate("/login")
				}}>Signup</div>
					<div className="nav-login-btn-header-advanced"onClick={()=>{
					navigate("/login")
				}}>Signin</div>
				</div>
			</div>
            <div className={logStatus ? `partiton-nav-3 show` : `hide`}>
                <img src={noData} alt="" className="profile-cpt-image" />
                <button className="drop-btn-header-adv" onClick={()=>{setVisibility(!visibility)}}>
                    <SlArrowDown className="arrow-header-adv"/>
                </button>
                <div className={visibility ? `btn-section-header-adv` : `btn-section-header-adv hide`}>
                    <span className="scroller-btns">Profile</span>
                    <span className="scroller-btns">Logout</span>
					<span className="scroller-btns" onClick={()=>{
						navigate("/account/myOrders")
					}}>MyOrders</span>
                </div>
            </div>
		</div>
	);
};

export default HeaderTransparent;
