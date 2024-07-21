
import { useState } from "react";
import Alert from "./componenets/Alert";
import { Buttons } from "./componenets/Buttons";

function App() {

  const [alertVisible,setAlertVisibility] = useState(false);

  

  return(

    
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Buttons color="primary" onClick={() =>setAlertVisibility(true)}>My Button</Buttons>
      
    </div>
  );
}

export default App;


// // eslint-disable-next-line prefer-const
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleSelectItem =(item : string) =>{
  //   console.log(item);
  // }

  // return (
  //   <div>
  //     <ListGroup  items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  //   </div>
  // );

{/* <Alert>
  Hello <span>World</span>
</Alert>  */}