import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import meds from '../../Assets/Projects/medsManageSystem.png'
import aapanBihar from '../../Assets/Projects/aapanBihar.png'
import ner from '../../Assets/Projects/namedEntityRecognizer.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aapanBihar}
              isBlog={false}
              title="Aapan Bihar"
              description="This website is for one who loves to create posts like blogs, poetry, story. It provides various options like Create Post, View Post, SignUp, SignIn, Draft Post, SignOut, Like, Comment and Share. "
              link="https://github.com/aman2457/django-blog"
              liveLink="http://aapanbihar.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ner}
              isBlog={false}
              title="Wiki Named Entity Recognizer(WNER)"
              description="WNER is a information extraction tool that crawls on wikipedia for entered keyword and performs named entity recognition. After this it prouduces a beautiful visual of highlighting all the entity inside the text/body."
              link="https://github.com/aman2457/bi-ner"
              liveLink="https://afternoon-shore-15753.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meds}
              isBlog={false}
              title="Medicine Management System"
              description="This is CLI based project. It is kind of medicine management system or you can say that its a inventory management system where we can add, delete, search or update items details ."
              link="https://github.com/aman2457/medsmanagementsystem"
              liveLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
