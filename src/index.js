import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {data} from './books'
import SpecificBook from './Book'

function Booklist() {
  return(
    <section className='booklist'>
      {data.map((book)=>{
        return <SpecificBook key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
