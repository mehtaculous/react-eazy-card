import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Card, CardHeader, CardImage, CardBody, CardFooter } from '../../src';

function Demo() {
  return (
    <div>
      <h1>Eazy Card Demo</h1>
      <Card>
        <CardHeader>
          <h2>Ab-Soul</h2>
        </CardHeader>
        <a href="https://en.wikipedia.org/wiki/Ab-Soul" target="_blank">
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
        </a>
        <CardBody>
          <p>
            Herbert Anthony Stevens IV is an American hip hop recording artist from Carson, California.
          </p>
        </CardBody>
        <CardFooter>
          <h3>Top Dawg Entertainment</h3>
        </CardFooter>
      </Card>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
