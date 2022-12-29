
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";

function ButtonPage() {
// const handleClick = ()=>{
//   return console.log('click')
// }

  return (
    <div>
      <div>
        <Button primary rounded  className='mb-2'><GoBell/> Click 1</Button>
      </div>
      <div>
        <Button secondary><GoCloudDownload/>Click 2</Button>
      </div>
      <div>
        <Button danger outline><GoDatabase/>Click 3</Button>
      </div>
      <div>
        <Button success >Click 4</Button>
      </div>
      <div>
        <Button>Click 5</Button>
      </div>
      <div>
        <Button warning outline>Click 6</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
