import { useState } from "react"
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
const Accordion=({items})=>{

    const [expendedIndex, setExpendedIndex] = useState(-1);

    const renderedItem = items.map((item, index)=>{
        const isExpended = index === expendedIndex;
        const icon = <span className="text-2xl">{isExpended ? <GoChevronDown/> : <GoChevronLeft/>}</span>
        const handleClick = (nextIndex)=>{
            expendedIndex===nextIndex ? setExpendedIndex(-1) : setExpendedIndex(nextIndex)
        }
        
        return (
            <div key={item.id}>
                
                <div className="flex p-3 bg-gray-50 justify-between border-b item-center cursor-pointer" onClick={()=>handleClick(index)}>{item.lable} {icon}</div>
                {isExpended && <div className="border-b p-5" >{item.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded" style={{'width': "500px"}}>{renderedItem}</div>
    )
}

export default Accordion