import React from 'react'
import { Header } from '../../components/ui/Header'
import { Hero } from './Hero'
import { About } from './About'
import { Education } from './Education'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Test } from './Test'

export const Home = () => {
  return (
    <div><Header />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Contact />
    <Test /></div>
  )
}
