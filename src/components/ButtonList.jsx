import React from 'react'
import Button from './Button'

// const list = ["All", "Gaming","Music", "Sports","Tech", "Entertainment" , "Education", "Photography","History"]
const ButtonList = () => {
  return (
    <div className='flex '>
        <Button name= "All"/>
        <Button name= "Gaming"/>
        <Button name= "Music"/>
        <Button name= "Sports"/>
        <Button name= "Tech"/>
        <Button name= "Music"/>
        <Button name= "Sports"/>
        <Button name= "Tech"/>
        <Button name= "Entertainment"/>
        <Button name= "Education"/>
        <Button name= "Photography"/>
        <Button name= "History"/>
        <Button name= "Entertainment"/>
        <Button name= "Education"/>
        <Button name= "Photography"/>
        <Button name= "History"/>
        {/* <Button name= "All"/> */}
    </div>
  )
}

export default ButtonList