import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import { v4 as uuidv4 } from 'uuid';
import "./CardsView.css";



function CardsView(props) {
  return (
    <div className={"styles"}>
      {props.cards.map((o) => <ShopCard data={o} key={uuidv4()}/>)}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardsView