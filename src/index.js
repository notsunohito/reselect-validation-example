const React = require('react')
const {render} = require('react-dom')
const { createStore } = require('redux')
const { Provider } = require('react-redux')
const App = require('./containers/App')
const reducer = require('./reducers')


const store = createStore(reducer)


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)
