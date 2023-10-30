import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'control-description',
  styleUrl: 'control-description.css',
  shadow: true,
})
export class ControlDescription {
  private number: number;
  @Prop() code: string;
  @Element() el?: HTMLElement;

  componentWillLoad() {
    const controls = Array.from(this.el.parentNode.children).filter(
      el => el.tagName === 'CONTROL-DESCRIPTION',
    );
    this.number = controls.findIndex(
      el => el.getAttribute('code') === this.code,
    );
  }

  render() {
    return (
      <Host>
        {this.number > 0 && (
          <div style={{ 'font-weight': 'bold' }}>{this.number}</div>
        )}
        {this.number < 0 && <div>▷</div>}
        <div>{this.code}</div>
        <div>
          <slot name="which"></slot>
        </div>
        <div>
          <slot name="feature"></slot>
        </div>
        <div>
          <slot name="appearance"></slot>
        </div>
        <div>
          <slot name="dimensions"></slot>
        </div>
        <div>
          <slot name="location"></slot>
        </div>
        <div>
          <slot name="other"></slot>
        </div>
      </Host>
    );
  }
}
