import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Name of the Wind', id: uuid() },
    { title: 'The Way of Kings', id: uuid() },
    { title: 'The Final Empire', id: uuid() },
    { title: 'The Hero of Ages', id: uuid() }
  ])
  return (
    <div>
      <BookContext.Provider value={{books}}>
        {props.children}
      </BookContext.Provider>
    </div>
  )
}

export default BookContextProvider