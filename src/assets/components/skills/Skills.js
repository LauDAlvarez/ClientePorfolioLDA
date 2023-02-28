import './skills.css'
import { DiReact } from 'react-icons/di'
import { FaGitAlt } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { SiJavascript, SiCsswizardry, SiHtml5, SiMongodb, SiMysql, SiExpress, SiNodedotjs } from 'react-icons/si'
import axios from 'axios'
import { useEffect, useState } from 'react'





function Skills(){
    let [skills, setSkills] = useState([])
    let [seccionSkill, setSeccionSkill] = useState(undefined)
    
    
    useEffect(() => {
        axios.get('/skills')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function selectOption(e){
        if(e.target.value != '--Skills--'){
            setSeccionSkill(e.target.value)
        }else{
            setSeccionSkill(undefined);
        }
    }

    let contenidoSkills = skills.map( x =>{
        if(x.nombre == seccionSkill){
            let utilidadesList = x.utilidades.toString().split(',')
            let listHab = utilidadesList.map((y,j) =>{
                return <li key={j}>{y}</li>
            })
            return (
                <>
                    <div className="tituloSkill">
                        <h1>{x.nombre}</h1>
                        <h3>{x.conocimiento}</h3>
                    </div>
                    <ul>
                            {listHab}
                    </ul>
                    <div id="contenidoSkill">
                            <p>{x.descripcion}</p>
                    </div>
                </>
            )
        }
    })


    return(
        <div className='contenedor-skills'>
            <div className='col-skills'>
                <p className='logo-skill'><SiHtml5/></p>
                <p className='logo-skill'><SiCsswizardry/></p>
                <p className='logo-skill'><SiJavascript/></p>
                <p className='logo-skill'><DiReact/></p>
                <p className='logo-skill'><FaGitAlt/></p>
            </div>
            <div className='col-skills'>
                <select className="selector-skills" onChange={ selectOption } >
                        <option defaultChecked >--Skills--</option>
                    <optgroup label="Front-END">
                        <option value={'HTML y Css'}>Web Responsive</option>
                        <option>Javascript</option>
                        <option>React Js</option>
                    </optgroup>
                    <optgroup label="Back-END">
                        <option>Node.Js</option>
                        <option>Express</option>
                        <option>MongoDB</option>
                        <option>MySQL</option>
                        <option>API's</option>
                    </optgroup>
                </select>
                
            </div>
            
            <div className='col-skills'>
                <p className='logo-skill'><SiNodedotjs/></p>
                <p className='logo-skill'><SiExpress/></p>
                <p className='logo-skill'><SiMongodb/></p>
                <p className='logo-skill'><SiMysql/></p>
                <p className='logo-skill'><TbApi/></p>
            </div>
            <div className='info-skills'>
                <div className={`contenedorInfoSkills ${(seccionSkill!=undefined)?'activeSeccionSkill':''}`}>
                    {contenidoSkills}
                </div>    
            </div>
        </div>
    );
}

export default Skills;

