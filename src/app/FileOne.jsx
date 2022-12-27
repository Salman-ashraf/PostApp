import React from 'react'
import {mydata} from '../mydata'
import { myimages } from '../myimages'
const FileOne = () => {

 //console.log(mydata.users)
 // console.log(myimages)
let val=0;
const m=mydata.users.map(item=>{
  item.image=myimages[val].image;
  item.id=myimages[val++].id
  return item;
})
// console.log(m)
const lm=JSON.stringify(m);
// console.log(lm);
  return (
    <div>file</div>
  )
}

export default FileOne