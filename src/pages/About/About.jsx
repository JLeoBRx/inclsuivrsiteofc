import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import dyp from "../../assets/images/dyp.png";
import highschool from "../../assets/images/highschool.jpeg";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="Sobre">
        <Text>
          <Paragraph>
          Somos uma startup brasileira focada no desenvolvimento de tecnologia para 
          a comunidade surda, como livros em realidade aumentada e jogos 
          em realidade virtual.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "D.Y. Patil college of engineering, Pune",
                p: "Bachelors of Computer Engineering (2019-2023)",
                image: dyp,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Luciano",
                p: "High School (2017-2019)",
                image: highschool,
              }}
            />
            <AboutItem
              color={orange}
              data={{
                title: "Maria",
                p: "High School (2017-2019)",
                image: highschool,
              }}
            />
            <AboutItem
              color={white}
              data={{
                title: "Victor",
                p: "High School (2017-2019)",
                image: highschool,
              }}
            />
            <AboutItem
              color={purple}
              data={{
                title: "Fauston",
                p: "High School (2017-2019)",
                image: highschool,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Leonardo Martins",
                p: "Secondary Education (2007-2017)",
                image: sos,
              }}
              
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
