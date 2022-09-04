import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Aman Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I am a Backend Developer building RESTful API's, Backend System/Services using Microservices architecture.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "Don't Use a Comment When You Can Use a Function or a Variable."{' '}
          </p>
          <footer className="blockquote-footer">Robert C. Martin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
