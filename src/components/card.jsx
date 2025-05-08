import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardLayers3d({ children, image }) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(27deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.92) translate3d(17px, 25px, 35px)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(35px, 45px, 37px)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '400px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          boxShadow: '0 16px 32px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.4)'
          }
        }}
      >
        <CardCover
          sx={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            backgroundBlendMode: 'multiply',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
            transition: 'transform 0.3s ease',
            zIndex: 1,
            position: 'absolute'
          }}
        />
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            height: '50%',
            width: '100%',
            padding: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
            '& *': {
              color: '#fff !important',
              textShadow: '0 2px 4px rgba(0,0,0,0.4)',
              position: 'relative',
              zIndex: 2,
            }
          }}
        >
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}
