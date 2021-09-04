import React, {useState} from 'react';

const Form = () => {
  const [input] = useState('')
  return (
    <form>
      <input type="text" re={input => input = input}>
      </input>
    </form>
  )
}

export default Form;