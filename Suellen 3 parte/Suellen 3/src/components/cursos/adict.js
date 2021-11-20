import React, { useState } from "react";
//
import { Row, Col, Input, Button } from 'react-materialize'
//
import {NavLink} from 'react-router-dom'
//
import api from "../../service/api"

const Adicionar = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const add = async () =>{
		await api.post("", {nome:nome,descricao:descricao});
	}
    return (
        <Row>
            <Input placeholder="Digite o nome do curso:" 
            label="Nome do curso"
                onChange={event => setNome(event.target.value)} s={12} />
            <Input placeholder="Digite a descrição do curso:" 
            label="Descrição"
                onChange={event => setDescricao(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/cursos">
                  <Button onClick={add} waves='light' className="right darken-2">Cadastrar</Button>
                </NavLink>
            </Col>
        </Row>
    );
}
export default Adicionar;