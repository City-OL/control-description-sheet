import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'course-heading',
  styleUrl: 'course-heading.css',
  shadow: true,
})
export class CourseHeading {
  @Prop() number?: string;
  @Prop() length?: string;
  @Prop() climb?: string;

  render() {
    return (
      <Host>
        <div class="heading-text">
          <slot></slot>
        </div>
        {(this.number || this.length || this.climb) && (
          <div class="number-length-climb">
            <div style={{ gridColumn: '1/4' }}>{this.number}</div>
            <div style={{ gridColumn: '4/7' }}>{this.length}</div>
            <div style={{ gridColumn: '7/9', borderRight: 'none' }}>{this.climb}</div>
          </div>
        )}
      </Host>
    );
  }
}
