import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'; // 컴포넌트의 외부를 감싸기 위한 컴포넌트
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';



const styles = {
  root: {
  width: "100%",
  overflowX: "auto"
  },
  table: {
  minWidth: 1920
  }
};


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
  job:'가수'
,
}];

const App = (props)=>{
  
  const { classes } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CustomerVO.map(user=>( <Customer key={user.id} id={user.id} img={user.img} name={user.name} birthday={user.birthday} gender={user.gender} job={user.job}/>))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);