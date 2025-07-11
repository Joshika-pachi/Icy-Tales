import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import PagesHeader from "../../Common_Components/PagesHeader";
import BlogCard from "../../Common_Components/BlogCard";
import { ColorPalette } from "../../Assets/Colors";
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaQuoteLeft, FaCalendarAlt } from "react-icons/fa";

// Dummy data – replace with your actual imports
import blogData from "../../Data/BlogData";
const blog = blogData[0]; // Show first blog for example

const BlogDetails = () => {
  return (
    <Box>
      <PagesHeader title="Blog Detail" path="Blog" />
      <Grid container spacing={4} sx={{ padding: 4 }}>
        {/* Main Left Column */}
        <Grid item xs={12} md={6}>
          <BlogCard blogs={blog} />

          {/* Quote Box */}
          <Box sx={{ backgroundColor: ColorPalette.pink, borderRadius: 2, color: "#fff", p: 3, my: 3 }}>
            <FaQuoteLeft size={30} />
            <Typography sx={{ fontSize: 18, fontWeight: 500, mt: 1 }}>
              “To give a better idea to a reader, write in a structure with obvious clue phrases at logical places.”
            </Typography>
          </Box>

          {/* Additional Image */}
          <img src={blogData[1]?.image} alt="additional" style={{ width: "100%", borderRadius: 20 }} />

          <Typography sx={{ color: "#666", fontSize: 16, lineHeight: 1.8, mt: 3 }}>
            Combine seasoned experience, committed development, and modern tools to build efficient and scalable applications.
          </Typography>

          {/* Tags and Share */}
          <Grid container justifyContent="space-between" alignItems="center" mt={4}>
            <Box>
              <Typography fontWeight="bold">Related Tags</Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {["Assistant", "Remote", "Virtual"].map((tag, i) => (
                  <Box key={i} sx={{ px: 2, py: 1, backgroundColor: "#eee", borderRadius: 2, fontSize: 14 }}>{tag}</Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography fontWeight="bold">Social Share</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterestP />
              </Box>
            </Box>
          </Grid>

          {/* Author Box */}
          <Box sx={{ mt: 5, backgroundColor: ColorPalette.pink, borderRadius: 3, p: 3, color: "#fff", textAlign: "center" }}>
            <img src={blog.authorImage} alt="author" style={{ width: 80, borderRadius: "50%", marginBottom: 10 }} />
            <Typography fontWeight="bold" fontSize={18}>{blog.author}</Typography>
            <Typography mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusantium tempore!</Typography>
          </Box>

          {/* Comments */}
          <Typography variant="h6" mt={5}>2 Comments</Typography>
          {[1, 2].map(i => (
            <Box key={i} sx={{ mt: 3, display: "flex", gap: 2 }}>
              <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" style={{ width: 50, borderRadius: "50%" }} />
              <Box>
                <Typography fontWeight="bold">User {i}</Typography>
                <Typography fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, perferendis.</Typography>
              </Box>
            </Box>
          ))}

          {/* Comment Form */}
          <Box mt={5}>
            <Typography fontWeight="bold" fontSize={18}>Leave a Comment</Typography>
            <TextField fullWidth label="Enter your comment" multiline rows={4} sx={{ mt: 2 }} />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" />
              </Grid>
            </Grid>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: ColorPalette.pink, borderRadius: 2, px: 4 }}>
              Post Comment
            </Button>
          </Box>
        </Grid>

        {/* Sidebar Right Column */}
        <Grid item xs={12} md={4}>
          {/* Search Box */}
          <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <Typography fontWeight="bold">Search News</Typography>
            <Box sx={{ display: "flex", mt: 1 }}>
              <TextField fullWidth size="small" placeholder="Search..." />
              <Button variant="contained" sx={{ ml: 1, backgroundColor: ColorPalette.pink }}>
                <FaSearch />
              </Button>
            </Box>
          </Box>

          {/* Category */}
          <Box sx={{ mt: 4, p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <Typography fontWeight="bold">Popular Category</Typography>
            {["Digital Service", "Virtual Assistant", "Business Growth", "Remote Working"].map((cat, i) => (
              <Typography key={i} sx={{ mt: 1 }}>{cat}</Typography>
            ))}
          </Box>

          {/* Follow */}
          <Box sx={{ mt: 4, p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <Typography fontWeight="bold">Follow Us</Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterestP />
            </Box>
          </Box>

          {/* Tags */}
          <Box sx={{ mt: 4, p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <Typography fontWeight="bold">Tags</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
              {["Assistant", "Remote", "Virtual", "Team", "Productivity"].map((tag, i) => (
                <Box key={i} sx={{ px: 2, py: 1, backgroundColor: "#eee", borderRadius: 2, fontSize: 14 }}>{tag}</Box>
              ))}
            </Box>
          </Box>

          {/* Recent Posts */}
          <Box sx={{ mt: 4, p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <Typography fontWeight="bold">Feeds</Typography>
            {blogData.slice(1, 4).map((post, i) => (
              <Box key={i} sx={{ display: "flex", gap: 2, mt: 2 }}>
                <img src={post.image} alt="post" style={{ width: 60, height: 60, borderRadius: 10 }} />
                <Box>
                  <Typography fontSize={14} fontWeight="bold">{post.title.slice(0, 40)}...</Typography>
                  <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }} fontSize={12}>
                    <FaCalendarAlt /> {post.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogDetails;

