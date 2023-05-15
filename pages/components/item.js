import { Card, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Item(props) {
  return (
    <Container>
      <Card className="border-2  p-3 h-80 mt-20">
        <Image src={props.item.name} className="w-full h-36" />
        <Typography className="mt-2 text-center">
          {props.item.description}
        </Typography>
      </Card>
    </Container>
  );
}
