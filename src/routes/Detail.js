import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Detail(props){
  let {id} = useParams()
  const [num, setNum] = useState('')
  useEffect(()=>{
    if(isNaN(num)==true){
      alert('그러지 마세요')
    }
  }, [num])

    return (
        <div className="container">
         
          <div className="row">
            <div className="col-md-6">
              <img src="/향수1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <input onChange={(e)=>{setNum(e.target.value)}}/>
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].content}</p>
              <p>{props.shoes[0].price}</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      )
}

export default Detail