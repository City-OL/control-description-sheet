import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'special-instruction',
  styleUrl: 'special-instruction.css',
  shadow: true,
})
export class SpecialInstruction {
  render() {
    return (
      <Host>
        <div class="row">
          <div style={{ gridColumn: '1/4' }}>
            <slot name="left"></slot>
          </div>
          <div style={{ gridColumn: '4/-4' }}>
            <slot></slot>
          </div>
          <div style={{ gridColumn: '-4/-1' }}>
            <slot name="right"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
