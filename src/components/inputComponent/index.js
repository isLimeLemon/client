import React from 'react'

const Input = ({
    Logo,
    onChange,
    Label,
    value
}) => {
  return (
    <>
        {Label && <label>{Label}</label>}
        <div className='input'>
            {Logo && <Logo/>}
            <input type="password" value={value} onChange={onChange}/>
        </div>
    </>
  )
}

export default Input