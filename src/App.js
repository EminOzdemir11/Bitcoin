import React, { Component } from "react";
import Hour from "./Hour";
import List from "./List";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          
          <Col xs="10">
            <Row>
              <Col>
                <Hour />
              </Col>
              <Col>
                <List />
              </Col>
            </Row>
          </Col>
          
        </Container>
      </div>
    );
  }
}
