import { Container, Grid, Typography } from "@mui/material";
import Banner from "./components/banner";
import Footer from "./components/footer";
import RepairServices from "./components/repairService";
import ProductList from "./productList";
import Image from "next/image";

import Example from "./components/carousel";

const Home = () => {
  return (
    <container>
      <header>
        <Example />
      </header>
      <body>
        <ProductList
          url=" http://localhost:8000/products"
          title="Featured Products"
        />
        <RepairServices />
        <Banner />
        <ProductList
          url=" http://localhost:8000/newarrival"
          title="New arrivals"
        />
      </body>
    </container>
  );
};

export default Home;
