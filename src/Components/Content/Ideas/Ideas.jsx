import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const {
  Title, Paragraph,
} = Typography;

const { Grid } = Card;

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    fetch('http://localhost:8080/v1/ideas/1')
      .then((res) => res.json())
      .then((res) => {
        setIdeas(res);
        setLoading(false);
      });
  }

  return (
    <Card style={{ padding: '50px' }} loading={loading}>
      {ideas.map((idea) => {
        const {
          id, title, description,
        } = idea;

        return (
          <Grid onClick={() => {}} title={title} key={`idea-${id}`} style={{ width: '25%', textAlign: 'center' }}>
            <Typography>
              <Title>{title}</Title>
              <Paragraph>{description}</Paragraph>
            </Typography>
          </Grid>
        );
      })}
    </Card>
  );
};

export default Ideas;
