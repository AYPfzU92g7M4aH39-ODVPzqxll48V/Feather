import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import rands from '../../images/rate&ship.jpg';
import trackimage from '../../images/track1.jpg';
import locimage from '../../images/location.webp';
import background from '../../videos/Feathershifted.mp4';
import './public.css';
const images = [
  {
    url: rands,
    title: 'Rate & Ship',
    width: '33.33%',
    link: '../../Dashboards/Rateship/Rateship',
  },
  {
    url: trackimage,
    title: 'Track',
    width: '33.33%',
    link: '/Track',
    
  },
  {
    url: locimage,
    title: 'Location',
    width: '33.34%',
    link: '#',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <div>
      <video autoPlay loop muted id="myVideo">
        <source src={background} type='video/mp4' />  
      </video>
      {/* <div style={{fontFamily:'Roboto', fontSize:'50px', textAlign: 'center', paddingTop: '150px'}}>Ship, Track and Deliver Your Happiness</div> */}
      <Grid container justify= 'center'>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '45%', paddingTop: '20px', border: '1px', padding: '0px', boxShadow: '5px 10px 28px #888888' }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              href={image.link}
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </Grid>
    </div>
  );
}