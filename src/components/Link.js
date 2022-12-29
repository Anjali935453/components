
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({to, newpage,className, children, activeClassName})=>{
    const {navigate, currentPath} =  useNavigation()

    const classes = classNames('text-blue-500', className, currentPath===to && activeClassName)
    const handleClick = (event)=>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        // var newPage = event.target.getAttribute('data-newpage')
        // newPage === 'true' ? navigateNewTab(to) : 
        navigate(to)
    }

    // return <a className={classes} data-newpage={newpage || false} href={to} onClick={handleClick}>{children}</a>
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>

}

export default Link

