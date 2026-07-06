import React from 'react'
import { words } from '../../constants/index'
import Button from '../Button'
import HeroExperience from '../HeroModels/HeroExperience'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCounter from '../AnimatedCounter'
const Hero = () => {
    useGSAP(() =>
    gsap.fromTo('.hero-text h1',
        {
            y:50,
            opacity:0,
        },
    {
        y:0,
        opacity:1,
        stagger:0.1,
        duration:0.6,
        ease: 'power2.inOut'
    }
    )
    )
  return (
   <section id="hero" className="relative overflow-hidden">
    <div className="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="background"/>
    </div>      


    <div className="hero-layout">
        <header className ="flex flex-col justify-center md:w-full w-screen
        md:px-20 px-5 ">
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                <h1 className="hero-title-main">Building
                    <span className=" slide">
                        <span className="wrapper">
                            {words.map ((words) => (
                                <span key={words.text}
                                 className="flex items-center md:gap-3 gap-1 pb-2">
                                    <img
                                     src={words.imgPath} 
                                    alt={words.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                                    rounded-full bg-white-50 " />

                                  <span>{words.text}</span>
                                </span>
                            ))}
                        </span>
                    </span>
                </h1>
                <h1 className="hero-title-middle">the things</h1>
                <h1 className="hero-title-accent">I love.</h1>
            </div>
            <p className="relative z-10 max-w-xl text-[#ff7fbd] md:text-xl font-semibold leading-relaxed tracking-wide pointer-events-none drop-shadow-[0_0_12px_rgba(255,127,189,0.25)]">
              Hi, I’m Edl, a Frontend Developer who loves creating beautiful and functional websites.
            </p>
           <Button
           className="md:w-80 md:h-16 w-60 h-12"
           id="button"
           href="#counter"
           text="See my works"
           />
            </div>
            
        </header>




        <figure>
            <div className="hero-3d-layout overflow-hidden rounded-2xl">
              <HeroExperience />
            </div>
        </figure>
    </div>

    <AnimatedCounter/>
   </section>
  )
}

export default Hero
