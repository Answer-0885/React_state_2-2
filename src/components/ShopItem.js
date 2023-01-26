import PropTypes from 'prop-types'
import "./ShopItem.css"

const ShopItem = (props) => {
  const { data } = props;
  return (
    <div className={"stylesItem"}>
      <img alt='' src={data.img} className={"imgItem"}/>
      <div className={"nameItem"}>
        {data.name}
      </div>
      <div className={"colorItem"}>
        {data.color}
      </div>
      <div className={"priceItem"}>
        {'$' + data.price}
      </div>
      <div className={"btnItem"}>{'ADD TO CART'}</div>
    </div>
  )
}

ShopItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShopItem