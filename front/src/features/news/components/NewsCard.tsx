import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';

const Link = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});
interface Props {
  title: string;
  description: string;
  image: string;
  date: string;
  id: string | null;
  deleteNews: () => void;
}

const NewsCard: React.FC<Props> = ({ image, date, id, title, deleteNews }) => {
  let productImage = null;
  if (image) {
    productImage = 'http://127.0.0.1:8000' + '/' + image;
  }
  let cardMed = <Typography sx={{ height: 140 }}></Typography>;
  if (productImage) {
    cardMed = (
      <CardMedia sx={{ height: 140 }} image={productImage} title='news-img' />
    );
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} component='div'>
        <Card>
          <CardActionArea>
            <CardContent>
              <Grid container direction='column'>
                <Typography variant='subtitle1' color='text.secondary'>
                  <span>{dayjs(date).format('DD.MM.YYYY HH:mm:ss')}</span>
                </Typography>
                <Typography variant='h5' color='text.black'>
                  <strong>{title}</strong>
                </Typography>
              </Grid>
              {cardMed}
              <Grid container justifyContent='space-between' alignItems='flex-end'>
                <Button color="primary" component={Link} to={`/news/${id}`}>
                  More Information
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={deleteNews}
                >
                  Delete
                </Button>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default NewsCard;
