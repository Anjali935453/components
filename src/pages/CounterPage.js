import { useReducer } from "react"
import Button from "../components/Button"
import Counter from "../components/Counter"
import Panel from "../components/Panel"

const reducer = (state, action)=>{
    if(action.type==='increment'){
        return {
            ...state,
            count: state.count+1
        }
    } else if(action.type==='decrement'){
        return {
            ...state,
            count: state.count-1
        }
    } else if(action.type==='handleChange'){
        return {
            ...state,
            valueToAdd: action.value
        }
    } else if(action.type==='handleSubmit'){
        return {
            ...state,
            count: state.count + (+state.valueToAdd),
            valueToAdd: 0
        }
    }
    return state
   
}

const CounterPage =()=>{

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        valueToAdd:0
    })
    // const [count, setCount] = useState(0)
    // const [valueToAdd, setValueToAdd] = useState(0)
    
    const increment = ()=>{
        // setCount(count+1)
        dispatch({
            type: "increment"
        })
    }
    const decrement = ()=>{
        // setCount(count-1)
        dispatch({
            type: "decrement"
        })
    }
    const handleChange=(event)=>{
        // setValueToAdd(event.target.value)
         dispatch({
            type: 'handleChange',
            value: event.target.value
         })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        // setCount(count+(+valueToAdd))
        // setValueToAdd(0)
        dispatch({
            type : 'handleSubmit'
        })
    }
    return (
        <Panel className='m-3'>
            <Counter/>
            <h1 className="text-lg">Count : {state.count}</h1>
            <div className="flex flex-row">
                <Button primary rounded outline onClick={increment}>Increment</Button>
                <Button primary rounded outline onClick={decrement}>Decrement</Button>
            </div>
            <form  onSubmit={handleSubmit}>
                <label>Add a lot! </label>
                <input type='number' value={state.valueToAdd||""} onChange={handleChange} className='p-1 m-3 bg-gray-50 border border-gray-300'/>
                <Button>Add It!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage