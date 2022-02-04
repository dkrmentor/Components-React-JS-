import React from "react";
import Header2 from "./components/Header2";
import Footer2 from "./components/Footer2"
import './App.css';
import BasicTextFields from "./components/Textfield";
import {A,B,C} from "./components/multiple.js" 
import Head from "./components/Tophead";
import {Child,Child2} from "./components/Child";
function App() {
  let heading = "REACT JS";
  let arre =[{text:"all type of components usage"},{text:"pass props in each of them"}]
  return (

    <div>
      <Head />
      <h1>
        LETS STUDY BASICS OF {heading}      </h1>
 <p>  (     imp note : if u want that ur shortcut keys works then change the file extention from .js to jsx and also from index.js)

 </p>
      <ul>
        {/* <li>
          {arre[0].text}
          </li>
          <li>
          {arre[1].text}
        </li> */}
{/*avoid repetation by using map */}
  
  {/* How map works */}
        {arre.map((item,index)=>{
              // console.log(item.text)
          return <li key = {index}>            
            {item.text}

          </li>

      
        })}
      </ul>
      <h1>
        1. COMPONENTS
      </h1>
      
        <h1>1.1 INTERNAL / SAME FILE COMPONENTS</h1>
  

      <Header />

      <h2 style={{color:"grey"}}> I am Main Component</h2>
      <h3>self closing tag must have slash at end</h3>
      <img width="250" src="https://th.bing.com/th/id/OIP.K7PTVT6HL636HDgO3R8HewHaF5?pid=ImgDet&rs=1" alt=""/>



      <Footer />

      <h1>1.2 EXTERNAL / OTHER FILE COMPONENTS</h1>
      <h2>
       1.2.1: header from header.js and footer from footer.js
      </h2>
      <Header2 />
     
      <Footer2 />

      <h2>
       1.2.2: multiple component from one file
      </h2>


<A />
<B />
<C />

<h1>
  2.Props
</h1>

<h1>
  2.1 Internal Props 
</h1>
<div>
  <Welcome name="dhara"/>
</div>


<h1>2.2 External Props ( Calling child components from child.js and providing props (parent to child))</h1>
<div>
  <Child title="firstchild" name="ali" age="19" />
<Child title="secondchild" name="basit" age="21" />
<Child title="thirdchild" name="shehzad" age="25" />
<Child title="fourthchild" name="ehsan" age="16" />

</div>


<h1>
  2.3 Using functionu can get data from child to parent
</h1>


<h4>
  make function
</h4>

<Child2 gettdata = {gettdata} />


<h1>
  extra
</h1>

      <p>
        add bootstrap by going to react bootstrap page and install bootstrap
      </p>
      <button type="button" className="btn btn-secondary">Secondary</button>



      <p>
        add msterial ui (library for react premade components) go to material ui and install
      </p>
      <p>
        textfield of material ui (calling external component here)
      </p>

      <BasicTextFields />













    </div>

  );
}


function Header(){
  return (
    <div className='header'>
      <h2 style={{color:"white"}}>
      I am Header Component
      </h2>
    </div>
  )

}


function Footer(){
  return (
    <div className='footer'>
      <h2 style={{color:"white"}}>
  
      I am Footer Component
      </h2>
    </div>
  )

}


function Welcome(props){
  return(
    <div>
     Welcome, {props.name}
    </div>
  )

}

function gettdata(data){
  console.log(data);

}


export default App;
