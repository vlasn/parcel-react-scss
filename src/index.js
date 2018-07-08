import React from 'react'
import { render } from 'react-dom'
import WithStylesheets from './components/WithStylesheets'

const App = () => <div>
    <WithStylesheets/>
</div>

render(<App/>, document.getElementById('root'))