import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function App() {

    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        setOpenMenu(false);
    }, [location.pathname])

    return (
        <div className="full-page">

            <header className="header">

                <div className="container">

                    <div className="logo">
                        <h1>YasirAlakus</h1>
                    </div>

                    <ul className="nav">

                        <li><NavLink to={'/'}>Projeler</NavLink></li>
                        <li><NavLink to={'/hakkimda'}>Hakkımda</NavLink></li>

                    </ul>

                    <button onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))} className="mobile-btn">
                        <span style={openMenu ? {transform: 'rotate(45deg) translateX(4px) translateY(9px)'} : {}}></span>
                        <span style={openMenu ? {opacity: '0'} : {}}></span>
                        <span style={openMenu ? {transform: 'rotate(135deg) translateX(-1px) translateY(6px)'} : {}}></span>
                    </button>

                </div>

            </header>

            <div className="main">
                
                <ul style={openMenu ? {display: 'flex'} : {display: 'none'}} className="mobile-nav">
                    <li><NavLink to={'/'}>Projelerim</NavLink></li>
                    <li><NavLink to={'hakkimda'}>Hakkımda</NavLink></li>
                </ul>

                <div className="container">
                    <div className="main-left">

                        <img src="./img/yasiralakus.jpeg" alt="" />

                        <p>Merhaba, ben Muhammed Yasir Alakuş. Junior Frontend Developer'ım.</p>

                        <div className="line"></div>

                        <p>Yetenekler</p>

                        <h6>CSS - HTML - JavaScript - React Js - Bootstrap - GitHub - Figma - VS Code - Postman - Netlify - React Router - Supabase - Tailwind
                        </h6>

                        <div className="line"></div>

                        <div className="socials">
                            <Link to={'https://www.twitter.com/ysroloji'}><i className="fa-brands fa-twitter"></i></Link>
                            <Link to={'https://www.instagram.com/yasiralakus'}><i className="fa-brands fa-instagram"></i></Link>
                            <Link to={'https://www.linkedin.com/in/yasiralakus/'}><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link to={'https://github.com/yasiralakus'}><i className="fa-brands fa-github"></i></Link>
                            <Link to={'mailto:yasiralakus11@gmail.com'}><i className="fa-solid fa-envelope"></i></Link>

                        </div>



                    </div>

                    <div className="main-right">

                        <Outlet />

                    </div>
                </div>

            </div>

        </div>
    )
}