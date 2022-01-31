import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles({
  a: {
    display: 'block',
    flexWrap: 'wrap',
    overflow: 'hidden',
    height: '100%',
    width: '90%',
    align: 'center'

  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default function StandardImageList() {
  const classes = useStyles();

  return (
    <ImageList cols={3} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a className={classes.a} href="#">
            <img
              className={classes.img}
              srcSet={`${item.img}?w=600&h=600&fit=crop&auto=format 1x,
                          ${item.img}?w=600&h=600&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },

];