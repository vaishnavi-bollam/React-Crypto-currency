// Write your JS code here

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem/index'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {lists: [], isLoader: true}

  componentDidMount() {
    this.getAllLists()
  }

  getAllLists = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
      {
        method: 'GET',
      },
    )
    const dataInServerFormatSnakeCase = await response.json()
    const dataInClientFormatCamelCase = dataInServerFormatSnakeCase.map(
      eachObj => ({
        currencyLogo: eachObj.currency_logo,
        currencyName: eachObj.currency_name,
        euroValue: eachObj.euro_value,
        id: eachObj.id,
        usdValue: eachObj.usd_value,
      }),
    )
    console.log(dataInClientFormatCamelCase)
    this.setState({lists: dataInClientFormatCamelCase, isLoader: false})
  }

  render() {
    const {lists, isLoader} = this.state
    return isLoader ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="listBg">
        <h1 className="listBgHead">Crypotocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="listBgImgHead"
        />

        <div className="tableList">
          <div className="tableHead">
            <div>
              <h1 className="coinHead">Coin Type</h1>
            </div>
            <div className="namesCol">
              <h1 className="usdHead">USD</h1>
              <h1 className="euroHead">EURO</h1>
            </div>
          </div>
          <ul className="ulList">
            {lists.map(each => (
              <CryptocurrencyItem each={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
