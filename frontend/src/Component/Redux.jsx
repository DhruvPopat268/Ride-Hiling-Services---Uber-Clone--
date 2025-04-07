import React from 'react'
import {useSelector} from 'react-redux'

const Redux = () => {
    const data = useSelector((state)=>state.form.formdata)
  return (
    <div>
        {JSON.stringify(data)} with the help of redux
    </div>
  )
}

export default Redux