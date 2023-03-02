import React, { useEffect, useState } from 'react'
import {Button} from '@mui/material'

export default function Test() {
 
  let noQuestion=24;
  let currentQuestion=0;
  let mark=0;
  let wrong=0;
  let missQuestion=0;

  const ResultValue={
    Mark:0,
    wrong:0,
    Miss:0,
    AnsArray:[String]
}

for(let i=0;i<noQuestion;i++){
  ResultValue.AnsArray[i]="-1";
}

  let obj=[
         {question:" The three rational numbers between 3 and 4 are:",
          number:1,
          option:[
            { a:"5/2,6/2,7/2"},
            { b:"13/4,14/4,15/4"},
            { c:"12/7,13/7,14/7"},
            { d:"11/4,12/4,13/4"},
           ],
           answer:"b",
         },
         {question:"  3√6 + 4√6 is equal to:",
         number:2,
          option:[
            { a:"6√6"},
            { b:"7√6"},
            { c:"4√12"},
            { d:" 7√12"},
           ],
           answer:"b",
         },
         {question:" Every rational number is:",
         number:3,
          option:[
            { a:"Whole number"},
            { b:"Natural number"},
            { c:"Integer"},
            { d:"Real number"},
           ],
           answer:"d",
         },
         {question:"√12 X √15 is equal to:",
         number:4,
          option:[
            { a:"5√6"},
            { b:" 6√5"},
            { c:"10√5"},
            { d:"√25"},
           ],
           answer:"b",
         },
         {question:"Value of (256)0.16 X (256)0.09 is:",
         number:5,
          option:[
            { a:"4"},
            { b:" 16"},
            { c:"54"},
            { d:"256.25"},
           ],
           answer:"a",
         },
         {question:" If the coordinates of a point are (3, 0), then it lies in:",
         number:6,
          option:[
            { a:"X-axis"},
            { b:"Y-axis"},
            { c:"At origin"},
            { d:"Between x-axis and y-axis"},
           ],
           answer:"a",
         },
         {question:"If the coordinates of a point are (0, -4), then it lies in:",
         number:7,
         option:[
            { a:"X-axis"},
            { b:"Y-axis"},
            { c:"At origin"},
            { d:"Between x-axis and y-axis"},
           ],
           answer:"b",
         },
         {question:" If the coordinates of a point are (-3,-4), then it lies in:",
         number:8,
         option:[
            { a:" First quadrant"},
            { b:" Seconed quadrant"},
            { c:" Third quadrant"},
            { d:" Fourt quadrant"},
           ],
           answer:"c",
         },
         {question:"If the perpendicular distance of a point P from the x-axis is 7 units and the foot of the perpendicular lies on the negative direction of x-axis, then the point P has:",
         number:9,
         option:[
            { a:"y-coordinate = 7 or –7 only"},
            { b:" y-coordinate = 7 only"},
            { c:"  y-coordinate = –7 only"},
            { d:" x-coordinate = –7"},
           ],
           answer:"a",
         },
         {question:" On plotting P (–3, 8), Q (7, –5), R (–3, –8) and T (–7, 9) are plotted on the graph paper, then point(s) in the third quadrant are:",
         number:10,
          option:[
            { a:" P and T"},
            { b:" Q and R"},
            { c:" Only R"},
            { d:" P Only R"},
           ],
           answer:"c",
         },
         {question:" Abscissa of a point is positive in:",
          option:[
            { a:" I and II quadrants"},
            { b:" I and IV quadrants"},
            { c:"  I quadrant only"},
            { d:" II quadrant only"},
           ],
           answer:"c",
         },
         {question:"The mirror of a point (3, 4) on y-axis is:",
          option:[
            { a:"(3, 4)"},
            { b:" (-3, 4)"},
            { c:" (3,-4)"},
            { d:" (-3, -4)"},
           ],
           answer:"b",
         },
         {question:"If E and F are the midpoints of equal sides AB and AC of a triangle ABC. Then:",
          option:[
            { a:"BF=AC"},
            { b:"BF=AF"},
            { c:"CE=AB"},
            { d:"BF = CE"},
           ],
           answer:"d",
         },
         {question:" If ABC and DBC are two isosceles triangles on the same base BC. Then:",
          option:[
            { a:"∠ABD = ∠ACD"},
            { b:"∠ABD < ∠ACD"},
            { c:"∠ABD > ∠ACD"},
            { d:"None of the above"},
           ],
           answer:"a",
         },
         {question:" If ABC is an equilateral triangle, then each angle equals to:",
          option:[
            { a:"90°"},
            { b:"180°"},
            { c:"120°"},
            { d:"60°"},
           ],
           answer:"d",
         },
         {question:" In a right triangle, the longest side is:",
          option:[
            { a:"Perpendicular"},
            { b:"Hypotenuse"},
            { c:"Base"},
            { d:"None of the above"},
           ],
           answer:"b",
         },
         {question:"A triangle in which two sides are equal is called:",
          option:[
            { a:"Scalene triangle"},
            { b:"Equilateral triangle"},
            { c:"Isosceles triangle"},
            { d:"None of the above"},
           ],
           answer:"b",
         },
         {question:" The quadrilateral whose all its sides are equal and angles are equal to 90 degrees, it is called:",
          option:[
            { a:"Rectangle"},
            { b:"Square"},
            { c:"Kite"},
            { d:" Parallelogram"},
           ],
           answer:"b",
         },
         {question:" A trapezium has:",
          option:[
            { a:"One pair of opposite sides parallel"},
            { b:"Two pair of opposite sides parallel to each other"},
            { c:"All its sides are equal"},
            { d:" All angles are equal"},
           ],
           answer:"a",
         },
         {question:"A diagonal of a parallelogram divides it into two congruent:",
          option:[
            { a:"Square"},
            { b:"Parallelogram"},
            { c:"Triangles"},
            { d:" Rectangles"},
           ],
           answer:"c",
         },
         {question:" The linear equation 3x-11y=10 has:",
          option:[
            { a:" Unique solution"},
            { b:"Two solutions"},
            { c:"Infinitely many solutions"},
            { d:"  No solutions"},
           ],
           answer:"c",
         },
         {question:"Point (3, 4) lies on the graph of the equation 3y = kx + 7. The value of k is:",
          option:[
            { a:"4/3"},
            { b:"5/3"},
            { c:"3"},
            { d:" 7/3"},
           ],
           answer:"b",
         },
         {question:"The graph of x = 3 is a line:",
          option:[
            { a:"Parallel to x-axis at a distance of 3 units from the origin"},
            { b:" Parallel to y-axis at a distance of 3 units from the origin"},
            { c:"Makes an intercept 3 on x-axis"},
            { d:"Makes an intercept 3 on y-axis"},
           ],
           answer:"b",
         },
         {question:" If x and y are both positive solutions of equation ax+by+c=0, always lie in:",
          option:[
            { a:" First quadrant"},
            { b:" Seconed quadrant"},
            { c:" Third quadrant"},
            { d:" Fourt quadrant"},
           ],
           answer:"a",
         },
    ];


    useEffect(()=>{
      onprevious();
   },[])
   const onprevious=()=>{
       if(question>0){
         setquestion(question-1)     
       }
    }
   const onnext=()=>{
       if(question<23)
       setquestion(question+1)
    }

    const handlChange=(e)=>{
       console.log(e.target.value)

    }
    
    const [question,setquestion]=useState(0)
     const [answer ,setanswer]=useState([0])
  return (
    <div className="container-fluid d-flex   rounded-0 h-100" style={{backgroundColor:'#FEF2f2'}}>
		<div class=" container-fluid col-8  text-white fs-3 py-3 ">
           <div className="container-fluid d-flex flex-column" style={{height:'80vh'}}>
              <div className="">
                <div className=" rounded-4  p-5 " style={{backgroundColor:'#fcA5A5'}}>
                    <div className=" question fs-5">Q.{obj[question].question}</div>
                    <div className="answer ps-5 py-5">
                      <form action="">
                        <div className=" d-flex flex-column gap-3">
                            <label class="options d-flex gap-2" style={{fontSize:'20px'}}>
                            <input type="radio" onChange={handlChange}  value={'a'}/>
                             {obj[question].option[0].a }
                            </label>
                            <label class="options d-flex gap-2"  style={{fontSize:'20px'}}>
                            <input type="radio" onChange={handlChange}  value={'b'} />
                            {obj[question].option[1].b}
                            </label>
                            <label class="options d-flex gap-2"  style={{fontSize:'20px'}}>
                            <input type="radio" onChange={handlChange}  value={'c'} />
                            {obj[question].option[2].c}
                            </label>
                            <label class="options d-flex gap-2"   style={{fontSize:'20px'}}>
                            <input type="radio" onChange={handlChange}  value={'d'}  />
                            {obj[question].option[3].d}
                            </label>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
              <div className="d-flex justify-content-center fs-4 gap-5 p-5">
                <div className="">
                  <Button color='info' variant='contained'onClick={onprevious}  sx={{px:6,py:2,width:200,backgroundColor:['#f44336']}}>Previous</Button>
                </div>
                <div className="">
                <Button color='secondary' variant='contained' onClick={onnext}   sx={{px:6,py:2,width:200,backgroundColor:['#f44336']}}>Next</Button>
                </div>
              </div>
           </div>
		</div>
		<div class="col-4 d-flex flex-column text-white fs-4 align-items-center p-4" style={{backgroundColor:'#FEF2f2'}} >
            <div className=" d-flex gap-4 px-5  py-3 flex-wrap" >
              {
                obj.map((val,key)=>
                <div className="col-3  d-flex justify-content-center align-items-center rounded-3" onClick={()=>{setquestion(key)}} style={{width:70, height:70,backgroundColor:'#fcA5A5'}} >{key+1}</div>         
                )
              }
            </div>
            <Button variant='contained' onClick={console.log(answer)}  sx={{px:6,py:2,width:200,backgroundColor:['#f44336']}}>submit</Button>
		</div>
    </div>
  )
}