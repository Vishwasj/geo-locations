import React from 'react'
import './index.css'

const ErrorComponent = ({message}) => {
    return(<div className="error">{message}</div>)
}

export default ErrorComponent