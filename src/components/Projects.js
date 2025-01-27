import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Marvel App",
      description: "The application for real fans of Marvel Universe with a list of Marvel Heroes and Comics with this Hero. You can find description of random Hero, find your favorite specific Hero and information about Comics with this Hero.",
      imgUrl: projImg1,
      link: "https://valeriya266.github.io/marvel_starter/"
    },
    {
      title: "Kinopoisk App",
      description: "Web site where you can find a list of top latest movies with rating from Kinopoisk site.",
      imgUrl: projImg2,
      link: "https://valeriya266.github.io/Film-player/"
    },
    {
      title: "Employee accounting form",
      description: "A simple management application for employee accounting where you can add new employees to the list, remove them and sort them by bonus indicator.",
      imgUrl: projImg3,
      link: "https://valeriya266.github.io/Employees-app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>On this site, I've compiled a list of my front-end projects published on GitHub that let you evaluate my proficiency in HTML/CSS, JavaScript, ReactJs and other front-end technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
