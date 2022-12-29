import classNames from 'classnames'

const Panel =({children, className, ...rest})=>{
const finalClassnames = classNames(rest, "border rounded p-3 shadow bg-white w-full", className)

    return <div {...rest} className={finalClassnames} >{children}</div>
}

export default Panel