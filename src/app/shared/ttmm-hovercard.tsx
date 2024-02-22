import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const TtmmInfoHoverCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-lg">
          TTMM <InfoCircledIcon className="ml-1" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-center text-sm font-normal">
        TTMM (Tera Tu Mera Mai)
      </HoverCardContent>
    </HoverCard>
  );
};

export default TtmmInfoHoverCard;
