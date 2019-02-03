import React from 'react'
import {connect} from 'react-redux'

import Counter from '../components/counter'
import {increment, decrement} from '../redux/actions'

//容器组件
export default connect(
    state => ({count: state}),
    {increment, decrement}
)(Counter)


