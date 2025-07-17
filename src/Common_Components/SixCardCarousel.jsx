// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import Button from "./Button";
// import { ColorPalette } from "../Assets/Colors";
// import { addToCart } from "../Redux/Reducer";
// import { padding } from "@mui/system";
// import { auth } from "../Firebase"; 
// import { db } from "../Firebase";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "30px",
//     margin: "40px 0",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     flexWrap: "wrap",
//   },
//   card: {
//     width: "250px",
//     boxShadow: "0 0 15px rgba(255, 60, 172, 0.2)",
//     borderRadius: "10px",
//     textAlign: "center",
//     // padding: "15px",
//     paddingBottom:'15px',
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover",
//     borderRadius: "10px",
//     marginBottom: "10px",
//   },
//   title: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     margin: "5px 0",
//     color: "#000",
//   },
//   price: {
//     fontSize: "20px",
//     color: ColorPalette.violet,
//     fontWeight: "bold",
//   },
//   rating: {
//     fontSize: "16px",
//     color: "#000",
//   },
//   pagination: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginTop: "30px",
//   },
//   arrow: {
//     fontSize: "24px",
//     cursor: "pointer",
//     border: "none",
//     background: "none",
//     color: "#444",
//   },
//   page: {
//     width: "30px",
//     height: "30px",
//     borderRadius: "5px",
//     backgroundColor: "#E3E4E5",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
//   activePage: {
//     backgroundColor: "#FF3CAC",
//     color: "#fff",
//   },
// };

// const SixCardCarousel = ({ data = [] }) => {

//   const handleAddToCart = async () => {
//   const user = auth.currentUser;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   if (user) {
//     const userId = user.uid;

//     const item = {
//       id,           // ✅ just id, not heading
//       name: heading,
//       image: img,
//       price,
//       rating,
//       tagline,
//       quantity: quantity || 1, // ✅ Use given quantity or default to 1
//     };

//     dispatch(addToCart(item));
//     alert("Item added to cart!");

//     try {
//       const cartRef = doc(db, "users", userId, "cart", item.id);
//       await setDoc(cartRef, item); // ✅ Save full item to Firestore
//       console.log("Item added to Firestore cart!");
//     } catch (error) {
//       console.error("Error saving to Firestore:", error);
//     }

//   } else {
//     alert("Please login to add items to cart.");
//     navigate("/login");
//   }
// };

//   const dispatch = useDispatch();
//   const itemsPerPage = 6;
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const [pageIndex, setPageIndex] = useState(0);

//   const start = pageIndex * itemsPerPage;
//   const currentItems = data.slice(start, start + itemsPerPage);

//   const topRow = currentItems.slice(0, 3);
//   const bottomRow = currentItems.slice(3, 6);

//   const goToPage = (i) => setPageIndex(i);

//   const Card = (item) => (
//     <Box key={item.id} style={styles.card}>
//       <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
//         <img src={item.images[0]} alt={item.name} style={styles.image} />
//         <h3 style={styles.title}>{item.name}</h3>
//         <p style={styles.rating}>⭐ {item.rating} / 5</p>
//         <p style={styles.price}>$ {item.price}</p>
//       </Link>
//       <Button
//         text="Add to Cart"
//         width={130}
//         height={44}
//         bcolor={ColorPalette.pink}
//         onClick={()=>handleAddToCart(item)}
//       />
//     </Box>
//   );


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { ColorPalette } from "../Assets/Colors";
import { addToCart } from "../Redux/Reducer";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    margin: "40px 0",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  card: {
    width: "250px",
    boxShadow: "0 0 15px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    // padding: "15px",
    paddingBottom:'15px',
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "5px 0",
    color: "#000",
  },
  price: {
    fontSize: "20px",
    color: ColorPalette.violet,
    fontWeight: "bold",
  },
  rating: {
    fontSize: "16px",
    color: "#000",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "30px",
  },
  arrow: {
    fontSize: "24px",
    cursor: "pointer",
    border: "none",
    background: "none",
    color: "#444",
  },
  page: {
    width: "30px",
    height: "30px",
    borderRadius: "5px",
    backgroundColor: "#E3E4E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
  },
  activePage: {
    backgroundColor: "#FF3CAC",
    color: "#fff",
  },
};

const SixCardCarousel = ({ data = [] }) => {
  const dispatch = useDispatch();        
  const navigate = useNavigate();         

  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [pageIndex, setPageIndex] = useState(0);

  const start = pageIndex * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);

  const topRow = currentItems.slice(0, 3);
  const bottomRow = currentItems.slice(3, 6);

  const goToPage = (i) => setPageIndex(i);

  const handleAddToCart = async (item) => {
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;

      const cartItem = {
        id: item.name,
        name: item.name,
        image: item.images[0],
        price: item.price,
        rating: item.rating,
        tagline: item.tagline,
        quantity: item.quantity || 1,
      };

      dispatch(addToCart(cartItem));
      alert("Item added to cart!");

      try {
        const cartRef = doc(db, "users", userId, "cart", cartItem.id);
        await setDoc(cartRef, cartItem);
        console.log("Item added to Firestore cart!");
      } catch (error) {
        console.error("Error saving to Firestore:", error);
      }

    } else {
      alert("Please login to add items to cart.");
      navigate("/login");
    }
  };

  const Card = (item) => (
    <Box key={item.id} style={styles.card}>
      <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
        <img src={item.images[0]} alt={item.name} style={styles.image} />
        <h3 style={styles.title}>{item.name}</h3>
        <p style={styles.rating}>⭐ {item.rating} / 5</p>
        <p style={styles.price}>$ {item.price}</p>
      </Link>
      <Button
        text="Add to Cart"
        width={130}
        height={44}
        bcolor={ColorPalette.pink}
        onClick={() => handleAddToCart(item)} // ✅ Correct binding
      />
    </Box>
  );
  return (
    <Box style={styles.container}>
      <Box style={styles.row}>
        {topRow.map(Card)}
      </Box>
      <Box style={styles.row}>
        {bottomRow.map(Card)}
      </Box>

      <Box style={styles.pagination}>
        <button
          style={styles.arrow}
          onClick={() =>
            setPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
          }
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Box
            key={i}
            style={{
              ...styles.page,
              ...(i === pageIndex ? styles.activePage : {}),
            }}
            onClick={() => goToPage(i)}
          >
            {i + 1}
          </Box>
        ))}

        <button
          style={styles.arrow}
          onClick={() =>
            setPageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
          }
        >
          ›
        </button>
      </Box>
    </Box>
  );
};

export default SixCardCarousel;
