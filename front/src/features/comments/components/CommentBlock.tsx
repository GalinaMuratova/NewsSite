import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

interface Props {
  author: string;
  text:string;
  idComments: string;
  deleteNews: () => void;
}
const CommentBlock: React.FC<Props> = ({author, text,deleteNews}) => {

  return (
    <Card sx={{ margin: '16px 0' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Said: {text}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={deleteNews}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommentBlock;