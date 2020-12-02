import React, { useMemo } from 'react'
import { getCssForSettings } from './helpers'

export interface Settings {
  /**
   * Rotation of the book, in degrees.
   */
  rotate: number
  /**
   * Rotation of the book on hover, in degrees.
   */
  rotateHover: number
  /**
   * Perspective value. 600 seems to be a realistic value.
   */
  perspective: number
  /**
   * Duration of rotate animation, in milliseconds.
   */
  transitionDuration: number
  /**
   * Radius of right corners, in pixels.
   */
  radius: number
  /**
   * Book thickness, in pixels.
   */
  thickness: number
  /**
   * Color of the inside of back cover.
   */
  bgColor: string
  /**
   * Color of box shadow.
   */
  shadowColor: string
  /**
   * Width of the book, in pixels.
   */
  width: number
  /**
   * Height of the book, in pixels.
   */
  height: number
  /**
   * Offset between the pages and the cover size, in pixels.
   */
  pagesOffset: number
}

export interface Props extends Partial<Settings> {
  children: React.ReactNode
}

/**
 * `BookCover` is the component you can use to display an animated 3D version of your book cover.
 */
export const BookCover = ({
  children,
  rotate = 30,
  rotateHover = 5,
  perspective = 600,
  transitionDuration = 1,
  radius = 2,
  thickness = 50,
  bgColor = '#01060f',
  shadowColor = '#aaaaaa',
  width = 200,
  height = 300,
  pagesOffset = 3,
}: Props) => {
  const uniqueId = useMemo(
    () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
    [],
  )
  const css = getCssForSettings(uniqueId, {
    rotate,
    rotateHover,
    perspective,
    transitionDuration,
    radius,
    thickness,
    bgColor,
    shadowColor,
    width,
    height,
    pagesOffset,
  })

  return (
    <>
      <style>{css}</style>
      <div className={`book-container-${uniqueId}`}>
        <div className="book">{children}</div>
      </div>
    </>
  )
}
