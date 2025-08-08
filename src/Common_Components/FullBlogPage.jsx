// import React from "react";
// import { useParams } from "react-router-dom";
// import blogPosts from "../Data/BlogData"; 
// import { Box, Typography, Avatar, Divider } from "@mui/material";
// import { IoPerson } from "react-icons/io5";
// import { FaCalendarAlt } from "react-icons/fa";
// import { ColorPalette } from "../Assets/Colors";

// const FullBlogPage = () => {
//   const { id } = useParams();
//   const blog = blogPosts.find((post) => post.id === Number(id));

//   if (!blog) {
//     return (
//       <Typography
//         variant="h5"
//         sx={{ textAlign: "center", mt: 10, fontFamily: "Archivo" }}
//       >
//          No blog found
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         maxWidth: "850px",
//         margin: "60px auto",
//         background: "#fff",
//         borderRadius: "20px",
//         boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
//         overflow: "hidden",
//         fontFamily: "Archivo",
//       }}
//     >
//       {/* Banner Image */}
//       <Box
//         component="img"
//         src={blog.image}
//         alt={blog.title}
//         sx={{
//           width: "100%",
//           height: "420px",
//           objectFit: "cover",
//         }}
//       />

//       {/* Blog Content */}
//       <Box sx={{ padding: "40px" }}>
//         {/* Category */}
//         <Typography
//           sx={{
//             color: ColorPalette.pink,
//             fontSize: "13px",
//             fontWeight: 700,
//             textTransform: "uppercase",
//             letterSpacing: "1px",
//             mb: 1,
//           }}
//         >
//           {blog.category}
//         </Typography>

//         {/* Title */}
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             mb: 2,
//             lineHeight: 1.3,
//             color: "#222",
//           }}
//         >
//           {blog.title}
//         </Typography>

//         {/* Author & Date */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "15px",
//             mb: 4,
//             color: "#666",
//           }}
//         >
//           <Avatar
//             sx={{
//               bgcolor: ColorPalette.pink,
//               width: 36,
//               height: 36,
//               fontSize: "18px",
//             }}
//           >
//             <IoPerson />
//           </Avatar>
//           <Box>
//             <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
//               {blog.author}
//             </Typography>
//             <Typography sx={{ fontSize: "13px" }}>
//               <FaCalendarAlt
//                 size={13}
//                 style={{ marginRight: "5px", color: ColorPalette.pink }}
//               />
//               {blog.date}
//             </Typography>
//           </Box>
//         </Box>

//         <Divider sx={{ mb: 4 }} />

//         {/* Blog Description */}
//         <Typography
//           sx={{
//             fontSize: "18px",
//             lineHeight: "30px",
//             color: "#333",
//             mb: 3,
//           }}
//         >
//           {blog.description}
//         </Typography>

//         {/* Extra sample content */}
//         <Typography
//           sx={{
//             fontSize: "18px",
//             lineHeight: "30px",
//             color: "#444",
//             mb: 2,
//           }}
//         >
//           Ice cream isn’t just dessert — it’s a lifestyle 🍧. Whether you’re
//           starting your own dessert business, following the latest gelato
//           trends, or exploring vegan options, our journey will inspire you.
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "18px",
//             lineHeight: "30px",
//             color: "#444",
//           }}
//         >
//           Expect fresh updates, expert advice, and creative stories behind every
//           scoop. Stay tuned for more flavors of inspiration! 🍦
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default FullBlogPage;

import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../Data/BlogData"; 
import { Box, Typography, Avatar, Divider, Chip } from "@mui/material";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";

const FullBlogPage = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return (
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mt: 10, fontFamily: "Archivo" }}
      >
        ❌ No blog found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "60px auto",
        background: ColorPalette.gradient,
        borderRadius: "24px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        fontFamily: "Archivo",
      }}
    >
      {/* Banner Image */}
      <Box
        component="img"
        src={blog.image}
        alt={blog.title}
        sx={{
          width: "100%",
          height: { xs: "250px", md: "420px" },
          objectFit: "cover",
          borderBottom: "5px solid " + ColorPalette.pink,
        }}
      />

      {/* Blog Content */}
      <Box sx={{ padding: { xs: "20px", md: "40px" } }}>
        {/* Category as Chip */}
        <Chip
          label={blog.category}
          sx={{
            bgcolor: ColorPalette.pink,
            color: "#fff",
            fontWeight: 600,
            fontSize: "12px",
            textTransform: "uppercase",
            mb: 2,
            px: 1.5,
            py: 0.5,
            borderRadius: "8px",
          }}
        />

        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.3,
            color: "#222",
            fontSize: { xs: "26px", md: "34px" },
          }}
        >
          {blog.title}
        </Typography>

        {/* Author & Date */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            mb: 4,
            color: "#555",
          }}
        >
          <Avatar
            sx={{
              bgcolor: ColorPalette.pink,
              width: 40,
              height: 40,
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(255,182,193,0.5)",
            }}
          >
            <IoPerson />
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              {blog.author}
            </Typography>
            <Typography sx={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
              <FaCalendarAlt
                size={14}
                style={{ marginRight: "6px", color: ColorPalette.pink }}
              />
              {blog.date}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4, borderColor: "#f0cbd7" }} />

        {/* Blog Description */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#333",
            mb: 3,
          }}
        >
          {blog.description}
        </Typography>

        {/* Extra sample content */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#444",
            mb: 2,
          }}
        >
          Ice cream isn’t just dessert — it’s a lifestyle 🍧. Whether you’re
          starting your own dessert business, following the latest gelato
          trends, or exploring vegan options, our journey will inspire you.
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#444",
          }}
        >
          Expect fresh updates, expert advice, and creative stories behind every
          scoop. Stay tuned for more flavors of inspiration! 🍦
        </Typography>
      </Box>
    </Box>
  );
};

export default FullBlogPage;
