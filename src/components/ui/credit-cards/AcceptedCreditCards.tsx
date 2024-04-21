import { Badge } from "@/components/ui/badge";

type Cards = {
  cards: any[];
};

export default function AcceptedCreditCards({ cards }: Cards) {
  const mappedAcceptedCreditCards = cards.map((card) => (
    <Badge key={card}>{card}</Badge>
  ));
  console.log("cards", cards);

  return <>{mappedAcceptedCreditCards}</>;
}
