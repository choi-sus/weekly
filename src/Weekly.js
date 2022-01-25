import React, {useState} from 'react';
import styled from "styled-components";
import { useHistory, useParams } from 'react-router-dom';

const Weekly = (props)=> {
    const {id} = useParams();
    const history = useHistory();
    const [color, setColor] = useState([0, 1, 2, 3, 4]);
    // const [bg, setBg] = useState('#eee');
    const [click, newClick] =useState(0);

    // const onClick = (i) => {
    //     newClick(i);
    //     bg === '#eee' ? setBg('yellow') : setBg('#eee');
    //   };
    
    return(
        <WeeklyStyle> 
        {/* bg = {bg} */}
            <h2><span>{props.week[id] + "요일"}</span> 평점 남기기</h2>
            <ul>
                {
                    color.map((a, i)=> {
                        return(
                            <li key={i} onClick={()=> {
                                newClick(i + 1);
                                
                            }} style={{
                                backgroundColor: click < i + 1 ? "#eee" : "#fcffac" 
                            }}></li>
                        )
                    })
                }
            </ul>
            <button onClick={()=> {history.push('/')}}>평점 남기기</button>
        </WeeklyStyle>
    )
}

const WeeklyStyle = styled.div`
    width: 400px; 
    border: 1px solid #000; 
    padding: 20px 30px; 
    margin: auto;
    text-align: center;
    h2 {
        margin-bottom: 35px;
    }
    h2 span {
        padding: 5px 10px; display: inline-block; background-color: #e0c8fb; border-radius: 30px;
    }
    ul {
        display: inline-block; margin-bottom: 35px;
    }
    ul:after {
        content: ''; display: block; visibility: hidden; clear: both;
    }
    ul li {
        float: left; width: 50px; height: 50px; border-radius: 50%; cursor: pointer;
    }
    // background-color: ${props => props.bg};
    ul li:not(:first-child){
        margin-left: 7.5px
    }
    button {
        display: block; margin: 0 auto; border: none; width: 150px; font-family: 'Gowun Batang', serif; font-weight: 600;
        font-size: 18px; line-height: 40px; background-color: #e0c8fb; cursor: pointer;
    }
`; 

export default Weekly;