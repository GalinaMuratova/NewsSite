import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';


interface Props {
  title:string;
  description:string;
  image:string;
  date: string;
  id: string | null;
}
const NewsCard: React.FC<Props> = ({image, date, id , title ,description}) => {
  let productImage = null;
  if (image) {
    productImage = 'http://127.0.0.1:8000' + '/' + image;
  }
  let cardMed = <Typography sx={{height:140}}></Typography>;
  if (productImage){
    cardMed = <CardMedia
      sx={{height:140}}
      image={productImage}
      title='news-img'
    />
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} component='div'>
        <Card>
          <CardActionArea>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="h6" color="text.secondary">
                  <strong>
                    Title: { title }
                  </strong>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <strong>
                    Time : { date }
                  </strong>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <strong>
                    About: { description }
                  </strong>
                </Typography>
              </Grid>
              {cardMed}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
};

export default NewsCard;