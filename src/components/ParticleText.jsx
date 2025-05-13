import React from 'react'
import TextToParticles from 'text-particles';
const ParticleText = (props) => {
  return (
      <TextToParticles
      text={props.text}
      fontSize={100}
      color="white"
      particlesize={0.5}
      numParticles={3333}
      font='monospace'
    />
    
  )
}

export default ParticleText
