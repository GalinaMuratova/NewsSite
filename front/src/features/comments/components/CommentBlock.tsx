import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  author: string;
  text:string;
  id: string;
}
const CommentBlock: React.FC<Props> = ({author, text}) => {
  return (
    <Card >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {author}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentBlock;