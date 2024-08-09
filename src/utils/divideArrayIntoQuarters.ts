export const divideArrayIntoQuarters = <T>(
  array: T[],
): [T[], T[], T[], T[]] => {
  const segmentSize = Math.ceil(array.length / 4);

  const firstSegment = array.slice(0, segmentSize);
  const secondSegment = array.slice(segmentSize, segmentSize * 2);
  const thirdSegment = array.slice(segmentSize * 2, segmentSize * 3);
  const fourthSegment = array.slice(segmentSize * 3);

  return [firstSegment, secondSegment, thirdSegment, fourthSegment];
};
