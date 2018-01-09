import React from 'react'
import canFloat from '../utils/canFloat'

@canFloat
class Box extends React.Component {
  state = {}
  componentWillMount() {
    const { float } = this.props;
    
    if (float) {
      this.float();
    }
  }
  
  render () {
    return <div className={this.state.cls}>My Box</div>;
  }
}

