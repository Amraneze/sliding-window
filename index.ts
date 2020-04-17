class SlidingWindow {
  queue: number[] = [];
  // timeout can be any because the type
  // of it is different if we are using
  // the window context or Node context
  timeout: any;
  sizeLimit: number;
  windowSize: number;
  timeLimit: number;

  /**
   * Constructor of the class SlidingWindow
   * @param windowSize the sliding time, it needs to be in seconds
   * @param sizeLimit the size limit that the sliding won't accept data anymore
   */
  constructor(windowSize: number, sizeLimit: number) {
    this.sizeLimit = sizeLimit;
    this.windowSize = windowSize;
    this.timeLimit = windowSize * 1000;
  }

  isTimeLimitPassed = (then: number): boolean => (new Date().getTime() - then) / this.timeLimit >= 1;

  slideWindow(isForced: boolean): void {
    const startSliding = isForced || this.queue.length !== 0;
    if (startSliding) {
      clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.queue = this.queue.filter((timestamp: number) => !this.isTimeLimitPassed(timestamp));
        this.slideWindow(false);
      }, 500);
    }
  }

  isProcessed(): boolean {
    if (this.queue.length === this.sizeLimit) return false;
    if (this.queue.length === 0) this.slideWindow(true);
    this.queue.push(new Date().getTime());
    return true;
  }
}

export default SlidingWindow;
