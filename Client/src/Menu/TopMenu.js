import React, { useState } from 'react'
import logohere from '../Images/logohere.png'

function TopMenu(props){
    var userData = props.data
    console.log('in top menu', userData[0].firstName)
    const [value, setValue] = useState('')
    console.log('val', value)
    return (
        <div className="top-menu is-shadow-2">
            <div className="menu-logo-container">
                <img className="menu-logo" src={logohere} alt="Logo" />
            </div>
            <div>
                <input
                    className="search-field"
                    placeholder="Search here...."
                    type="search"
                    name="name"
                    autoComplete="off"
                    onChange = {(e)=>{
                        setValue(e.target.value)
                        props.getData(e.target.value)
                    }}
                />
            </div>
        </div>
    );
}

export default TopMenu;