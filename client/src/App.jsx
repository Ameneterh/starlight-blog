import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Header from "./components/Header";
import FooterCom from "./components/FooterCom";
import PrivateRoutes from "./components/PrivateRoutes";
import OnlyAdminPrivateRoutes from "./components/OnlyAdminPrivateRoutes";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import ReceiveChrist from "./pages/ReceiveChrist";
import AuthorPage from "./pages/AuthorPage";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { DonatePage } from "./pages/DonatePage";
import RecommendedResources from "./pages/RecommendedResources";
import DownloadsPage from "./pages/DownloadsPage";
import toast, { Toaster } from "react-hot-toast";

import TestComponent from "./components/TestComponent";
import TemporaryDonationPage from "./components/TemporaryDonationPage";
// import ArticlesWithPagination from "./pages/ArticlesWithPagination";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/donate" element={<DonatePage />} /> */}
        <Route path="/donate" element={<TemporaryDonationPage />} />
        {/* <Route path="/recommended" element={<RecommendedResources />} /> */}
        <Route path="/recommended" element={<TemporaryDonationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user/:userId" element={<AuthorPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/receive-christ" element={<ReceiveChrist />} />
        <Route path="/terms-of-use" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/test" element={<TestComponent />} />
        {/* <Route path="/articles-1" element={<ArticlesWithPagination />} /> */}
        <Route path="/post/:postSlug" element={<PostPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoutes />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      </Routes>
      <FooterCom />
      <Toaster />
    </BrowserRouter>
  );
}
