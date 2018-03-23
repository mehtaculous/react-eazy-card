# react-eazy-card

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React component card that eliminates the distortion of images and allows for the flexibility of card features.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Installation
```
npm install --save react-eazy-card
```

## Usage

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardHeader, CardImage, CardBody, CardFooter } from 'react-eazy-card';
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
| `style` | Object | User can add additional styles or overwrite the default ones |

### `<CardImage>`
| Property | Type | Description
:---|:---|:---
| `imageSrc` | String | User can pass the image url to render inside `<CardImage>` component |
| `style` | Object | User can add additional styles or overwrite the default ones |

### `<CardBody>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User can render child elements inside `<CardBody>` component |
| `style` | Object | User can add additional styles or overwrite the default ones |

### `<CardFooter>`
| Property | Type | Description
:---|:---|:---
| `children` | Function | User can render child elements inside `<CardFooter>` component |
| `style` | Object | User can add additional styles or overwrite the default ones |

## Demo
![Eazy Card Demo](https://github.com/mehtaculous/react-eazy-card/blob/master/demo/src/demo.png)
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Eazy Card Demo</h1>
        <Card>
          <CardHeader>
            <h2>Ab-Soul</h2>
          </CardHeader>
          <CardImage imageSrc={Image} />
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

## License
MIT License

Copyright (c) 2018 [Sahil Mehta](https://mehtaculous.github.io)