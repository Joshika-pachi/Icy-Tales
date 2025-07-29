// import React, { lazy, Suspense, useState, useEffect } from "react";
// import { createBrowserRouter } from "react-router-dom";

// const HomeLayout = lazy(() => import("./Body/Home/HomeLayout"));
// const Home1 = lazy(() => import("./Body/Home/Home1/Home1Main"));
// const Home2 = lazy(() => import("./Body/Home/Home2/Home2Main"));
// const Home3 = lazy(() => import("./Body/Home/Home3/Home3Main"));
// const AboutMain = lazy(() => import("./Body/AboutUs/AboutMain"));
// const Team = lazy(() => import("./Body/Pages/Team"));
// const Review = lazy(() => import("./Body/Pages/ReviewPage"));
// const SpecialOffersMain = lazy(() => import("./Body/Pages/SpecialOffers/SpecialOffersMain"));
// const Error = lazy(() => import("./Body/Pages/Error"));
// const ComingSoon = lazy(() => import("./Body/Pages/ComingSoon"));
// const PrivacyPolicy = lazy(() => import("./Body/Pages/PrivacyPolicy"));
// const TermsConditions = lazy(() => import("./Body/Pages/TermsConditions"));
// const ThankYou = lazy(() => import("./Body/Pages/ThankYou"));
// const Faqs = lazy(() => import("./Body/Faqs/FaqsMain"));
// const ContactUs = lazy(() => import("./Body/ContactUs/ContactUsMain"));
// const Shop1 = lazy(() => import("./Body/Shop/Shop1Comp"));
// const Shop2 = lazy(() => import("./Body/Shop/Shop2Comp"));
// const Shop3 = lazy(() => import("./Body/Shop/Shop3Comp"));
// const FullPageCardDetails = lazy(() => import("./Common_Components/FullPageDetailCard"));
// const CartInfo = lazy(() => import("./Common_Components/CartInfo"));
// const CheckOut = lazy(() => import("./Common_Components/CheckOut"));
// const Blog1 = lazy(() => import("./Body/Blog/Blog1"));
// const LoaadMore = lazy(() => import("./Body/Blog/LoaadMore"));
// const OneColumn = lazy(() => import("./Body/Blog/OneColumn"));
// const TwoColumn = lazy(() => import("./Body/Blog/TwoColumn"));
// const ThreeColumn = lazy(() => import("./Body/Blog/ThreeColumn"));
// const FourColumn = lazy(() => import("./Body/Blog/FourColumn"));
// const LoginLayout = lazy(() => import("./Body/Login/LoginLayout"));
// const SignupMain = lazy(() => import("./Body/Login/SignupMain"));

// const Loader = ({ message }) => (
//   <div style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     fontSize: "1.5rem",
//     fontWeight: "500",
//     textAlign: "center"
//   }}>
//     {message}
//   </div>
// );

// // Suspense wrapper with artificial delay and no layout wrapper
// const withSuspense = (Component, message) => {
//   const DelayedComponent = () => {
//     const [show, setShow] = useState(false);
//     useEffect(() => {
//       const timer = setTimeout(() => setShow(true), 500);
//       return () => clearTimeout(timer);
//     }, []);
//     return show ? <Component /> : <Loader message={message} />;
//   };
//   return (
//     <Suspense fallback={<Loader message={message} />}>
//       <DelayedComponent />
//     </Suspense>
//   );
// };

// const routing = createBrowserRouter([
//   {
//     path: "/",
//     element: withSuspense(HomeLayout, "🧭 Setting up your experience..."),
//     children: [
//       { index: true, element: withSuspense(Home1, "🏡 Loading your sweet home...") },
//       { path: "home2", element: withSuspense(Home2, "✨ Loading Our Vegan Collection") },
//       { path: "home3", element: withSuspense(Home3, "✨ Loading Our Gelato Collection") },
//       { path: "about", element: withSuspense(AboutMain, "📖 Loading About Us...") },
//       { path: "team", element: withSuspense(Team, "👩‍💻 Gathering our team...") },
//       { path: "review", element: withSuspense(Review, "📝 Fetching reviews...") },
//       { path: "specialOffers", element: withSuspense(SpecialOffersMain, "🎁 Unlocking special offers...") },
//       { path: "error", element: withSuspense(Error, "⚠️ Handling error...") },
//       { path: "comingSoon", element: withSuspense(ComingSoon, "🛠️ Preparing something cool...") },
//       { path: "privacyPolicy", element: withSuspense(PrivacyPolicy, "🔒 Loading privacy details...") },
//       { path: "termsConditions", element: withSuspense(TermsConditions, "📜 Loading terms & conditions...") },
//       { path: "thankYou", element: withSuspense(ThankYou, "🙏 Just a moment...") },
//       { path: "faqs", element: withSuspense(Faqs, "❓ Loading FAQs...") },
//       { path: "contactUs", element: withSuspense(ContactUs, "📬 Opening contact form...") },
//       { path: "shop1", element: withSuspense(Shop1, "🛍️ Opening Shop1...") },
//       { path: "shop2", element: withSuspense(Shop2, "🛒 Loading Shop2...") },
//       { path: "shop3", element: withSuspense(Shop3, "🛒 Loading Shop3...") },
//       { path: "product/:id", element: withSuspense(FullPageCardDetails, "🍦 Scooping your product...") },
//       { path: "cart", element: withSuspense(CartInfo, "🧺 Fetching your cart...") },
//       { path: "checkout", element: withSuspense(CheckOut, "💳 Preparing checkout...") },
//       { path: "blog1", element: withSuspense(Blog1, "📰 Loading blog page...") },
//       { path: "loadMore", element: withSuspense(LoaadMore, "🔄 Loading more blogs...") },
//       { path: "OneColumn", element: withSuspense(OneColumn, "📄 Opening one-column layout...") },
//       { path: "TwoColumn", element: withSuspense(TwoColumn, "📄 Opening two-column layout...") },
//       { path: "ThreeColumn", element: withSuspense(ThreeColumn, "📄 Opening three-column layout...") },
//       { path: "FourColumn", element: withSuspense(FourColumn, "📄 Opening four-column layout...") },
//       { path: "login", element: withSuspense(LoginLayout, "🔐 Loading login page...") },
//       { path: "signup", element: withSuspense(SignupMain, "📝 Preparing signup form...") },
//     ],
//   },
// ]);

// export default routing;


import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./Common_Components/Loader";

// Lazy load all components
const HomeLayout = lazy(() => import("./Body/Home/HomeLayout"));
const Home1 = lazy(() => import("./Body/Home/Home1/Home1Main"));
const Home2 = lazy(() => import("./Body/Home/Home2/Home2Main"));
const Home3 = lazy(() => import("./Body/Home/Home3/Home3Main"));
const AboutMain = lazy(() => import("./Body/AboutUs/AboutMain"));
const Team = lazy(() => import("./Body/Pages/Team"));
const Review = lazy(() => import("./Body/Pages/ReviewPage"));
const SpecialOffersMain = lazy(() => import("./Body/Pages/SpecialOffers/SpecialOffersMain"));
const Error = lazy(() => import("./Body/Pages/Error"));
const ComingSoon = lazy(() => import("./Body/Pages/ComingSoon"));
const PrivacyPolicy = lazy(() => import("./Body/Pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./Body/Pages/TermsConditions"));
const ThankYou = lazy(() => import("./Body/Pages/ThankYou"));
const Faqs = lazy(() => import("./Body/Faqs/FaqsMain"));
const ContactUs = lazy(() => import("./Body/ContactUs/ContactUsMain"));
const Shop1 = lazy(() => import("./Body/Shop/Shop1Comp"));
const Shop2 = lazy(() => import("./Body/Shop/Shop2Comp"));
const Shop3 = lazy(() => import("./Body/Shop/Shop3Comp"));
const FullPageCardDetails = lazy(() => import("./Common_Components/FullPageDetailCard"));
const CartInfo = lazy(() => import("./Common_Components/CartInfo"));
const CheckOut = lazy(() => import("./Common_Components/CheckOut"));
const Blog1 = lazy(() => import("./Body/Blog/Blog1"));
const LoaadMore = lazy(() => import("./Body/Blog/LoaadMore"));
const OneColumn = lazy(() => import("./Body/Blog/OneColumn"));
const TwoColumn = lazy(() => import("./Body/Blog/TwoColumn"));
const ThreeColumn = lazy(() => import("./Body/Blog/ThreeColumn"));
const FourColumn = lazy(() => import("./Body/Blog/FourColumn"));
const LoginLayout = lazy(() => import("./Body/Login/LoginLayout"));
const SignupMain = lazy(() => import("./Body/Login/SignupMain"));
const FullBlogPage = lazy(()=>import("./Common_Components/FullBlogPage"));

const withSuspense = (Component, message) => {
  const DelayedComponent = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }, []);
    return show ? <Component /> : <Loader message={message} />;
  };
  return (
    <Suspense fallback={<Loader message={message} />}>
      <DelayedComponent />
    </Suspense>
  );
};

const routing = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(HomeLayout, "Just a moment... We're setting up your experience "),
    children: [
      { index: true, element: withSuspense(Home1, "Serving your homepage with sprinkles... ") },
      { path: "home2", element: withSuspense(Home2, "Blending flavors for Home2... ") },
      { path: "home3", element: withSuspense(Home3, "Whipping up Home3 magic... ") },
      { path: "about", element: withSuspense(AboutMain, "Mixing up our story just for you... ") },
      { path: "team", element: withSuspense(Team, "Calling our awesome team... ") },
      { path: "review", element: withSuspense(Review, "Slicing through reviews... ") },
      { path: "specialOffers", element: withSuspense(SpecialOffersMain, "Unlocking sweet surprises... ") },
      { path: "error", element: withSuspense(Error, "Oops! We're fixing something... ") },
      { path: "comingSoon", element: withSuspense(ComingSoon, "Churning something amazing... ") },
      { path: "privacyPolicy", element: withSuspense(PrivacyPolicy, "Securing your scoop... ") },
      { path: "termsConditions", element: withSuspense(TermsConditions, "Mixing terms & swirls... ") },
      { path: "thankYou", element: withSuspense(ThankYou, "Sending gratitude with sprinkles... ") },
      { path: "faqs", element: withSuspense(Faqs, "Scooping answers for you... ") },
      { path: "contactUs", element: withSuspense(ContactUs, "Stirring up a contact page... ") },
      { path: "shop1", element: withSuspense(Shop1, " Scooping Shop1 delights...") },
      { path: "shop2", element: withSuspense(Shop2, "Mixing up Shop2 offers...") },
      { path: "shop3", element: withSuspense(Shop3, " Blending up Shop3 goodness...") },
      { path: "product/:id", element: withSuspense(FullPageCardDetails, " Preparing your favorite flavor...") },
      { path: "cart", element: withSuspense(CartInfo, " Packing your cart full of sweetness...") },
      { path: "checkout", element: withSuspense(CheckOut, " Getting your order ready...") },
      { path: "blog1", element: withSuspense(Blog1, " Writing scoops of thoughts...") },
      { path: "loadMore", element: withSuspense(LoaadMore, " Loading more blog sprinkles...") },
      { path: "OneColumn", element: withSuspense(OneColumn, " Opening your one-column treat...") },
      { path: "TwoColumn", element: withSuspense(TwoColumn, " Double column delight coming up...") },
      { path: "ThreeColumn", element: withSuspense(ThreeColumn, " Triple scoop blog loading...") },
      { path: "FourColumn", element: withSuspense(FourColumn, "Quad-column blog masterpiece...") },
      { path: "login", element: withSuspense(LoginLayout, " Opening the gates...") },
      { path: "signup", element: withSuspense(SignupMain, " Whipping up your new account...") },
       { path: "blog/:id", element: withSuspense(FullBlogPage, "Loading Blog Detail...") },
    ],
  },
]);

export default routing;