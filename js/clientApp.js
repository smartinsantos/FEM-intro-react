import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='Using JSX' color='red' />
        <MyTitle title='Changing proooops....' color='blue' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
