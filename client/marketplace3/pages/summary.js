import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import responseFromServer from '../items.js'
const itemsFromServer = responseFromServer.data;

class Card extends React.Component {
  render() {
    return (
      <div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="panel panel-default panel-pet">
          <div className="panel-body">
            <img className="img-rounded img-center" style={{width: '100%'}} src={this.props.value.picture}/>
            <p></p>
            <strong>Item</strong>: <span className="item-name">{this.props.value.name}</span>
            <p></p>
            <select className="custom-select">
              <option defaultValue>Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <p></p>
            <button className="btn btn-default btn-add" type="button" data-id="0">Add to List</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

class Marketplace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: responseFromServer
    }
  }

  renderCard(i) {
    return (
      <Card
        value={this.state.items[i]}
      />
    );
  }

  render() {
    return (
      <div>
          <Head>
          <title>Sunshine</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          </Head>

          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand">Sunshine</a>
          </div>
          </div>
          </nav>

          <div className="container">
          <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-push-2">
          <h2 className="text-center">Your List</h2>
          <hr/>
          <br/>
          </div>
          </div>
          </div>
          <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
          <table className="table" style={{width: "50%"}}>
            <thead>
              <tr>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" className="text-center">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-center">3</th>
                <td className="text-center">Bananas</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">1</th>
                <td className="text-center">Shampoo</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">1</th>
                <td className="text-center">Conditioner</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">1</th>
                <td className="text-center">Body Wash</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">1</th>
                <td className="text-center">Toothpaste</td>
              </tr>
            </tbody>
          </table>
          <div style={{flexDirection:"horizontal"}}>
            <Link href="/index">
              <button className="btn btn-warning btn-lg" role="button" style={{margin: "0px 10px 15px 15px"}} aria-pressed="true">Return to Marketplace</button>
            </Link>
            <Link href="/submit">
              <button className="btn btn-success btn-lg" role="button" style={{margin: "0px 10px 15px 15px"}} aria-pressed="true">Submit List</button>
            </Link>
          </div>

          </div>
      </div>
    );
  }
}

export default Marketplace
