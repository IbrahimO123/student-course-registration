import React, {useState, useCallback, useEffect, useRef } from 'react'
import FutaLogo from '../Images/Logo/futaLogo.png'

function Register() {
    /* const styleReg = {
         backgroundImage : `url(${bg_2})`
     } */
/////////////////////////////--------------------------Course Change------------------///////////////////////////////
const [course, setCourse] = useState([]);
const [course2, setCourse2] = useState([]);
const [course3, setCourse3] = useState([]);
const [course4, setCourse4] = useState([]);
const [course5, setCourse5] = useState([]);
const [course6, setCourse6] = useState([]);
const [course7, setCourse7] = useState([]);
const [course8, setCourse8] = useState([]);
const [course9, setCourse9] = useState([]);
const [course10, setCourse10] = useState([]);
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
const selectCourse = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse(selectedcoursetate);
};
const selectCourse2 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse2(selectedcoursetate);
};
const selectCourse3 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse3(selectedcoursetate);
};
const selectCourse4 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse4(selectedcoursetate);
};
const selectCourse5 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse5(selectedcoursetate);
};
const selectCourse6 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse6(selectedcoursetate);
};
const selectCourse7 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse7(selectedcoursetate);
};
const selectCourse8 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse8(selectedcoursetate);
};
const selectCourse9 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse9(selectedcoursetate);
};
const selectCourse10 = (e) => {
  const selectedCourseId =  e.target.value;
  const selectedcoursetate = courselist.filter(
    (e) => e.courseId === Number(selectedCourseId)
  )[0];
  setCourse10(selectedcoursetate);
};
const table = useRef(' ');

const AddUnitValue = () => {
  let trLength =  document.querySelectorAll("tr").length
  console.log(trLength);
  let sumValue = 0;
   for (let i = 1; i < trLength; i++) {
     let totalUnit = document.querySelector("#table")
    sumValue = sumValue + parseInt(Number(totalUnit.rows[i].cells[3].innerHTML));
    console.log(sumValue);
     let totalCourseUnit = 10;
     let unClickable = document.querySelector('#submit');
     let max_unit = document.querySelector("#max_unit")
     if (sumValue > totalCourseUnit ) {
       unClickable.disabled = true;
       max_unit.innerHTML += `Total Selected Unit: ${sumValue}`
     }
     else {
       unClickable.disabled = false;
     }
   };
};
const styleFornav = {
 paddingTop : 70,
}

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
///////////////////////////////////----------------Return HTML---------------/////////////////////////////////////////
    return (
        <div className="container bg-info border border-dark" style={styleFornav} id="register">
        <form>
        <header className="text-center" >
        <img className="img img-fluid mt-n5 pt-2 logo2" alt="Futa Logo" src={FutaLogo} ></img> 
        <div className="w-75 d-inline-block" >
               <p className="heading-5" >FEDERAL UNIVERSITY OF TECHNOLOGY, AKURE</p>
                <p className="post" >PMB 704, AKURE, ONDO STATE OF NIGERIA</p>
             <p className="h5"> COURSE REGISTRATION </p>
        </div>
        </header>
            <div className="container py-5">    
                <div className="w-50 clearfix">
                    <p >{student.full_name.toUpperCase()}</p>
                    <p>Reg./Matric No: {student.matric_No}</p>
                    <p >School: {student.school}</p>
                    <p>Course Of Study: {student.department}</p>
                    <p>Phone No/Email: (+234)9038961332/oliyideibrahim123@gmail.com</p>
                    <p>Date: {today}</p>
                </div>
                
                <div className="d-flex justify-content-between" >
            <div >
            <label htmlFor="session" >Session:</label>
                <select required className="custom-select" name="session" id="session">
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
                <select required className="custom-select d-inline" name="semester" id="semester">
                    <option value="Second Semester" > Second Semester</option>
                    <option value="First Semester" > First Semester</option>
                </select>
            </div>
            <div>
            <label htmlFor="level" >Level:</label>
                <select id="level" required name="level" className="custom-select d-inline"  placeholder="Choose Level" >
                    <option value="500" > 500</option>
                    <option value="400" > 400</option>
                    <option value="300" > 300</option>
                    <option value="200" > 200</option>
                    <option value="100" > 100</option>
                    
                </select>
            </div>
            </div>
        </div>
  <div className="table-responsive" >
  <table id="table" name="table" ref={table} className="container container-fluid table table-primary table-striped table-hover table-bordered">
  <thead>
   <tr name="heading" id="heading" onLoad={AddUnitValue()} >
      <th name="s/n" scope="col">S/N</th>
      <th name="course_title" scope="col">Course Title</th>
      <th name="course_code" scope="col">Course Code</th>
      <th name="course_unit" scope="col" id="unit" >Course Unit</th>
      <th name="course_type" scope="col">Course Type</th>
      <th name="curriculum" scope="col">Curriculum</th>
    </tr>
  </thead>
  <tbody>
      
            <tr name="course1" >
            <td> 1 </td>
            <td>
              <select required
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
            <td id="courseUnit1" value={course?.courseUnit} >{course?.courseUnit}</td>
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

            
            <tr name="course2"  >
            <td> 2 </td>
            <td>
              <select required
              name="course2"
              className="custom-select"
              value={course2?.courseId}
              onChange={(e)=>
              {
                selectCourse2(e)
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
            {course2 ? (
            <td value={course2?.courseCode} >{course2?.courseCode}</td>
            ) : ( "") }
            {course2 ? (
            <td value={course2?.courseUnit} >{course2?.courseUnit}</td>
            ) : ( "") }
            {course2 ? (
            <td value={course2?.courseType} >{course2?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
            
            <tr name="course3">
            <td> 3 </td>
            <td>
              <select required
              name="course3"
              className="custom-select"
              value={course3?.courseId}
              onChange={(e)=>
              {
                selectCourse3(e)
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
            {course3 ? (
            <td value={course3?.courseCode} >{course3?.courseCode}</td>
            ) : ( "") }
            {course3 ? (
            <td value={course3?.courseUnit} >{course3?.courseUnit}</td>
            ) : ( "") }
            {course3 ? (
            <td value={course3?.courseType} >{course3?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr name="course4" >
            <td> 4 </td>
            <td>
              <select required
              name="course4"
              className="custom-select"
              value={course4?.courseId}
              onChange={(e)=>
              {
                selectCourse4(e)
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
            {course4 ? (
            <td value={course4?.courseCode} >{course4?.courseCode}</td>
            ) : ( "") }
            {course4 ? (
            <td value={course4?.courseUnit} >{course4?.courseUnit}</td>
            ) : ( "") }
            {course4 ? (
            <td value={course4?.courseType} >{course4?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>

                      
            <tr name="course5">
            <td> 5 </td>
            <td>
              <select required
              name="course5"
              className="custom-select"
              value={course5?.courseId}
              onChange={(e)=>
              {
                selectCourse5(e)
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
            {course5 ? (
            <td value={course5?.courseCode} >{course5?.courseCode}</td>
            ) : ( "") }
            {course5 ? (
            <td value={course5?.courseUnit} >{course5?.courseUnit}</td>
            ) : ( "") }
            {course5 ? (
            <td value={course5?.courseType} >{course5?.courseType}</td>
            ) : ( "") }
           
            <td>
        <select className="custom-select" >
          <option>New</option>
          <option>Carryover</option>
        </select>
      </td>
            </tr>
                      
            <tr name="course6">
            <td> 6 </td>
            <td>
              <select required
              name="course6"
              className="custom-select"
              value={course6?.courseId}
              onChange={(e)=>
              {
                selectCourse6(e)
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
            {course6 ? (
            <td value={course6?.courseCode} >{course6?.courseCode}</td>
            ) : ( "") }
            {course6 ? (
            <td value={course6?.courseUnit} >{course6?.courseUnit}</td>
            ) : ( "") }
            {course6 ? (
            <td value={course6?.courseType} >{course6?.courseType}</td>
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
              name="course7"
              className="custom-select"
              value={course7?.courseId}
              onChange={(e)=>
              {
                selectCourse7(e)
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
            {course7 ? (
            <td value={course7?.courseCode} >{course7?.courseCode}</td>
            ) : ( "") }
            {course7 ? (
            <td value={course7?.courseUnit} >{course7?.courseUnit}</td>
            ) : ( "") }
            {course7 ? (
            <td value={course7?.courseType} >{course7?.courseType}</td>
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
              value={course8?.courseId}
              onChange={(e)=>
              {
                selectCourse8(e)
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
            {course8 ? (
            <td value={course8?.courseCode} >{course8?.courseCode}</td>
            ) : ( "") }
            {course8 ? (
            <td value={course8?.courseUnit} >{course8?.courseUnit}</td>
            ) : ( "") }
            {course8 ? (
            <td value={course8?.courseType} >{course8?.courseType}</td>
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
              value={course9?.courseId}
              onChange={(e)=>
              {
                selectCourse9(e)
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
            {course9 ? (
            <td value={course9?.courseCode} >{course9?.courseCode}</td>
            ) : ( "") }
            {course9 ? (
            <td value={course9?.courseUnit} >{course9?.courseUnit}</td>
            ) : ( "") }
            {course9 ? (
            <td value={course9?.courseType} >{course9?.courseType}</td>
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
              name="course10"
              className="custom-select"
              value={course10?.courseId}
              onChange={(e)=>
              {
                selectCourse10(e)
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
            {course10 ? (
            <td value={course10?.courseCode} >{course10?.courseCode}</td>
            ) : ( "") }
            {course10 ? (
            <td value={course10?.courseUnit} >{course10?.courseUnit}</td>
            ) : ( "") }
            {course10 ? (
            <td value={course10?.courseType} >{course10?.courseType}</td>
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
 <div id="complete" >
    <p id="max_unit">
    </p>
    <p >
    <button id='submit' name="submit" className="btn btn-lg btn-primary text-center" >Submit</button>  
    </p>
  </div>
                </div>
            <div>
            <p>Student's Signature ..........................................<input type="file" ></input> Date..............................................................................</p>
                                 <p className="text-center border border-dark">FOR OFFICIAL USE ONLY</p>
             <p>Approval of Departmental Registration Officer</p>
             <p> Name/Signature ................................................<input type="file" ></input>Date .............................................................................</p>
             <p>Approval of Head Of Department</p>
             <p> Name/Signature ................................................<input type="file" ></input> Date ..........................................................................</p>
             <p>Endorsement of School Officer [for Dean]</p>
                 <p> Name/Signature ................................................<input type="file" ></input> Date .......................................................................</p>
            
            </div>
            </form>
        </div>
    )
}

export default Register
