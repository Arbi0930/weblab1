import React from "react";
import "./style.css";
import CarImg from "./crs.png";
import Layout from "./Layout";
function Home() {
  return (
    <>
      <Layout className="mb-48">
        <section class="home" id="home">
          <h3 data-speed="-2" class="home-parallax">
          Дуртай машинаа эндээс олоорой
          </h3>

          <img data-speed="5" class="home-parallax" src={CarImg} alt="" />
        </section>

        <section class="contact" id="contact">
          <h1 class="heading">
            <span>холбоо барих</span>
          </h1>

          <div class="row">
            <form action="">
              <h3>Санал хүсэлт</h3>
              <input type="text" placeholder="Нэр" class="box" />
              <input type="email" placeholder="И-Мэйл" class="box" />
              <input type="text" placeholder="Хүсэлт" class="box" />
              <textarea
                placeholder="Сэтгэгдэл...."
                class="box"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Илгээх" class="btn" />
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
