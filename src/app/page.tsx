/* eslint-disable @next/next/no-img-element */
"use client";

import { Barlow_Condensed } from "next/font/google";
import { Barlow } from "next/font/google";

import { useState } from "react";

import Container from "@/components/container/Container";
import Header from "@/components/header/Header";

export default function Home() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [changeIcon, setChangeIcon] = useState<boolean>(false)
  return (
    <>
      <Container>
        <Header setDisplayMenu={displayMenu} changeIcon={changeIcon} action={() => {
          setChangeIcon(!changeIcon);
          setDisplayMenu(!displayMenu);
        }}/>
      </Container>
      <Container>
        <div className="background_image"></div>
        <section>
          <article>
            <div className="introduction">
              <div className="introduction_header">
                <h4><span>new</span> monograph dashbord</h4>
                <h1>powerful insights into your team</h1>
              </div>
              <p>Project planning and time tracking<br /> for agile teams</p>
            </div>
            <div className='sub_area'>
              <a href="#" className="sub_btn"><button>schedule a demo</button></a>
              <a href="#" className="preview_content">to see a preview</a>
            </div>
          </article>
          <div className="hero">
            <img src="images/illustration-devices.svg" alt="" />
          </div>
        </section>
      </Container>
    </>
  );
}
