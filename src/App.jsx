import Student from './Student.jsx'


function App(){

  return(
    <>
      <Student name="Umair" age={25} isStudent="true"/>
      <Student name="Ali" age={30} isStudent="false" />
      <Student name="Abdullah" age={23} isStudent="true" />
      <Student name="Junaid" age="28" isStudent="false"/>

     

    </>
  );
}

export default App