'use client'
import { useState } from "react";

import Head from "next/head";
import Link from 'next/link';

import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillYoutube, AiFillGithub} from "react-icons/ai";

import Image from "next/image";
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>The JeniDub Developer Portfolio</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">JENIDUB</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" onClick={() => setDarkMode(!darkMode)}/>
              </li>
              <li className="bg-cyan-500 text-white px-4 py-2 rounded ml-8" href="#">Resume</li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Jeni Williams</h2>
            <h3 className="text-2xl py-2 text-blue-800 md:text-3xl">Developer and Educator</h3>
            <p className="text-medium py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">Professional summary will be added here</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link href="https://www.linkedin.com/in/jenidub/">
              <AiFillLinkedin />
            </Link>
            <Link href="https://github.com/jenidub">
              <AiFillGithub />
            </Link>
            <Link href="https://www.youtube.com/@jenidubca">
              <AiFillYoutube />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="3D Porfolio Image of JeniDub" priority /> {/* replace layout=cover objectFit */}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Overview of portfolio projects will be added here
            </p>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:bg-white">
              <div className="basis-1/3 flex-1">
                <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt=""/> {/* replace layout=responsive */}
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt=""/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web3} className="rounded-lg object-cover"width={"100%"} height={"100%"}  alt=""/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt=""/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt=""/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web6} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section>
            <h3 className="text-3xl py-1">JeniDub Tech Consulting</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Description of services will be added here
            </p>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl -scroll-my-10">
                <Image src={code} width={100} height={100} alt="card #1 image"/>
                <h3 className="text-lg font-medium pt-8 pb-2">Service #1</h3>
                <p className="py-2">Short description of the service</p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl -scroll-my-10">
                <Image src={design} width={100} height={100} alt="card #2 image"/>
                <h3 className="text-lg font-medium pt-8 pb-2">Service #2</h3>
                <p className="py-2">Short description of the service</p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
              </div>
              <div>
                <Image src={consulting} width={100} height={100} alt="card #3 image"/>
                <h3 className="text-lg font-medium pt-8 pb-2">Service #3</h3>
                <p className="py-2">Short description of the service</p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
                <p className="text-gray-800 py-1">Tech #1</p>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
