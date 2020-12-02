# 3D Book Cover

A React component to display a 3D Book Cover in a web page. This component
is used in (and was created for) the application [3dbook.xyz](https://3dbook.xyz),
which offers a service to manage, embed and host your 3D book covers.

## Installation

Using Yarn: `yarn add book-cover-3d`

Using NPM: `npm i --save book-cover-3d`

## Usage

```jsx
import { BookCover } from 'book-cover-3d'

export const MyComponent = () => {
  return (
    <BookCover>
      <div>Your cover content</div>
    </BookCover>
  )
}
```

## Examples

### Using an image as the cover

![Book with image as cover](https://github.com/scastiel/book-cover-3d/raw/master/images/book-image.webp)

```jsx
return (
  <BookCover>
    <img src="https://3dbook.xyz/demo-book.png" />
  </BookCover>
)
```

### Using custom content

![Book with custom content](https://github.com/scastiel/book-cover-3d/raw/master/images/book-custom-content.webp)

```jsx
return (
  <BookCover>
    <div style={/*...*/}>
      <span style={/*...*/}>MY BOOK</span>
      <span style={/*...*/}>John Doe</span>
    </div>
  </BookCover>
)
```

## Settings

| Name               | Type     | Description                                            | Default   |
| ------------------ | -------- | ------------------------------------------------------ | --------- |
| rotate             | `number` | Rotation of the book, in degrees                       | `30`      |
| rotateHover        | `number` | Rotation of the book on hover, in degrees              | `5`       |
| perspective        | `number` | Perspective value seems to be a realistic value        | `600`     |
| transitionDuration | `number` | Duration of rotate animation, in milliseconds          | `1`       |
| radius             | `number` | Radius of right corners, in pixels                     | `2`       |
| thickness          | `number` | Book thickness, in pixels                              | `50`      |
| bgColor            | `string` | Color of the inside of back cover                      | `#01060f` |
| width              | `number` | Width of the book, in pixels                           | `200`     |
| height             | `number` | Height of the book, in pixels                          | `300`     |
| pagesOffset        | `number` | Offset between the pages and the cover size, in pixels | `3`       |

Example of using settings props:

```jsx
return (
  <BookCover
    rotate={45}
    rotateHover={30}
    perspective={500}
    transitionDuration={3}
    radius={5}
    thickness={30}
    bgColor="#1e3a8a"
    width={300}
    height={200}
    pagesOffset={5}
  >
    <div />
  </BookCover>
)
```

## HTML and CSS for given settings

If you don’t want to use the React component, you can extract the CSS generated for
given 3D settings.

```js
import { getCssForSettings } from 'book-cover-3d/dist/helpers'

const settings = {
  rotate: 30,
  // ...
}
const css = getCssForSettings('BOOK_ID', settings)
```

```html
<div class="book-container-BOOK_ID">
  <div class="book">
    <img src="https://3dbook.xyz/demo-book.png" />
  </div>
</div>
```

Note that you can use a unique ID for your book cover (in HTML and when
calling `getCssForSettings`), so you can use different settings for
different books.
