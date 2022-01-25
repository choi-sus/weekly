import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = (props)=> {
    const [color, setColor] = useState([0, 1, 2, 3, 4]);

    return(
        <div className='container'>
            <h1>내 일주일은?</h1>
                {
                    props.week.map((a, i)=> {
                        let num = Math.floor(Math.random() * color.length + 1);

                        return(
                            <div key={i} className='content'>
                                <h3>{props.week[i]}</h3>
                                <ul>
                                    {
                                        color.map((a, i)=> {
                                            return(
                                                <li style={{
                                                    backgroundColor: num < i + 1 ? "#eee" : "#fcffac" 
                                                }}></li>
                                            )
                                        })
                                    }
                                </ul>
                                <button><Link to={"/weekly/" + i}></Link></button>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Home;