import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

export default class List extends Component {
  state = {
    // units: [
    //   { unitId: 1, unitCode: "USD", qty: 0 },
    //   { unitId: 2, unitCode: "GBP", qty: 0 },
    //   { unitId: 3, unitCode: "EUR", qty: 0 },
    // ],
    units: []
  };


  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/bpi");
    this.setState({
      units: response.data
    })
    console.log(this.state.units);
  };

  render() {
    return (
      <div>
        <Table hover>
          <tbody>
            {
            this.state.units.map((unit) => (
              <tr>
                <th>{unit.code}</th>
                <td>{unit.rate_float}</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
