import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [book,setBook] = useState([])

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(response =>{
      setBook(response.data.books)
    }).catch(error=>{
      if(error.response.status==404){
        console.log('Not found')
        console.log('Status message:',error.response.statusText)
      }
    })

  },[])
  console.log(book);

  return (
    <>
    <div>
      {book.map((books)=>{
        return<div key={books.id} className='BookTitle'>
          <h1>{books.title}</h1>
          <div className='BookImage'>
            <img src={books.imageLinks.smallThumbnail} alt="images" />
            <p>{books.description}</p>
          </div>
          <div className='authorName'>
          {books.authors.map((datas,index)=>{
              return(<div key={index}> 
                <span>{datas}</span>
              </div>)
          })}
          </div>
          <hr />
        </div>
      })}
    
    </div>
      
    </>
  )
}

export default App