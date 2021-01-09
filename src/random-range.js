/* eslint-disable linebreak-style */

export default function RandomRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
