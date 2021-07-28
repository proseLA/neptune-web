/**
 * Dimmer state management inspired by Material UI's ModalManager (https://github.com/mui-org/material-ui)
 */
export default class DimmerManager {
  /**
   * Dimmer refs
   */
  private dimmers: Element[];

  constructor() {
    this.dimmers = [];
  }

  add(dimmer: Element): number {
    let dimmerIndex = this.dimmers.indexOf(dimmer);
    if (dimmerIndex !== -1) {
      return dimmerIndex;
    }

    dimmerIndex = this.dimmers.length;
    this.dimmers.push(dimmer);
    return dimmerIndex;
  }

  remove(dimmer: Element): number {
    const dimmerIndex = this.dimmers.indexOf(dimmer);

    if (dimmerIndex !== -1) {
      this.dimmers.splice(dimmerIndex, 1);
    }
    return dimmerIndex;
  }

  isTop(dimmer: Element): boolean {
    return this.dimmers.length > 0 && this.dimmers[this.dimmers.length - 1] === dimmer;
  }
}
