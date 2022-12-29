import Dropdown from "../components/Dropdown";
import { useState} from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null)
  const handleSelect = (option)=>{
    setSelection(option)
  }

  const options =[ 
    {lable : 'Red', value: 'red'},
    {lable : 'Blue', value: 'blue'},
    {lable : 'Black', value: 'black'},
    {lable : 'Yellow', value: 'yellow'}
  ]

  return (
    <div className="flex">
     <Dropdown  options={options} value={selection} onChange={handleSelect}/>
    </div>
  );
}

export default DropdownPage;
