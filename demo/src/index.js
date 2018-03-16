import React, {Component} from 'react';
import {render} from 'react-dom';
import './style.css'
import { Card, CardHeader, CardImage, CardBody, CardFooter } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-eazy-card Demo</h1>
        <Card>
          <CardHeader>

          </CardHeader>
          <CardImage>

          </CardImage>
          <CardBody>

          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
