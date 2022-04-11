import React from 'react'

const Book = ({ img, title, author }) => {

    const clickHandler = () => {
        alert('Hello World')
    }
    const complexExample = (author) => {
        alert(author)
    }

    return (
        <article className='book' >
            <img src={img} alt="" onMouseOver={() => {
                alert(title)
            }} />
            <h1>{title}</h1>
            <h4>{author}</h4> {/* inline style way: style={{ color: '#617d98', fontSize: '0.90rem', marginTop: '0.25rem' }} */}
            {/* <p>{let x = 6}</p> */}
            <button type='button' onClick={clickHandler}> Reference example </button>
            <button type='button' onClick={() => complexExample(author)}> more Complex example </button>

        </article>
    )
}

export default Book
