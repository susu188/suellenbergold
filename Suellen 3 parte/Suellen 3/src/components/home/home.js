// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={12} s={12}>
        <h5 className="subtitle">Sobre o curso</h5>
        <Card>
          <div>
            <p><b>Método de ensino</b></p>
            <p>Nossos cursos utilizam do método dos Flashcards para auxiliar no aprendizado, tornando o ato de estudar mais interessante e interativo para o aluno, ajudando-o a fixar o conteúdo de forma mais prática.</p>
            <br/>
          </div>
        </Card>
        <br/>
        <h5 className="subtitle">Qualificações</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Maior índice de aprendizado em menos tempo"
                    description=""
                    avatar={company_avatar}
        />
        <Experience title="Recomendado pelo MEC"
                    description=""
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;