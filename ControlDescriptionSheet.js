const SYMBOLS = {
  ant_hill_termite_mound: `
    <g transform="translate(-136.74817,57.489833)">
      <path d="m 139.394,-56.444 v 3.2" />
      <path d="m 137.794,-54.844 h 3.2" />
      <path d="m 140.594,-53.644 -2.4,-2.4" />
      <path d="m 140.594,-56.044 -2.4,2.4" />
    </g>`,
  bare_rock: `
    <g transform="translate(-27.519167,49.514833)">
      <path d="m 30.165,-48.469 v 0.9" />
      <path d="m 30.165,-46.169 v 0.9" />
      <path d="m 28.565,-46.869 h 0.9" />
      <path d="m 30.865,-46.869 h 0.9" />
      <path d="m 31.365,-45.669 -0.7,-0.7" />
      <path d="m 28.965,-48.069 0.7,0.7" />
      <path d="m 31.365,-48.069 -0.7,0.7" />
      <path d="m 28.965,-45.669 0.7,-0.7" />
    </g>
  `,
  bend: `
    <g transform="translate(-87.316167,28.062833)">
      <path d="m 91.112,-27.217 -2,1.3" />
      <path d="m 91.112,-23.617 -2,-1.3" />
      <path d="m 89.112,-25.917 c -0.4,0.25 -0.4,0.75 0,1" />
    </g>`,
  beneath: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-28.848241,-167.42685)" >
      <path d="m 701.43488,4045.8118 v -56.6929 h 85.03937 v 56.6929" style="stroke-width:7.08661" />
      <g>
        <path d="m 751.04114,4036.3629 c 0,3.9138 -3.17279,7.0866 -7.08662,7.0866 -3.91383,0 -7.08661,-3.1728 -7.08661,-7.0866 0,-3.9138 3.17278,-7.0866 7.08661,-7.0866 3.91383,0 7.08662,3.1728 7.08662,7.0866 z" style="fill:#000000" />
      </g>
    </g>`,
  between: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-121.39223,-164.96285)">
      <path style="stroke-width:7.08661" d="m 2965.4663,3978.1582 h -70.8661" />
      <path style="stroke-width:7.08661" d="m 2965.4663,3940.363 h -70.8661" />
      <g>
        <path d="m 2937.1199,3959.2606 c 0,3.9138 -3.1728,7.0866 -7.0866,7.0866 -3.9139,0 -7.0867,-3.1728 -7.0867,-7.0866 0,-3.9139 3.1728,-7.0867 7.0867,-7.0867 3.9138,0 7.0866,3.1728 7.0866,7.0867 z" style="fill:#000000" />
      </g>
    </g>`,
  boulder_cluster: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-65.673238,-136.15585)">
      <path d="m 1604.3876,3257.5204 -18.8976,33.0709 h 37.7952 z" style="fill:#000000" />
      <path d="m 1623.2852,3266.9692 -18.8976,33.0709 h 37.7953 z" style="fill:#000000" />
    </g>`,
  boulder_field: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-58.534236,-136.34285)">
      <path d="m 1445.1986,3271.3865 -14.1732,23.6221 h 28.3464 z" style="fill:#000000" />
      <path d="m 1416.8522,3247.7645 -14.1733,23.622 h 28.3465 z" style="fill:#000000" />
      <path d="m 1473.5451,3247.7645 14.1732,23.622 h -28.3465 z" style="fill:#000000" />
      <path d="m 1416.8522,3295.0086 -14.1733,23.622 h 28.3465 z" style="fill:#000000" />
      <path d="m 1473.5451,3295.0086 14.1732,23.622 h -28.3465 z" style="fill:#000000" />
    </g>`,
  boulder: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-48.580237,-137.33885)">
      <path style="fill:#000000;" d="m 1210.0648,3276.0165 35.433,61.4173 h -70.8661 z" />
    </g>`,
  boundary_stone_cairn: `
    <g transform="matrix(0.04233333,0,0,0.04233333,-170.58423,-141.56085)">
      <path d="m 116.359,-42.244 c 0,0.607513 -0.49249,1.1 -1.1,1.1 -0.60751,0 -1.1,-0.492487 -1.1,-1.1 0,-0.607513 0.49249,-1.1 1.1,-1.1 0.60751,0 1.1,0.492487 1.1,1.1 z" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" />
      <g>
        <path d="m 4100.9073,3406.4574 c 0,4.8923 -3.966,8.8583 -8.8583,8.8583 -4.8923,0 -8.8583,-3.966 -8.8583,-8.8583 0,-4.8923 3.966,-8.8583 8.8583,-8.8583 4.8923,0 8.8583,3.966 8.8583,8.8583 z" style="fill:#000000" />
      </g>
    </g>`,
  bridge: `
    <g transform="translate(-27.927167,44.719833)">
      <path d="m 28.773,-41.374 h 0.6 l 1.9,-1.9 v -0.6" />
      <path d="m 32.373,-42.774 h -0.6 l -1.9,1.9 v 0.6" />
    </g>`,
  broad_leaved: `
    <g transform="translate(-62.699167,39.283333)">
      <path d="m 65.345,-35.05 v -0.8" />
      <path d="m 64.795,-37.55 c 0.05,-0.9 1.05,-0.9 1.1,0" />
      <path d="m 65.345,-36.05 c -0.4,0.6 -1.25,0.4 -0.9,-0.5" />
      <path d="m 65.345,-36.05 c 0.4,0.6 1.25,0.4 0.9,-0.5" />
      <path d="m 64.795,-37.55 c -0.85,-0.1 -1.05,0.7 -0.35,1" />
      <path d="m 65.895,-37.55 c 0.85,-0.1 1.05,0.7 0.35,1" />
    </g>`,
  broken_ground: `
    <g transform="translate(-131.56717,57.547833)">
      <path d="m 133.813,-55.977 c 0.2,1 -1.4,1 -1.2,0" />
      <path d="m 134.613,-55.977 c -0.2,1 1.4,1 1.2,0" />
      <path d="m 134.813,-54.577 c 0.2,1 -1.4,1 -1.2,0" />
    </g>`,
  building,
};

const sheetTemplate = document.createElement("template");
sheetTemplate.innerHTML = `
  <style>
    div.row {
      margin: 0px;
      color: #b30e8e;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }

    div.header {
      border: 3px solid #b30e8e;
      padding: 5px;
    }

    path {
      fill: none;
      stroke: #000000;
      stroke-width: 0.3;
      stroke-linecap: round;
      stroke-linejoin: miter;
      stroke-miterlimit: 2.23607;
      stroke-dasharray: none;
      stroke-opacity: 1;
      fill-opacity: 1;
      fill-rule: evenodd;
    }
  </style>
  
  <div class="outer">
    <div class="row">
      <div class="header" style="grid-column: 1 / 9;" data-title></div>
    </div>
    <div class="row">
      <div class="header" style="grid-column: 1 / 4;" data-course></div>
      <div class="header" style="grid-column: 4 / 7;" data-distance></div>
      <div class="header" style="grid-column: 7 / 9;" data-height></div>
    </div>
  </div>
`;

const controlTemplate = document.createElement("template");
controlTemplate.innerHTML = `
  
`;

/**
 *
 * @param {string | null} name
 * @returns {string}
 */
function createIcon(name) {
  if (Object.keys(SYMBOLS).includes(name))
    return `
  <svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20">
    ${SYMBOLS[name]}
  </svg>`;
  return "";
}

class ControlDescriptionSheet extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(sheetTemplate.content.cloneNode(true));

    for (const attribute of ["title", "course", "distance", "height"])
      shadow.querySelector(`[data-${attribute}]`).innerHTML =
        this.getAttribute(attribute) ?? "";

    for (const control of this.children) {
      // console.log(control.children);
      const div = document.createElement("div");
      div.className = "row";
      div.innerHTML = `
        <div>${createIcon(control.getAttribute("which"))}</div>
        <div>${createIcon(control.getAttribute("feature"))}</div>
        <div>${createIcon(control.getAttribute("appearance"))}</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      `;
      console.log(control.getAttribute("which"));
      for (const column of control.children) console.log(column);
      shadow.querySelector(".outer").append(div);
    }
  }
}

class ControlDescription extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: "open" });
    // shadow.append(controlTemplate.content.cloneNode(true));
    // this.className = "row";
    // this.style = "display: grid; grid-template-columns: repeat(8, 1fr)";
    this.innerHTML = `
        <div>1</div>
        <div>35</div>
        <div>one</div>
        <div>35</div>
        <div>35</div>
        <div>35</div>
        <div>35</div>
        <div>35</div>
    `;
  }
}

customElements.define("control-description-sheet", ControlDescriptionSheet);
customElements.define("control-description", ControlDescription);
