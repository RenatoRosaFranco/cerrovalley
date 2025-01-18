'use client';

import React from 'react';

import Newsletter from './ui/componentes/Newsletter';
import Hero from './ui/componentes/Hero';
import Modules from './ui/componentes/Modules';

import modulesData from './mock/modules.json';

export default function Home() {
  const modules = modulesData;

  return (
    <>
      <Hero />
      <Modules modules={modules} />
      <Newsletter />
    </>
  );
}
