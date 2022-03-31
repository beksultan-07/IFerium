import React from 'react'

const Home:React.FC = () => {
    const Bg = require("../../assets/home/bg.jpg")
    
    return (
        <div style={{background: `url(${Bg}) 0 0 / cover`, height: '100vh'}}>
            Home
        </div>
    )
}

export default Home