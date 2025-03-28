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
              data={{
                title: "Luciano Delphino de Azevedo Júnior",
                p: "Psicólogo formado na UNESP de Bauru, atualmente cursando Mestrado na Escola de Enfermagem de Ribeirão Preto. Técnico em Eletrônica pela ETEC Albert Einstein.",
                image: highschool,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Maria Clara Franco Cardoso",
                p: "Bacharel em Ciências Sociais pela Universidade de São Paulo, atua na área de pesquisa de mercado e tem experiência na implementação de projetos voltados ao público geral.",
                image: highschool,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Victor Sad de Souza",
                p: "Empreendedor e advogado especializado em inovação. Oferece apoio jurídico, administrativo e de negócios à InclusiVR e atua no atendimento a empresas de tecnologia na solução de desafios legais.",
                image: highschool,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Fauston",
                p: "Licenciado em Artes Cênicas pela Universidade de São Paulo. Professor, intérprete de LIBRAS, ator, dançarino e pesquisador. Atualmente é professor de arte da rede pública da cidade de São Paulo.",
                image: highschool,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Leonardo Martins",
                p: "Atuo com desenvolvimentos de jogos em realidade estendida, especialmente experiências imersivas em realidade virtual. No momento estou em Registro/SP e incluo o time de desenvolvimento do InclusiVR.",
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
