import Image from "next/image";
import {
  Avatar,
  Card,
  CardHeader,
  Container,
  Typography,
  makeStyles,
} from "@mui/material";

import f1 from "../assets/f1.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <Container>
      <Card className="border-2 w-60 p-3">
        <CardHeader
          avatar={<Avatar>{product.brand[0]}</Avatar>}
          title={product.brand}
          className=""
        />
        <Image src={f1} />
        <Typography className="mt-2">
          <Link href="./productdetails">{product.name} </Link>
        </Typography>
        <Typography className="mt-2">See more</Typography>
      </Card>
    </Container>
  );
};

export default ProductCard;
