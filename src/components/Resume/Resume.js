import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/AmanKumar.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Development Engineer 1( Medly Software Systems LLP)"
              date="April 2022 - present"
              content={[
                'Implemented OKTA OAUTH 2.0 for authentication and authorization',
                'Used event-driven architecture to trigger events and communi- cate between decoupled services',
                'Debugged production issue and wrote an RCA for that.',
                'Optimized error handling strategies for Kinesis event handlers.'
              ]}
            />
            <Resumecontent
              title="Intern Developer"
              date="June 2021 - March 2022"
              content={[
                'Developing Medly\'s public-facing RESTful APIs for Medly partners.',
                'Built a Global error response processor responsible for handling an API\'s error responses.',
                'Scripted local setup for a backend service using localstack, moun- tebank and Shell Scripts',
                'Built reusable Github workfows that were used by various teams of the organization.'
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Co-founder & Head of Event Management [Imagination to Innovation]"
              date="Feb 2020 - Aug 2021"
              content={[
                'Led a team of 10-15 volunteer to organize a quiz competition with collaboration of \'Scholastic Asia\', a book publishing company in which 100-150 students participated',
                'Organized an event named \'Ahem Codeashmi\',a coding competition, in which 225-250 students participated' 
              ]}
            />
            <Resumecontent
              title="Volunteer - LPU NSS"
              date="Sep 2019 - March 2021"
              content={[
                'Participated in various activites like Plantation Drive, Blood Donation Drive.',
                'Core member of the initiatives like Feeding Bellies, Spreding Smile.'
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [L.P.U] "
              date="2018 - 2022"
              content={[
                'I have completed my bachelor degree fron Lovely Profession University, Jalandhar, Punjab.',
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Secured 3rd Rank in Talent Search Exami- nation Organized By ABVP.`,
                `Achieved 5 Star Gold Badge in Python on Hacker rank`,
                `Participated in Flipkart Grid Challenge Round 1.`
              ]}
            />
            
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
