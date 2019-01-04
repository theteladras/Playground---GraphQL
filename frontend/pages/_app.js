import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
        <p>
          Hey I'm on Every Page!
        </p>
      </Container>
    );
  }
}

export default MyApp;