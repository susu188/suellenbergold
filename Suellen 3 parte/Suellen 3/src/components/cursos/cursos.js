//
import React from "react";
//
import { NavLink } from 'react-router-dom';
//
import Curso from './curso'

const Cursos = (props) => {
  return (
    <div>
        <div class="rowc">
          <h5>Cursos</h5>
          
          <NavLink to="/adicionar">
            <a class="grey waves-effect waves-light btn">Adicionar</a>
          </NavLink>

        </div>
          {props.coursesDados.map(course => (
            <Curso 
              course={course}
            />
          ))};
    </div>
  );
};

export default Cursos;