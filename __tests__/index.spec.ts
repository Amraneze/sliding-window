import WindowSliding from '../index';

test('it should not process a data after the limit is reached', () => {
  const slidingWindow = new WindowSliding(60, 2);
  slidingWindow.isProcessed();
  slidingWindow.isProcessed();
  let isProcessed = slidingWindow.isProcessed();
  expect(isProcessed).toBe(false);
});

test('it should process data within the size limit', () => {
  const slidingWindow = new WindowSliding(60, 2);
  const results = [];
  for (let i = 0; i < 5; i++) {
    results.push(slidingWindow.isProcessed());
  }
  const processedData = results.filter(Boolean);
  const unprocessedData = results.filter((data) => !data);
  expect(processedData.length).toBe(2);
  expect(unprocessedData.length).toBe(3);
});

test('it should not process data before the window slide', () => {
  const slidingWindow = new WindowSliding(60, 2);
  slidingWindow.isProcessed();
  slidingWindow.isProcessed();
  let isProcessed = slidingWindow.isProcessed();
  expect(isProcessed).toBe(false);
  setTimeout(() => {
    isProcessed = slidingWindow.isProcessed();
    expect(isProcessed).toBe(false);
  }, 500);
});

test('it should process process more data after a window slide', () => {
  const slidingWindow = new WindowSliding(5, 2);
  slidingWindow.isProcessed();
  slidingWindow.isProcessed();
  let isProcessed = slidingWindow.isProcessed();
  expect(isProcessed).toBe(false);
  setTimeout(() => {
    isProcessed = slidingWindow.isProcessed();
    expect(isProcessed).toBe(true);
  }, 5 * 1000);
});
