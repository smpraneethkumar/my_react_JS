import React, { useEffect, useState } from 'react'

const PaginaationEffect = () => {
    const [userData, setUserData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        handleData()
    },[pageNumber])

    const handleData = async () => {
        let response = await  fetch (`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, {
      method:"GET",
            headers:{
                "app-id":"633e33e98efd49504c9c7643",
            }
    })
    const {data} = await response.json()
    setUserData(data)
    }

    const handlePage = (num) => {
        setPageNumber(num)
        console.log(pageNumber);
        
    }
  return (
    <div>PaginaationEffect

         <div className="container">
        <div className="row">
            {
             userData && userData.length > 0 ? userData.map((user, i)=>(
        
                <div className="col-md-6 my-2" key={user.id || i}>
                  <div className="card">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={user.picture} alt={user.title} />
                      </div>
                      <div className="col-md-8">
                        <h5>{user.id}</h5>
                        <h6>{user.firstName}</h6>
                      </div>
                    </div>
                  </div>
                </div>
             )) : <p>loading...</p>
         
            }
              </div>
              <div className="row ms-4">
                {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i)=> (
                    <div className="col-md-1 mt-3" key={i}>
                      <button className='btn btn-primary' onClick={() => handlePage(num)}>{num}</button>
                    </div>
                  ))
                }
              </div>
        </div>
    </div>
  )
}

export default PaginaationEffect