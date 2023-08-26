import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

interface Props {
  author: string;
  text:string;
  idComments: string;
}
const CommentBlock: React.FC<Props> = ({author, text}) => {

  return (
    <Card sx={{ margin: '16px 0' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Said: {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentBlock;