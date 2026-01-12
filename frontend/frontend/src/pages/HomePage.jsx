import React from "react";
import "./homepage.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Footer from "./footer.jsx";

export default function HomePage() {
  return (
    <div>

      {/* ---------- 1. HERO SECTION ---------- */}
      <section className="hero">
  {/* Background overlay */}
  <div className="hero-overlay"></div>

  {/* Animated gradient background */}
  <motion.div
    className="animated-bg"
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
  />

  {/* Animated Text */}
  <motion.div
    className="hero-text"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
    }}
  >
    <motion.h1
      variants={{ hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1 } } }}
    >
      Premium Fashion Collection 2025
    </motion.h1>

    <motion.p
      variants={{ hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1 } } }}
    >
      Discover luxury, comfort & latest trends curated just for you.
    </motion.p>

    <motion.button
      className="cta-btn"
      whileHover={{ scale: 1.1, backgroundColor: "#ff9900" }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={() => window.location.href = "/register"}
    >
      Explore Collection
    </motion.button>
  </motion.div>

  {/* Floating circles */}
  <motion.div
    className="floating-circle large"
    animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
  />
  <motion.div
    className="floating-circle medium"
    animate={{ y: [0, 40, 0], x: [0, 30, 0], rotate: [0, -360, 0] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
  />
  <motion.div
    className="floating-circle small"
    animate={{ y: [0, -20, 0], x: [0, -20, 0], rotate: [0, 180, 0] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
  />
</section>


      {/* ---------- 3. FEATURED PRODUCTS ---------- */}


<section className="products">
  <h2>Featured Products</h2>
  <div className="product-grid">
    {[
      {
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=600&q=80",
    name: "Classic White Shirt",
    price: 799
  },
  
  {
    img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&h=600&q=80",
    name: "Winter Jacket",
    price: 1999
  },
      {
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=600&q=80",
    name: "Classic White Shirt",
    price: 799
  },
  
  {
    img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&h=600&q=80",
    name: "Winter Jacket",
    price: 1999
  }
    ].map((product, index) => (
      <motion.div
        className="product-card"
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
      >
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ---------- 4. DISCOUNT BANNER ---------- */}
    <section className="discount-banner">

  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="moving-sale-text"
  >
    ⚡ 
    <TypeAnimation
      sequence={[
        "Mega Sale — Up to 60% OFF",
        2000,
        "🔥 Today Only — Flat 50% OFF",
        2000,
        "💥 Buy 1 Get 1 Free",
        2000,
        "⚡ Limited Time Offer!",
        2000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    Shop before the offer expires!
  </motion.p>

  <motion.button
    className="sale-btn"
    whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(255,255,255,0.9)" }}
    whileTap={{ scale: 0.9 }}
  >
    Grab Deal
  </motion.button>

</section>


      {/* ---------- 5. SERVICES SECTION ---------- */}
     <section className="services animated-services">
  <h2 className="services-title">✨ Our Premium Services</h2>

  <div className="service-grid">
    <div className="service-card floating">🚚 Fast Delivery</div>
    <div className="service-card floating">⭐ Premium Quality</div>
    <div className="service-card floating">↩ Easy Returns</div>
    <div className="service-card floating">📞 24/7 Support</div>
  </div>
</section>

      {/* ---------- 6. NEW ARRIVALS ---------- */}
    <section className="new-arrivals pro-arrivals">
  <h2 className="arrival-title">✨ New Arrivals</h2>

  <div className="arrival-grid">
    <div className="arrival-card animate-card">
      <div className="img-box">
      < img src= "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&h=600&q=80"/>
      </div>
      <p className="item-name">Printed Summer Shirt</p>
    </div>

    <div className="arrival-card animate-card">
      <div className="img-box">
        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" />
      </div>
      <p className="item-name">Oversized Hoodie</p>
    </div>

    <div className="arrival-card animate-card">
      <div className="img-box">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" />
      </div>
      <p className="item-name">Casual Sneakers</p>
    </div>
  </div>
</section>


      {/* ---------- 7. BEST SELLERS ---------- */}
   <section className="best-sellers pro-best">
  <h2 className="best-title">🔥 Best Sellers</h2>

  <div className="seller-grid">

    <div className="seller-card fly-card">
      <div className="seller-img-box">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" />
      </div>
      <p className="seller-name">Stylish Hoodie</p>
    </div>

    <div className="seller-card fly-card">
      <div className="seller-img-box">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" />
      </div>
      <p className="seller-name">Women's Jacket</p>
    </div>

    <div className="seller-card fly-card">
      <div className="seller-img-box">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" />
      </div>
      <p className="seller-name">Sports Shoes</p>
    </div>

  </div>
</section>

  <section className="special-offer pro-offer animated-offer">
  <h2 className="offer-title">🎁 Exclusive Combo Offer</h2>
  <p className="offer-text">Buy 2 Get 1 Free — Limited Stock!</p>
  <button className="cta-btn offer-btn">Grab Now</button>
</section>

<section className="reviews pro-review">
  <h2>Customer Reviews</h2>
  <div className="review-box">
    <p>“Amazing quality & super fast delivery. Loved the experience!”</p>
    <h4>- Priya Sharma</h4>
  </div>
</section>


      {/* ---------- 10. BRAND PARTNERS ---------- */}
    {/* ---------- 10. BRAND PARTNERS (MARQUEE) ----------
<section className="brands">
  <h2>Our Partners</h2>

  <marquee className="partner-marquee" behavior="scroll" direction="left" scrollamount="10">
    <img src="https://i.ibb.co/12kzRk7/nike.png" alt="Nike" />
    <img src="https://i.ibb.co/jRVcV2b/adidas.png" alt="Adidas" />
    <img src="https://i.ibb.co/5G2RWqg/puma.png" alt="Puma" />
    <img src="https://i.ibb.co/Y2pfD2q/zara.png" alt="Zara" />
    <img src="https://i.ibb.co/t2kxJz1/hm.png" alt="H&M" />
  </marquee>
</section> */}
     <section className="brands">

      {/* Animated Heading */}
      <h2 className="partners-title">
        <TypeAnimation
          sequence={[
            "Our Partners 🤝",
            1500,
            "Trusted Brands ✨",
            1500,
            "Premium Collaborations 🔥",
            1500
          ]}
          speed={40}
          repeat={Infinity}
        />
      </h2>

      {/* Scrolling Brands */}
      <motion.div
        className="scroll-container"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="brand-logos">
          <motion.div whileHover={{ scale: 1.2 }}>NIKE</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>ADIDAS</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>PUMA</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>ZARA</motion.div>
        </div>
      </motion.div>

    </section>

      {/* ---------- 11. NEWSLETTER ---------- */}
       (
    <section className="newsletter">

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="newsletter-title"
      >
        <TypeAnimation
          sequence={[
            "Join Our Newsletter ✨",
            1500,
            "Get Exclusive Deals 🔥",
            1500,
            "Stay Updated With Trends 👗",
            1500
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.h2>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="newsletter-sub"
      >
        Get exclusive deals, early access & fashion tips.
      </motion.p>

      {/* Input + Button Box */}
      <motion.div
        className="newsletter-box"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        <motion.input
          type="text"
          placeholder="Enter your email..."
          whileFocus={{ scale: 1.05, boxShadow: "0 0 12px rgba(255, 107, 89, 0.8)" }}
          transition={{ duration: 0.3 }}
        />

        <motion.button
          className="sub-btn"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 18px rgba(255, 80, 50, 0.9)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Subscribe
        </motion.button>
      </motion.div>

    </section>

      <Footer/>
    
    </div>
  );
}
