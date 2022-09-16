import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";

export default class Hour extends Component {
  state = {
    hour: 10,
    minute: 0,
    second: 0,
  };

  sayac = () => {
    if (this.state.second > 0) {
      this.setState({
        second: this.state.second - 1,
      });
    }
    if (this.state.second === 0) {
      this.setState({
        second: 59,
        minute: this.state.minute - 1,
      });

      if (this.state.minute > 0) {
        this.setState({
          minute: this.state.minute - 1,
        });
      }
      if (this.state.minute === 0) {
        this.setState({
          minute: 59,
          hour: this.state.hour - 1,
        });
        if (this.state.hour > 0) {
          this.setState({
            hour: this.state.hour - 1,
          });
        }
      }
    }
  };

  clock = () => {
    var dt = new Date();
    this.setState({
      hour: dt.getHours(),
      minute: dt.getMinutes(),
      second: dt.getSeconds(),
    });
  };

  increase = (time) => {
    if (time === "s") {
      if (this.state.second < 50) {
        this.setState({
          second: this.state.second + 10,
        });
      }
      if (this.state.second >= 50) {
        this.setState({
          second: this.state.second - 50,
          minute: this.state.minute + 1,
        });
      }
      if (this.state.minute === 59) {
        this.setState({
          minute: 0,
          hour: this.state.hour + 1,
        });
      }
    }
    if (time === "m") {
      if (this.state.minute < 50) {
        this.setState({
          minute: this.state.minute + 10,
        });
      }
      if (this.state.minute >= 50) {
        this.setState({
          minute: this.state.minute - 50,
          hour: this.state.hour + 1,
        });
      }
    }
    if (time === "h") {
      this.setState({
        hour: this.state.hour + 1,
      });
    }
  };

  decrease = (time) => {
    if (time === "s") {
      if (this.state.second > 10) {
        this.setState({
          second: this.state.second - 10,
        });
      }
      if (this.state.second === 10) {
        this.setState({
          second: this.state.second - 10,
        });
        if (this.state.minute > 1) {
          this.setState({
            minute: this.state.minute - 1,
          });
        }
        if (this.state.minute === 1) {
          this.setState({
            minute: this.state.minute - 1,
            hour: this.state.hour - 1
          });
        }
      }
      if (this.state.second < 10) {
        this.setState({
          second: this.state.second + 50,
          minute: this.state.minute - 1
        });
        if (this.state.minute === 0) {
          this.setState({
            minute: 59,
            hour : this.state.hour - 1
          }) 
        }
      }
    }
    if (time === "m") {
      if (this.state.minute > 10) {
        this.setState({
          minute: this.state.minute - 10,
        });
      }
      if (this.state.minute === 10) {
        this.setState({
          minute: this.state.minute - 10,
          hour: this.state.hour - 1,
        });
      }
    }
    if (time === "h") {
      this.setState({
        hour: this.state.hour + 1,
      });
    }
  }

  componentDidMount() {
    setInterval(this.sayac, 1000);
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.hour}:{this.state.minute}:{this.state.second}
        </h1>
        <Row>
          <Col>
            <Col>
              <Button
                outline
                onClick={() => {
                  this.increase("h");
                }}
                size="sm"
              >
                +
              </Button>
            </Col>

            <Button onClick={() => {
                  this.decrease("h");
                }} outline size="sm">
              -
            </Button>
          </Col>
          <Col>
            <Col>
              <Button
                outline
                onClick={() => {
                  this.increase("m");
                }}
                size="sm"
              >
                +
              </Button>
            </Col>

            <Button onClick={() => {
                  this.decrease("h");
                }} outline size="sm">
              -
            </Button>
          </Col>
          <Col>
            <Row>
              <Col>
                <Button
                  outline
                  onClick={() => {
                    this.increase("s");
                  }}
                  size="sm"
                >
                  +
                </Button>
              </Col>
            </Row>
            <Button onClick={() => {
                  this.decrease("h");
                }} outline size="sm">
              -
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
