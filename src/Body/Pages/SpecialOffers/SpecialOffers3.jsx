import React from "react";
import { Box } from "@mui/material";
import Images from "../../../Assets/Images/Image";
import { ColorPalette } from "../../../Assets/Colors";
import CommitmentCards from "../../../Common_Components/CommitmentCards";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyCnyCircleLine } from "react-icons/ri";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background:ColorPalette.gradient
    
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
    paddingTop: "50px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    color: ColorPalette.tagline,
    textAlign: "center",
    marginTop: "5px",
  },
  secondBox: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row"
    },
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
    width: "100%",
    gap: {
      xs: "20px",
      md: "50px"
    },
    padding:{xs:'20px', md:'50px'}
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  imageContainerWrapper: {
    display: {
      xs: "none",
      md: "flex"
    },
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    backgroundColor: "#FAEBE1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "550px",
    width: "550px",
    padding: "20px",
  },
};

const SpecialOffers3 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>

        <Box>
          <Box sx={styles.headingLine}>
            Our <span style={styles.highlight}>Commitments</span> to You
          </Box>
          <Box sx={styles.tagline}>
            Exceeding expectations with every promise we make.
          </Box>
        </Box>


        <Box sx={styles.secondBox}>
          <Box sx={styles.cardColumn}>
            <CommitmentCards
              icon={<CiDeliveryTruck size={50} style={{ background: ColorPalette.pink, color: "white" }} />}
              title={"Free Shipping"}
              tag={"Enjoy the convenience of free shipping on all orders!"}
              boxbg={ColorPalette.pink}
            />
            <CommitmentCards
              icon={<RiMoneyCnyCircleLine size={50} style={{ background: ColorPalette.violet, color: "white" }} />}
              title={"Unique Packaging"}
              tag={"Experience our commitment to uniqueness with every order."}
              boxbg={ColorPalette.violet}
            />
          </Box>


          <Box sx={styles.imageContainerWrapper}>
            <Box sx={styles.imageContainer}>
              <img
                src={Images.CommitmentIcecream}
                alt="Commitment Icecream"
                style={styles.image}
              />
            </Box>
          </Box>

          <Box sx={styles.cardColumn}>
            <CommitmentCards
              icon={<CiDeliveryTruck size={50} style={{ background: ColorPalette.pink, color: "white" }} />}
              title={"100% Money Back"}
              tag={"Rest assured with our money-back guarantee at any time."}
              boxbg={ColorPalette.pink}
            />
            <CommitmentCards
              icon={<RiMoneyCnyCircleLine size={50} style={{ background: ColorPalette.violet, color: "white" }} />}
              title={"Fast Delivery"}
              tag={"Experience swift and efficiently reliable delivery with us"}
              boxbg={ColorPalette.violet}
            />
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default SpecialOffers3;
