// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props
  console.log(each)
  const {currencyLogo, currencyName, euroValue, usdValue} = each

  return (
    <li className="liList">
      <div className="liTypeBg">
        <img src={currencyLogo} alt="" className="liImg" />
        <p className="coinHead">{currencyName}</p>
      </div>
      <div className="namesCol">
        <p className="usdHead">{euroValue}</p>
        <p className="euroHead">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
