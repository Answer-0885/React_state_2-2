import PropTypes from 'prop-types'
import ShopItem from './ShopItem'
import { v4 as uuidv4 } from 'uuid';

const styles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'stretch',
}

function ListView(props) {
  return (
    <div style={styles}>
      {props.items.map((item) => <ShopItem data={item} key={uuidv4()}/>)}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ListView