import React from 'react'
import html5 from '../img/tech-stack-icons/html5.jfif'
import css3 from '../img/tech-stack-icons/css3.jfif'
import javaScript from '../img/tech-stack-icons/javascript.jfif'
import expressNode from '../img/tech-stack-icons/express-and-node.jfif'
import reactPic from '../img/tech-stack-icons/react.jfif'
import mysqlPic from '../img/tech-stack-icons/mysql.jfif'
import gitPic from '../img/tech-stack-icons/git.jfif'

const TechStack = () => {
    return (
        <div className='tech-stack'>
            <img src={html5}/>
            <img src={css3}/>
            <img src={javaScript}/>
            <img src={reactPic}/>
            <img src={expressNode}/>
            <img src={mysqlPic}/>
            <img src={gitPic} />


        </div>
    )
}

export default TechStack