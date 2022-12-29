import Accordion from "../components/Accordion";

function AccordionPage() {
  const items= [
    {
      id: 1,
      lable: '1. Can i use react for this Project',
      content: '1. Yes! you can use React for this project. Yes! you can use React for this project. Yes! you can use React for this project. '
    },
    {
      id: 2,
      lable: '2. Can i use react for this Project',
      content: '2. Yes! you can use React for this project. Yes! you can use React for this project. Yes! you can use React for this project. '
    },
    {
      id: 3,
      lable: '3. Can i use react for this Project',
      content: '3. Yes! you can use React for this project. Yes! you can use React for this project. Yes! you can use React for this project. '
    }
  ]

  return (
    <div>
     <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;
