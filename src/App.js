import './App.css';
import Customer from './components/Customer';



const App = ()=>{
  const CustomerVO=[{
    id:'1',
    img:'https://placeimg.com/64/64/1',
    name : '홍길동',
    birthday : '950626',
    gender:'남자',
    job:'학생'
  ,
  },{
    id:'2',
    img:'https://placeimg.com/64/64/2',
    name : '김영길',
    birthday : '940626',
    gender:'남자',
    job:'회사원'
  ,
  },
  {
    id:'3',
    img:'https://placeimg.com/64/64/3',
    name : '홍진영',
    birthday : '880626',
    gender:'여자',
    job:'학생'
  ,
  }]

  return (
    <>
    {
      CustomerVO.map(user=>( <Customer key={user.id} id={user.id} img={user.img} name={user.name} birthday={user.birthday} gender={user.gender} job={user.job}/>))
    }
    </>
  );
}

export default App;
