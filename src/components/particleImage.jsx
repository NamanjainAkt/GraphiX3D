import React from 'react'
import ImageToParticle from 'react-image-particles';

const particleImage = () => {
  return (
    <ImageToParticle
    path=""
    width={500}
    height={50}
    particleSize={5}
    font="sans-serif"
    numParticles={1000}
  />
  )
}

export default particleImage
