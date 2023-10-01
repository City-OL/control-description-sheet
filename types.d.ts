export class ControlDescriptionSheet extends HTMLElement {
  title: string;
  course?: string;
  distance?: string;
  elevation?: string;
  finalDistance?: string;
}

export class ControlDescription extends HTMLElement {
  code?: string;
  which?: string;
  feature?: string;
  appearance?: string;
  dimension?: string;
  location?: string;
  other?: string;
  highlighted?: boolean;
}

declare global {
  interface Window {
    ControlDescriptionSheet: typeof ControlDescriptionSheet;
    ControlDescription: typeof ControlDescription;
  }
  interface HTMLElementTagNameMap {
    "control-description-sheet": ControlDescriptionSheet;
    "control-description": ControlDescription;
  }
}
