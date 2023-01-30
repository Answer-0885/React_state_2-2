import { Component } from 'react';
import PropTypes from 'prop-types';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.layouts = [ 'view_module', 'view_list' ];
    this.state = {
      layout: this.layouts[0],
      products: props.products,
    };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
  }

  switchLayout = () => {
    this.setState({
      layout: (this.state.layout === this.layouts[0]) ? this.layouts[1] : this.layouts[0],
      products: this.state.products,
    });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <div style={{textAlign: 'right', margin: '1em 1em'}}>
          <IconSwitch
            icon={this.state.layout}
            onSwitch={this.switchLayout}
          />
        </div>
        {
          this.state.layout === this.layouts[0]
            ? <CardsView cards={this.state.products}/>
            : <ListView items={this.state.products}/>
        }
      </div>
    )
  }
}

export default Store