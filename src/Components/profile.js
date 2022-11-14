import React from 'react'
import Images from '../images/first.jpg'
import Images1 from '../images/second.jpg'
import Images2 from '../images/third.jpg'
import Images3 from '../images/fourth.jpg'

function profile() {
  return (
    <div className='container'>
   <div className='box'> <img  className='img' src={Images}/>
    <h1>Creative</h1>
     <p>last updated: 4/08/2012</p>
     <button>Informatin</button>
    </div>

    <div className='box'> <img  className='img' src={Images1}/>
    <h1>YouTube channel</h1>
     <p>last updated: 4/08/2012</p>
     <button>New updates</button>
    </div>

    <div className='box'> <img  className='img' src={Images2}/>
    <h1>Traffic</h1>
     <p>last updated: 4/08/2012</p>
     <button>News</button>
    </div>

    <div className='box'> <img  className='img' src={Images3}/>
    <h1>Cars</h1>
     <p>last updated: 4/08/2012</p>
     <button>Sales</button>
    </div> 
    </div>

  
  )
}

export default profile