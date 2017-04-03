var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1({ style: { color: this.props.color }}, this.props.title))
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color:'red' }),
        MyTitleFactory({title: 'another title sent by props'})
     )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
