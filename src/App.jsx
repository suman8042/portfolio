import React from 'react';

import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin , faHtml5, faCss3Alt, faReact, faNodeJs, } from '@fortawesome/free-brands-svg-icons';
function App() {
 
  return (
    
    <div className="flex bg-black text-white min-h-screen ">
    <div className=" lt  fixed top-0 left-0 w-1/2 h-full "><div className="pl-52 pt-24"><div className="pt-3 text-5xl font-bold ">Suman Kumari</div>
    <div className="pt-8 text-2xl">MERN developer</div>
    <div className="pt-2">"Crafting dynamic web solutions."
</div>
  <div className="pt-24"> <div >   <a href="#section" className=" mr-4">
        About
        </a></div>
    <div className="pt-6">
    <a href="#section1" className=" mr-4">
          projects
        </a></div>

      
     
    <div className="pt-6">
    <a href="#section2" className=" ">
       Experience
        </a>
        </div>
   
    
    
    </div> 
    <div className="pt-20 pl-5 flex gap-8">
   

      <a href="https://github.com/suman8042" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/suman-kumari-1681522a6/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
   
    </div>
    
    </div>
    
 
    </div>



    <div className="rt ml-[75%] md:ml-[50%]  pt-40 pl-4 "> <div id="section" className="pr-48  font-mono leading-[3] text-green-200 ">A    passionate  MERN stack developer with hands-on experience in building full-stack web applications. Skilled in crafting dynamic UIs with React and developing robust backends with Node.js, Express, and MongoDB. Ready to bring ideas to life and contribute to impactful projects.
  </div>

  
    <div id ="section1">
 <div className=" mt-20 font-bold text-4xl text-yellow-100">projects    
    </div>
     
 <a href="https://github.com/suman8042/fullStack_TOdoList" target="_blank" rel="noopener noreferrer">
     
      
    <div  className=" mt-28 flex gap-5  mr-48 hover:bg-slate-600">
      
      <div>
        <div className="font-bold  p-2">FullStack TOdoList</div>
        <div className="p-4">Developed a Full Stack To-Do List application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented real-time task management features with React, built a robust RESTful API with Node.js and Express, and designed a responsive UI with Tailwind CSS for an optimal user experience.</div>
        <div className="p-4 flex gap-4"><div><FontAwesomeIcon icon={faHtml5} size="2x" /></div>
        <div><FontAwesomeIcon icon={faReact} size="2x" /></div>
        <div><FontAwesomeIcon icon={faNodeJs} size="2x" /></div>
        <div><FontAwesomeIcon icon={faCode} size="2x" /></div>
       
        </div>
      </div>
    </div></a>
    

    <a href="https://github.com/suman8042/React_to_d0_list_using_LocalStorage" target="_blank" rel="noopener noreferrer">
    
      
    <div  className=" mt-40 flex gap-5  mr-48 hover:bg-slate-600">
      
      <div>
        <div className="font-bold  p-2">React_toDoList</div>
        <div className="p-4">Built a To-Do List application using React, leveraging localStorage for persistent task management. Implemented features for adding, editing, and deleting tasks with a user-friendly interface, ensuring data is retained across page reloads.</div>
        <div className="p-4 flex gap-4">
        <div><FontAwesomeIcon icon={faReact} size="2x" /></div>
      
       
       
        </div>
      </div>
    </div></a>
    <a href="https://github.com/suman8042/Drumkit" target="_blank" rel="noopener noreferrer">
    
    <div  className=" mt-40 flex gap-5  mr-48 hover:bg-slate-600">

      <div>
        <div className="font-bold  p-2">Drumkit web application</div>
        <div className="p-4">Developed a Drumkit web application using JavaScript, allowing users to play drums by clicking on screen buttons or pressing keyboard keys. Implemented sound effects and animations to create an interactive and engaging user experience.</div>
        <div className="p-4 flex gap-4"><div><FontAwesomeIcon icon={faHtml5} size="2x" /></div>
        
        <div><FontAwesomeIcon icon={faNodeJs} size="2x" /></div>
        <div><FontAwesomeIcon icon={faCode} size="2x" /></div>
       
        </div>
      </div>
    </div></a>
    </div>



    
<div id="section2">
<div className=" mt-20 font-bold text-4xl text-yellow-100">Experience</div>
    <div  className="mt-28 flex gap-5 mr-48  hover:bg-slate-600">
      <div >7/23  8/23</div>
      <div>
        <div className="font-bold  p-2">Solar Secure Solutions — Full Stack Developer Intern</div>
        <div className="p-4">
        Developed responsive UIs with HTML, CSS, and JavaScript, improving interaction by 30%. Optimized backend processes with Node.js and Express, enhancing performance by 20%. Integrated RESTful APIs and managed MongoDB, reducing data load times by 15%. Debugged and optimized applications, improving user experience by 25%.</div>
        <div className="p-4 flex gap-4"><div><FontAwesomeIcon icon={faHtml5} size="2x" /></div>
        <div><FontAwesomeIcon icon={faReact} size="2x" /></div>
        <div><FontAwesomeIcon icon={faNodeJs} size="2x" /></div>
        <div><FontAwesomeIcon icon={faCode} size="2x" /></div>
       
        </div>
      </div>
    </div>
    

    <div  className="mt-40 flex gap-5 mr-48  hover:bg-slate-600 mb-20">
      <div >7/23  8/23</div>
      <div>
        <div className="font-bold  p-2"> Bharat Intern — Full Stack Developer Intern</div>
        <div className="p-4">
       
        Focused on React and JavaScript for full-stack development, boosting performance by 20%. Collaborated on UI enhancements with a team, increasing user engagement by 15%.</div>
        <div className="p-4 flex gap-4"><div><FontAwesomeIcon icon={faHtml5} size="2x" /></div>
        <div><FontAwesomeIcon icon={faReact} size="2x" /></div>
        <div><FontAwesomeIcon icon={faNodeJs} size="2x" /></div>
        <div><FontAwesomeIcon icon={faCode} size="2x" /></div>
       
        </div>
      </div>
    </div>






    </div>
    </div>
    </div>
    
      
    
  )
}

export default App
