# react-eazy-card

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React component card that eliminates the distortion of images and allows for the flexibility of card features.

[build-badge]: https://img.shields.io/travis/mehtaculous/react-eazy-card/master.png?style=flat-square
[build]: https://travis-ci.org/mehtaculous/react-eazy-card

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/mehtaculous/react-eazy-card/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/mehtaculous/react-eazy-card

## Installation
```
npm install --save react-eazy-card
```

## Usage

![Demo](https://s3-us-west-1.amazonaws.com/react-eazy-card/demo.png)
```js
import { Card, CardHeader, CardImage, CardBody, CardFooter } from 'react-eazy-card';

class Demo extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h2>Ab-Soul</h2>
          </CardHeader>
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
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
}
```

### `<Card>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User must nest all components inside `<Card>` component |
| `bgColor` | String | User can change the default background color |
| `fontColor` | String | User can change the default font color |
| `style` | Object | User can add additional styles or overwrite the default ones |

### `<CardHeader>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User can render child elements inside `<CardHeader>` component |
| `style` | Object | User can add additional styles or override the default ones |

### `<CardImage>`
| Property | Type | Description
:---|:---|:---
| `imageSrc` | String | User can pass the image url to render inside `<CardImage>` component |
| `style` | Object | User can add additional styles or override the default ones |

### `<CardBody>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User can render child elements inside `<CardBody>` component |
| `style` | Object | User can add additional styles or override the default ones |

### `<CardFooter>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User can render child elements inside `<CardFooter>` component |
| `style` | Object | User can add additional styles or override the default ones |

## Examples

### Card w/ Additional Styles
![Additional Styles](https://s3-us-west-1.amazonaws.com/react-eazy-card/card_color.png)
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Card bgColor={'#000'} fontColor={'#fff'}>
          <CardHeader>
            <h2>Ab-Soul</h2>
          </CardHeader>
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
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
}
```

### Card w/o Header Component
![No Header](https://s3-us-west-1.amazonaws.com/react-eazy-card/no_header.png)
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
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
}
```

### Card w/o Body Component
![No Body](https://s3-us-west-1.amazonaws.com/react-eazy-card/no_body.png)
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h2>Ab-Soul</h2>
          </CardHeader>
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
          <CardFooter>
            <h3>Top Dawg Entertainment</h3>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
```

### Card w/o Footer Component
![No Footer](https://s3-us-west-1.amazonaws.com/react-eazy-card/no_footer.png)
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h2>Ab-Soul</h2>
          </CardHeader>
          <CardImage imageSrc="https://s3.amazonaws.com/hiphopdx-production/2013/11/Ab_Soul_304x304.jpg" />
          <CardBody>
            <p>
              Herbert Anthony Stevens IV is an American hip hop recording artist from Carson, California.
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
```

## License
MIT License

Copyright (c) 2018 [Sahil Mehta](https://mehtaculous.github.io)