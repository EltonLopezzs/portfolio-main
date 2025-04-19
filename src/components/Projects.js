import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Sistema de Portaria.png"; 
import projImg2 from "../assets/img/Producao.png";
import projImg3 from "../assets/img/Suprimento.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Access Control System",
      description: "Development ERP",
      imgUrl: projImg1,
    },
    {
      title: "Sugar-Ethanol Plant Production Dashboard",
      description: "Dashboard & Development",
      imgUrl: projImg2,
    },
    {
      title: "Supply Dashboard",
      description: "Dashboard & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>From abstract ideas to successful projects, here are some of my most recent works.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
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
                      <Tab.Pane eventKey="second">
                        <p>
                          Access Control System<br />
                          I developed a comprehensive access control system for a Sugar and Alcohol plant using Python and JavaScript. On the back-end, Python was combined with a MySQL database to efficiently manage data and business logic. For the front-end, I used JavaScript, HTML, and CSS to create an intuitive and responsive interface. The system allows for detailed tracking of the entry and exit of various types of vehicles, including MEM, alcohol and sugar tankers, as well as employee access control.<br /><br />
                          Additionally, I integrated extra functionalities like registering invoices and automatically sending emails to request entry authorization. When an invoice is registered, the system automatically sends an email requesting the corresponding entry authorization. This automated approach streamlines the authorization process and ensures security procedures are followed.<br /><br />
                          With all these features, the access control system provides comprehensive and efficient management of the plant's entry and exit flow, promoting safety and operational efficiency.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Production Dashboard<br />
                          Developed using Python, this production dashboard is connected to an Oracle database to ensure the accuracy and timeliness of the information. The front-end was built using JavaScript to offer a dynamic and intuitive user experience. This dashboard is specifically focused on crop tracking, providing a detailed view of current production. It uses a direct connection to the Oracle database to bring real-time, updated information, allowing users to closely monitor crop progress and make strategic decisions based on precise and up-to-date data.<br /><br />
                          Additionally, the dashboard provides real-time visualization of harvest points on an interactive map. This feature allows users to track the geographical distribution of the harvest and identify areas with higher activity. With this spatial visualization, managers can make more informed decisions about resource allocation and logistics, maximizing harvesting efficiency.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Supply Dashboard<br />
                          This is a robust dashboard developed in Python, directly connected to an Oracle database, providing a comprehensive view of all purchase requests, stock status, current stock value, and other relevant metrics. This tool is essential for making strategic decisions, offering detailed, real-time insights into the company's supply chain. With clear and intuitive visualizations, the dashboard provides comprehensive analysis and facilitates the identification of trends and areas for improvement.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
