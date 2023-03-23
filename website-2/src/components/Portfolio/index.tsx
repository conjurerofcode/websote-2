import { motion } from "framer-motion";
import MotionPath from "../MotionPath";
import Card from "./Card.tsx";
import { CardItems } from "../../const";
import CardImage from "./Card.tsx/CardImage";
import CardInfo from "./Card.tsx/CardInfo";
import CardTitle from "./Card.tsx/CardTitle";
import CardDescription from "./Card.tsx/CardDescription";
import CardLink from "./Card.tsx/CardLink";
import CardKeywords from "./Card.tsx/CardKeywords";
import { CardType } from "../../types";

const Portfolio = () => {
  const exCard = CardItems[0];
  // const cards = [1, 2, 3, 4];
  // const rows = Math.ceil(cards.length / 2);
  return (
    <motion.div className="w-full h-full min-w-screen min-h-[85vh] flex flex-col items-center justify-center">
      {cards}
      
    </motion.div>
  );
};
const cards = CardItems.map((card: CardType, index: number) => {
  return(
  <motion.div className="h-[40vh] min-h-[400px]  w-full flex flex-row items-center" >
  <Card
    card={card}
    index={index}
    image={<CardImage />}
    title={<CardTitle />}
    info={
      <CardInfo>
        <CardDescription />
        <CardKeywords />
        <CardLink />
      </CardInfo>
    }
  />
  </motion.div>
  )
})

export default Portfolio;

//
{
  /* <motion.div
        className={`h-full min-h-[75vh] w-full grid grid-cols-2 grid-rows-${rows} place-items-center  bg-slate-500 gap-5`}
      >
        <Card></Card>
        {cards.map((card, idx) => {
          return <Card  />;
        })}
      </motion.div> */
}
