import 'bootstrap/dist/css/bootstrap.min.css'; // これが必須
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { Counter } from './stories/counter';
import "./CSS/main.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { Graph } from './stories/graph';
import { Carousel } from 'react-bootstrap';

const million = 1000000;

function App() {
  return (
      <Container className="container-m">
        {
          //align-items-end == 下寄せ
        }
          <Row className="d-flex flex-row justify-content-center align-items-end">
            <Col className="col-md-2">
              <h6>
              本日の100万ドルの夜景は
              </h6>
            </Col>
            <Col className="col-md-auto">
              <Counter value={142.50 * million} />
            </Col>
            <Col className="col-md-1">
              <h6>
              円
              </h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
                <div id="carouselSlidesx" className="carousel slide" data-ride="carousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item">
                        <img src="image/The_night_view_from_Mt_Hakodate_1MB.jpg" 
                          className="img-fluid rounded mx-auto b-block img-fluid" 
                          alt="Mt.Hakodate's night view"/>
                      </div>
                      <div className="carousel-item active">
                        <Graph></Graph>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlidesx" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSlidesx" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end">
            <Col className="col-md-auto">
              <h6 className="text-muted"><a href='https://www.hakobura.jp/photo_library/category.php'>image from hakobura.jp</a></h6>
            </Col>
          </Row>
        
      </Container>
  );
}

export default App;
