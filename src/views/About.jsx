import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF6F1] text-[#2B2B2B]">

        <section className="bg-[#EFE6DC] py-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              About <span className="text-[#2F5D50]">DermaCart</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B8F71] max-w-4xl mx-auto leading-relaxed">
              DermaCart is a modern skincare destination combining
              dermatological science, clean ingredients, and conscious beauty
              — designed for real skin, real climates, and real lifestyles.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Our Story
            </h2>
            <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
              DermaCart was born from a simple yet powerful idea — skincare
              should be transparent, effective, and accessible to everyone.
              In a market flooded with exaggerated claims and harsh formulas,
              we chose a different path.
            </p>
            <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
              We collaborate with trusted dermatological brands and laboratories
              to bring products that focus on long-term skin health rather than
              quick cosmetic fixes. Every formulation on DermaCart is chosen
              with care, backed by research, and suitable for Indian skin tones
              and weather conditions.
            </p>
            <p className="text-[#6B8F71] text-lg leading-relaxed">
              Our mission is to empower individuals with knowledge, honest
              ingredients, and skincare routines that truly work.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Skincare Essentials We Believe In
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-4">
                  Daily Care Essentials
                </h3>
                <p className="text-[#6B8F71] text-lg leading-relaxed">
                  A healthy skincare routine begins with gentle cleansing,
                  hydration, sun protection, and barrier repair. We emphasize
                  products that cleanse without stripping, hydrate without
                  clogging pores, and protect skin from environmental stressors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-4">
                  Targeted Treatment Essentials
                </h3>
                <p className="text-[#6B8F71] text-lg leading-relaxed">
                  From acne and pigmentation to aging and sensitivity,
                  DermaCart offers targeted solutions powered by active
                  ingredients like retinoids, niacinamide, azelaic acid,
                  peptides, and antioxidants.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Clean & Natural Ingredients
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "🌿 Aloe Vera & Botanicals",
                  desc: "Soothes irritation, hydrates deeply, and supports skin healing."
                },
                {
                  title: "🍃 Green Tea & Antioxidants",
                  desc: "Protects skin from pollution, free radicals, and premature aging."
                },
                {
                  title: "💧 Hyaluronic Acid",
                  desc: "Locks in moisture and enhances skin plumpness and elasticity."
                },
                {
                  title: "🛡 Ceramides",
                  desc: "Strengthen the skin barrier and prevent moisture loss."
                },
                {
                  title: "✨ Niacinamide",
                  desc: "Balances oil, reduces pores, and improves uneven skin tone."
                },
                {
                  title: "🌸 Botanical Extracts",
                  desc: "Provide gentle nourishment with minimal irritation."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-semibold text-[#2F5D50] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6B8F71]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EFE6DC] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Transparent & Fair Pricing
            </h2>
            <p className="text-[#6B8F71] text-lg max-w-4xl mx-auto leading-relaxed mb-6">
              At DermaCart, we believe effective skincare should not be
              overpriced. Our catalog includes a balanced mix of
              dermatologist-grade essentials and premium formulations,
              ensuring options for every budget.
            </p>
            <p className="text-[#6B8F71] text-lg max-w-4xl mx-auto leading-relaxed">
              We work closely with brands to eliminate unnecessary markups,
              offering honest pricing without compromising on safety,
              formulation quality, or performance.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Trust, Safety & Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-3">
                  🧬 Clinically Evaluated
                </h3>
                <p className="text-[#6B8F71]">
                  Products are evaluated for safety, stability, and skin
                  compatibility.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-3">
                  🔍 Ingredient Transparency
                </h3>
                <p className="text-[#6B8F71]">
                  No hidden formulas — every ingredient is clearly disclosed.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-3">
                  🩺 Dermatologist Trusted
                </h3>
                <p className="text-[#6B8F71]">
                  Recommended by skincare professionals and experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold mb-12 text-center">
      What Our Customers Say
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-[#FBF6F1] p-8 rounded-2xl shadow-sm">
        <div className="flex mb-4">
          {"★★★★★".split("").map((_, i) => (
            <span key={i} className="text-[#2F5D50] text-lg">★</span>
          ))}
        </div>
        <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
          “DermaCart completely transformed my skincare routine. My acne reduced
          significantly within a month.”
        </p>
        <h4 className="text-[#2F5D50] font-semibold text-lg">
          Aishwarya K.
        </h4>
        <span className="text-sm text-[#6B8F71]">Oily Skin</span>
      </div>

      <div className="bg-[#FBF6F1] p-8 rounded-2xl shadow-sm">
        <div className="flex mb-4">
          {"★★★★☆".split("").map((star, i) => (
            <span key={i} className="text-[#2F5D50] text-lg">{star}</span>
          ))}
        </div>
        <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
          “I have very sensitive skin and DermaCart products are gentle yet
          effective. No irritation at all.”
        </p>
        <h4 className="text-[#2F5D50] font-semibold text-lg">
          Rahul M.
        </h4>
        <span className="text-sm text-[#6B8F71]">Sensitive Skin</span>
      </div>

      <div className="bg-[#FBF6F1] p-8 rounded-2xl shadow-sm">
        <div className="flex mb-4">
          {"★★★★★".split("").map((_, i) => (
            <span key={i} className="text-[#2F5D50] text-lg">★</span>
          ))}
        </div>
        <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
          “Finally found honest skincare with transparent ingredients. The
          hydration and glow are noticeable.”
        </p>
        <h4 className="text-[#2F5D50] font-semibold text-lg">
          Neha S.
        </h4>
        <span className="text-sm text-[#6B8F71]">Dry Skin</span>
      </div>

      <div className="bg-[#FBF6F1] p-8 rounded-2xl shadow-sm">
        <div className="flex mb-4">
          {"★★★★☆".split("").map((star, i) => (
            <span key={i} className="text-[#2F5D50] text-lg">{star}</span>
          ))}
        </div>
        <p className="text-[#6B8F71] text-lg leading-relaxed mb-6">
          “Great balance of science and natural ingredients. Pricing is fair and
          results are consistent.”
        </p>
        <h4 className="text-[#2F5D50] font-semibold text-lg">
          Karan P.
        </h4>
        <span className="text-sm text-[#6B8F71]">Normal Skin</span>
      </div>

    </div>
  </div>
</section>

        <section className="py-28 text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Thoughtful Skincare Starts Here
          </h2>
          <p className="text-[#6B8F71] text-lg max-w-3xl mx-auto mb-10">
            Discover skincare that blends science, nature, and transparency —
            only at DermaCart.
          </p>
          <Link to="/products" className="bg-[#2F5D50] hover:bg-[#264B41] text-white px-12 py-4 rounded-full text-lg transition inline-block">
            Explore DermaCart
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;
