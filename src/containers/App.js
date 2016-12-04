const React = require('react');
const {bindActionCreators} = require('redux')
const {connect} = require('react-redux')
const actions = require('../actions')
const rootSelector = require('../selectors')
const {MainPanel} = require('../components/')


function App(props) {
    return (<MainPanel {...props} />)
}


function mapStateToProps(state) {
    const validation = rootSelector(state)
    return {
        state,
        validation
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


module.exports =  connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
