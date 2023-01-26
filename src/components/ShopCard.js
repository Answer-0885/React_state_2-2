import PropTypes from 'prop-types'
import "./ShopCard.css"

function ShopCard(props) {
  const { data } = props;
  return (
    <div className={"stylesCard"}>
      <div className={"nameCard"}>
        {data.name}
      </div>
      <div className={"colorCard"}>
        {data.color}
      </div>
      <img alt='' src={data.img} className={"imgCard"}/>
      <div className={"cardPrice"}>
        <div className={"priceCard"}>
          {'$' + data.price}
        </div>
        <div className={"btnCard"}>{'ADD TO CART'}</div>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShopCard