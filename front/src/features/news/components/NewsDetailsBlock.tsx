import React from 'react';
import { Card, CardContent, Grid, Typography, makeStyles } from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  id: string;
  title: string;
  description: string;
  date: string;
}

const NewsDetailsBlock: React.FC<Props> = ({ id, date, description, title }) => {

  return (
    <Card >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          <span>{dayjs(date).format('DD.MM.YYYY HH:mm:ss')}</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsDetailsBlock;
