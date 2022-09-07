import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOutInitiate } from '../../redux/actions';


const Header = () => {

    const { user ,basket} = useSelector(state => state.data);
    let dispatch = useDispatch();


    const handleAuth = ()=>{
      dispatch(logOutInitiate());
    }
    return (
        <nav className='header'>
            <Link to="/" >
                <img src={require("./Amazon_Logo.png")} className='header-logo' alt='No' />
            </Link>

            <div className='header-option' style={{ marginRight: '-10px' }}>
                <LocationOnIcon />
            </div>

            <div className='header-option'>
                <span className='hearder-options1'>Hello</span>
                <span className='hearder-options2'>Select Your Address</span>
            </div>

            <div className='search'>
                <select>
                    <option>All</option>
                </select>
                <input type="text" className='searchInput' />
                <SearchIcon className='searchIcon' />
            </div>

            <div className='header-nav'>
                <Link to={`${user ? "/" : "/login"}`} className="header-link" >
                    <div className='header-option' onClick={handleAuth}>
                        <span className='hearder-option1'>Hello {user ? user.email : "Guest"}</span>
                        <span className='hearder-option2'><strong>{user ? "Sign Out" : "Sign In"}</strong></span>
                    </div>
                </Link>

                <Link to="/orders" className="header-link" >
                    <div className='header-option'>
                        <span className='hearder-option1'>Returns</span>
                        <span className='hearder-option2'><strong>& Orders</strong></span>
                    </div>
                </Link>


                <Link to="/login" className="header-link" >
                    <div className='header-option'>
                        <span className='hearder-option1'>Your</span>
                        <span className='hearder-option2'><strong>Prime</strong></span>
                    </div>
                </Link>

                <Link to="/checkout" className="header-link" >
                    <div className='header-basket'>
                        <ShoppingCartIcon />
                        <span className='header=option2 basket-count'>{basket && basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header