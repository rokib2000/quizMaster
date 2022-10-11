import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Card className='mt-4'>
            <Card.Body>
                <Card.Title>What is the purpose of react router?</Card.Title>
                <Card.Text>
                It enables navigation between different component views in a React application, allows browser URL changes, and keeps the UI in sync with the URL.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='mt-4'>
            <Card.Body>
                <Card.Title>How does context api work?</Card.Title>
                <Card.Text>
                The ReactContext API is a way for a React app to effectively create global variables that can be passed around. This is an alternative to moving "prop drilling".
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='mt-4'>
            <Card.Body>
                <Card.Title>What is use REF IN React?</Card.Title>
                <Card.Text>
                The UseRef hook allows you to persist values between renders. It can be used to store a mutable value that does not cause re-rendering when updating. It can be used to directly access a DOM element.
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;