const fireHeight = 100;
const fireWidth = 100;
const numberOfPixels = fireWidth * fireHeight;

export function createFirePixelArray(): number[] {
  const firePixelArray: number[] = [];

  for (let i = 0; i < numberOfPixels; i++) {
    if (i >= numberOfPixels - fireWidth) {
      firePixelArray[i] = 36;
    } else {
      firePixelArray[i] = 0;
    }
  }
  return firePixelArray;
}

export function calculateFirePropagation(firePixelArray: number[]): number[] {
  firePixelArray.forEach((e, i) => {
    const underElement =
      firePixelArray[i + fireWidth - Math.round(Math.random())];

    if (i < numberOfPixels - fireWidth) {
      firePixelArray[i] =
        underElement > 1 ? underElement - Math.round(Math.random() * 2) : 0;
    }
  });

  return [...firePixelArray];
}
