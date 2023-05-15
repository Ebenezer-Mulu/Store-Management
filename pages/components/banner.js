import Image from "next/image";
import b10 from "../../public/img/banner/b10.jpg";
import b17 from "../../public/img/banner/b17.jpg";
import { Grid, Typography } from "@mui/material";

const banner = [
  {
    img: b17,
    header: "Crazy deals",
    phrase: "buy 3 get 1 free",
    text: "The best classic dress is on sale ",
    btn_text: "Learn More",
    id: 1,
  },
  {
    img: b10,
    header: "Spring Summer",
    phrase: "Upcomming season ",
    text: "The best classic dress is on sale ",
    btn_text: "Collection",
    id: 2,
  },
];

const Banner = () => {
  return (
    <Grid container spacing={3}>
      {banner.map((ban) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sm={12}
          key={banner.id}
          className="bg-gray-300 w-full h-128 relative"
        >
          <Image
            src={ban.img}
            className="w-full h-full object-cover absolute mix-blend-overlay "
          />
          <div className="text-white text-center mt-24">
            <Typography variant="h5" className="text-2xl">
              {ban.header}
            </Typography>
            <Typography variant="h6">{ban.phrase}</Typography>
            <Typography>{ban.text}</Typography>
            <button className="bg-white w-32 h-8 rounded-md text-black">
              {ban.btn_text}
            </button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Banner;

{
  /*
        {products.map((product) => (
          <Grid item xs={12} md={6} lg={3} sm={6} key={product.id}>
            <ProductCard product={product} />
          </Grid> */
}
