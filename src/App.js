import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, Butto, Col, Row} from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data)
  console.log(shoes)
  let navigate = useNavigate()
  return (
    <div className="App">
      

      <Navbar bg="dark" data-bs-theme="dark">
     <Container>
       <Navbar.Brand onClick={()=>{navigate('./')}}>.NOTE</Navbar.Brand>
       <Nav className="me-auto">
         <Nav.Link href="#home">TOP</Nav.Link>
         <Nav.Link href="#features">MIDDLE</Nav.Link>
         <Nav.Link onClick={()=>{navigate('./detail')}}>BASE</Nav.Link>
       </Nav>
     </Container>
     <Link to ="/">홈</Link>
     <Link to ="/detail">상세페이지</Link>
   </Navbar>
      <Routes>
        <Route path="/" element={<>
          <div className="main-bg"></div>
          <Container>
            <Row>
              {
                shoes.map((a, i) => {
                  return (
                    <CardItem shoes={shoes[i]} />
                  )
                })
              }

            </Row>
          </Container></>} />
        <Route path="/detail/:id" element={<div><Detail shoes={shoes}/></div>} />
        <Route path="/event" element={<About />} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>}/>  

        </Route>
        
      </Routes>
      <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
        let copy = [...shoes, ...결과.data]
        setShoes(copy)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>       
   
    </div>
     
  );
}

function CardItem(props) {
  return (
    <Col>
      <img src={'./' + props.shoes.image} alt="대체텍스트" />
      <h4>{props.shoes.title}</h4>
      <p>가격 : {props.shoes.price}</p></Col>
      
  )
}
function About(){

  return (
    <dvi>
      <h4>오늘의 이벤트 </h4>
      <Outlet></Outlet>
    </dvi>
  )
}


export default App;

