import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'control-description-sheet',
  styleUrl: 'control-description-sheet.css',
  shadow: true,
})
export class ControlDescriptionSheet {
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.el.style.setProperty('--cell-width', `${this.el.offsetWidth / 8}px`);
    const nonHeadingLines = Array.from(this.el.children).filter(
      child => child.tagName !== 'COURSE-HEADING',
    );

    let previousNonControl = 0;

    nonHeadingLines.forEach((child: HTMLElement, index) => {
      if (child.tagName !== 'CONTROL-DESCRIPTION') previousNonControl = index;
      if (index === nonHeadingLines.length - 1)
        return (child.style.borderBottomWidth = '0px');
      if (
        index === 0 ||
        child.tagName === 'SPECIAL-INSTRUCTION' ||
        nonHeadingLines.at(index + 1)?.tagName === 'SPECIAL-INSTRUCTION' ||
        (index - previousNonControl) % 3 === 0
      )
        return (child.style.borderBottomWidth = 'var(--wide-border-width)');
      return (child.style.borderBottomWidth = 'var(--border-width)');
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
