import React, {useState, useCallback, useEffect } from 'react'
import FutaLogo from '../Images/Logo/futaLogo.png'

function Register() {
    /* const styleReg = {
         backgroundImage : `url(${bg_2})`
     } */
/////////////////////////////--------------------------Course Change------------------///////////////////////////////
const [course, setcourse] = useState([]);
let [courselist, setCourseList] = useState([]);
 const fetchData = useCallback( () => {
   fetch('./data.json')
   .then(response => response.json())
   .then(data => {
     setCourseList(data)
   })
 }, [])
  useEffect( () => {
    fetchData()},
    [fetchData]
  )

//const [addcourse, setAddcourse] = useState('')
const selectCourse = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setcourse(selectedcoursetate);
};
// useEffect(
//    () => {
//      setcourse([
//        ...data,
//        {
//         data
//        }
//      ]);
//    },[]
//  );
//  const includeCourse = (e) => {

//    setcourse([
//     ...data,
//     {
//       data
//     }
//    ])
//  }
///////////////----------------------Student Details-----------///////////////////////////////////////////////////////
     const student = {
       full_name : "Oliyide Ibrahim Owolabi",
       matric_No :  "14/32/0018" ,
       department  : "Electrical/Electronics Engineering",
       programme : "300 Full Time",
       school : "Faulty Of Engineering",
     }
     const today = Date();  
///////////////----------------------Student Details-----------///////////////////////////////////////////////////////
////////////////////////////////////-------------Course Details--------------------///////////////////////////////////
// const selectCourse = (event) => {
//   //let title = document.querySelector('#title');
//   let unit = document.getElementById('unit');
//   let code = document.getElementById('code')
//   event.value = courseDetails[0].courseTitle
//   if ( event.value === courseDetails[0].courseTitle) {
//     unit.value = courseDetails[0].courseUnit;
//     code.value = courseDetails[0].courseCode;
//   }
//   ;
//   console.log(unit.value);
//   console.log(code.value);
// } ;
// selectCourse()
///////////////////////////////////----------------Return HTML---------------/////////////////////////////////////////
    return (
        <div className="container">
        <header className="display-6 text-center" >
        <img className="img img-fluid mt-n5 pt-2 logo2" alt="Futa Logo" src={FutaLogo} ></img> 
        <div className="w-75 d-inline-block" >
               FEDERAL UNIVERSITY OF TECHNOLOGY, AKURE
                <p>PMB 704, AKURE, ONDO STATE OF NIGERIA</p>
             <p className=""> COURSE REGISTRATION </p>
        </div>
        </header>
            <div className="container py-5">
            </div>
                
                <div>
                    <p>{student.full_name.toUpperCase()}</p>
                    <p>Reg./Matric No: {student.matric_No}</p>
                    <p>School: {student.school}</p>
                    <p>Course Of Study: {student.department}</p>
                    <p>Phone No/Email: (+234)9038961332/oliyideibrahim123@gmail.com</p>
                    <p>Date: {today}</p>
                </div>
            <div>
            <label htmlFor="session" >Session:</label>
                <select className="custom-select" id="session">
                    <option value="2023/2024" > 2023/2024</option>
                    <option value="2022/2023" > 2022/2023</option>
                    <option value="2021/2022" > 2021/2022</option>
                    <option value="2020/2021" > 2020/2021</option>
                    <option value="2019/2020" > 2019/2020</option>
                    <option value="2018/2019" > 2018/2019</option>
                    <option value="2017/2018" > 2017/2018</option>
                    <option value="2016/2017" > 2016/2017</option>
                    <option value="2015/2016" > 2015/2016</option>
                    <option value="2014/2015" > 2014/2015</option>
                    <option value="2013/2014" > 2013/2014</option>
                    <option value="2012/2013" > 2012/2013</option>
                    <option value="2011/2012" > 2011/2012</option>
                    <option value="2010/2011" > 2010/2011</option>
                    <option value="2009/2010" > 2009/2010</option>
                </select>
            </div>
            <div>
            <label htmlFor="semester" >Semester:</label>
                <select  className="custom-select d-inline" id="semester">
                    <option value="Second Semester" > Second Semester</option>
                    <option value="First Semester" > First Semester</option>
                </select>
            </div>
            <div>
            <label htmlFor="semester" >Level:</label>
                <select id="semester" className="custom-select d-inline"  placeholder="Choose Level" >
                    <option value="500" > 500</option>
                    <option value="400" > 400</option>
                    <option value="300" > 300</option>
                    <option value="200" > 200</option>
                    <option value="100" > 100</option>
                    
                </select>
                <div>
                <table className="table">
  <thead>
   <tr name="heading" id="heading" >
      <th scope="col">S/N</th>
      <th scope="col col-2">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Course Unit</th>
      <th scope="col">Course Type</th>
      <th scope="col">Curriculum</th>
    </tr>
  </thead>
  <tbody>
      
            <tr >
            <td> 1 </td>
            <td>
              <select
              name="course1"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>

            
            <tr >
            <td> 2 </td>
            <td>
              <select
              name="course2"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
            
            <tr>
            <td> 3 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr >
            <td> 4 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>

                      
            <tr>
            <td> 5 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr>
            <td> 6 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr>
            <td> 7 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr>
            <td> 8 </td>
            <td>
              <select
              name="course8"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr>
            <td> 9 </td>
            <td>
              <select
              name="course9"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr>
            <td> 10 </td>
            <td>
              <select
              name="course3"
              className="custom-select"
              value={course?.courseId}
              onChange={(e)=>
              {
                selectCourse(e)
              }
              }
               >
              {
                courselist.map((e) => (
                  <option key={e.courseId} value={e.courseId} >
                     {e.courseTitle}
                  </option>
                )
                )
              }
              </select>
            </td>
            {course ? (
            <td value={course?.courseCode} >{course?.courseCode}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseUnit} >{course?.courseUnit}</td>
            ) : ( "") }
            {course ? (
            <td value={course?.courseType} >{course?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>

            
      
  </tbody>
</table>
{/* <div>
<button onClick={includeCourse} className="btn btn-sm bg-primary" >Add Course</button>
</div> */}
 <div>
    <p>
      Total Max Unit: 23
    </p>
    <p id='foot' >
      Total Selected Unit: 23
    </p>
  </div>
                </div>
            </div>
            <div>
            <p>Student's Signature ......................................................................................................................................................... Date...................................................................................................................</p>
                                 <p>FOR OFFICIAL USE ONLY</p>
             <p>Approval of Departmental Registration Officer</p>
             <p> Name/Signature ................................................................................................................................................................ Date .................................................................................................................</p>
             <p>Approval of Head Of Department</p>
             <p> Name/Signature ................................................................................................................................................................ Date .................................................................................................................</p>
             <p>Endorsement of School Officer [for Dean]</p>
                 <p> Name/Signature ..................................................................................................................................................................... Date ............................................................................................................</p>
            
            </div>
        </div>
    )
}

export default Register
