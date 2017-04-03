var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1(null, 'MyTitle'))
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory(null)
     )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
