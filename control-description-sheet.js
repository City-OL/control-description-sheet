const SYMBOLS = {
  spring:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-102.48437,51.280991)"><path d="m 104.117,-48.942 c -1,-0.5 0.2,-1.7 0.7,-0.7" data-stroke="true" stroke-width="0.3" /><path d="m 104.317,-49.442 0.5,0.5 c 0.4,-0.1 0.8,0.4 0.6,0.6" data-stroke="true" stroke-width="0.3" /><path d="m 105.417,-48.342 c -0.4,0.5 0.2,0.8 0.5,0.5" data-stroke="true" stroke-width="0.3" /><path d="m 105.917,-47.842 c 0.2,-0.2 0.7,0.1 0.6,0.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  power_line_pylon:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-48.516167,45.087833)"><path d="m 49.362,-40.642 3.6,-3.6" data-stroke="true" stroke-width="0.2" /><path d="m 50.762,-42.842 0.8,0.8" data-stroke="true" stroke-width="0.2" /><path d="m 49.762,-41.842 0.8,0.8" data-stroke="true" stroke-width="0.2" /><path d="m 52.562,-43.042 -0.8,-0.8" data-stroke="true" stroke-width="0.2" /><path d="m 52.262,-42.442 c 0,0.607513 -0.492487,1.1 -1.1,1.1 -0.607513,0 -1.1,-0.492487 -1.1,-1.1 0,-0.607513 0.492487,-1.1 1.1,-1.1 0.607513,0 1.1,0.492487 1.1,1.1 z" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  track_path:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-8.4941667,45.573833)"><path d="m 9.34,-41.128 0.95,-0.95" data-stroke="true" stroke-width="0.3" /><path d="m 12.94,-44.728 -0.95,0.95" data-stroke="true" stroke-width="0.3" /><path d="m 11.59,-43.378 -0.9,0.9" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  monument_or_statue:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-128.76217,44.192816)"><path d="m 130.408,-39.947 1,-3.2 1,3.2" data-stroke="true" stroke-width="0.3" /><path d="m 129.808,-39.947 h 3.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  "ellipse-outline_ion_icon":
    '<svg viewBox="0 0 512 512" height="None" width="None"><circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>',
  earth_bank:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-75.629167,56.565833)"><path d="m 76.775,-54.52 c 0.7,0.5 2.3,0.5 3,0" data-stroke="true" stroke-width="0.3" /><path d="m 79.375,-54.22 0.2,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 77.175,-54.22 -0.2,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 78.675,-54.12 0.1,0.8" data-stroke="true" stroke-width="0.3" /><path d="m 77.875,-54.12 -0.1,0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  lower_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-198.52923,-158.05585)"><path d="m 143.904,-24.424 v -2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 142.504,-24.424 v -2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4759.2537,3827.4023 c 0,3.9138 -3.1728,7.0866 -7.0866,7.0866 -3.9138,0 -7.0866,-3.1728 -7.0866,-7.0866 0,-3.9139 3.1728,-7.0866 7.0866,-7.0866 3.9138,0 7.0866,3.1727 7.0866,7.0866 z" data-fill="true" /></g></g></g></svg>',
  building_pass_through:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-134.20817,44.525833)"><path d="m 135.854,-40.28 v -3.2" data-stroke="true" stroke-width="0.3" /><path d="m 137.854,-43.48 v 3.2" data-stroke="true" stroke-width="0.3" /><path d="m 135.254,-43.48 h 3.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  west_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-63.989237,-160.05685)"><path d="m 10.014,-21.948 -1.8,-1.8 1.8,-1.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 1550.4348,3843.3708 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  crossing_point:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-75.836167,44.667833)"><path d="m 78.082,-40.822 v -2.4" data-stroke="true" stroke-width="0.3" /><path d="m 76.882,-42.022 h 1.2" data-stroke="true" stroke-width="0.3" /><path d="m 78.882,-42.022 h 1.2" data-stroke="true" stroke-width="0.3" /><path d="m 78.882,-43.222 v 2.4" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  control_point:
    '<svg viewBox="0 0 9.2604165 9.2604169" height="35" width="35"><g><path d="m 7.6302083,4.6302062 c 0,1.6568545 -1.343147,3.0000022 -3.000002,3.0000022 -1.65685,0 -2.999998,-1.3431477 -2.999998,-3.0000022 0,-1.6568503 1.343148,-2.999998 2.999998,-2.999998 1.656855,0 3.000002,1.3431477 3.000002,2.999998 z" data-stroke="true" stroke-width="0.350001" /></g></svg>',
  south_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-134.38823,-152.44385)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 80.413,-31.361 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 3242.9309,3682.4338 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  copse:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(28.564833,43.532811)"><path d="m -26.419,-39.287 v -0.6" data-stroke="true" stroke-width="0.3" /><path d="m -26.419,-42.487 0.5,2 0.5,-2 0.7,2.6 h -2.4 z" data-stroke="true" stroke-width="0.3" /><path d="m -25.419,-39.287 v -0.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_west_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-139.27223,-152.91285)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 85.297,-30.892 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 3345.3088,3687.607 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  forest_corner:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 2.6458408,4.4458257 1.8,-1.7999999 h -1.8 V 0.845826 L 0.84584088,2.6458258 Z" data-stroke="true" stroke-width="0.3" /></g></svg>',
  lower:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-96.848235,-130.09985)"><path d="m 43.023,-53.23 h -3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 43.023,-54.53 h -3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2362.0648,3146.9456 c 0,6.523 -5.288,11.811 -11.8111,11.811 -6.523,0 -11.811,-5.288 -11.811,-11.811 0,-6.5231 5.288,-11.811 11.811,-11.811 6.5231,0 11.8111,5.2879 11.8111,11.811 z" data-fill="true" /></g></g></g></svg>',
  boundary_stone_cairn:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-170.58423,-141.56085)"><path d="m 116.359,-42.244 c 0,0.607513 -0.49249,1.1 -1.1,1.1 -0.60751,0 -1.1,-0.492487 -1.1,-1.1 0,-0.607513 0.49249,-1.1 1.1,-1.1 0.60751,0 1.1,0.492487 1.1,1.1 z" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4100.9073,3406.4574 c 0,4.8923 -3.966,8.8583 -8.8583,8.8583 -4.8923,0 -8.8583,-3.966 -8.8583,-8.8583 0,-4.8923 3.966,-8.8583 8.8583,-8.8583 4.8923,0 8.8583,3.966 8.8583,8.8583 z" data-fill="true" /></g></g></g></svg>',
  north_western:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-15.712167,56.840833)"><path d="m 16.908,-55.645 3,3" data-stroke="true" stroke-width="0.3" /><path d="m 17.608,-55.745 h -0.8 v 0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_east_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-128.38023,-153.13785)"><g><path d="m 3114.0018,3692.922 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2616 2.644,-5.9055 5.9056,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g><path d="m 3126.9939,3679.9299 c 0,17.6122 -14.2775,31.8897 -31.8898,31.8897 -17.6122,0 -31.8897,-14.2775 -31.8897,-31.8897 0,-17.6122 14.2775,-31.8898 31.8897,-31.8898 17.6123,0 31.8898,14.2776 31.8898,31.8898 z" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  south_west_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-182.04323,-153.40485)"><path d="m 125.318,-31.8 v 2.8 h 2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4354.4663,3700.4102 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9056 5.9055,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /></g></g></g></svg>',
  north_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-166.22623,-147.72885)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 112.051,-35.601 c 0,0.635127 -0.51487,1.15 -1.15,1.15 -0.63513,0 -1.15,-0.514873 -1.15,-1.15 0,-0.635127 0.51487,-1.15 1.15,-1.15 0.63513,0 1.15,0.514873 1.15,1.15 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 3995.0096,3516.1346 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  north_east_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(1.5578333,20.335833)"><path d="m 1.638,-17.24 c 0,0.607513 -0.4924868,1.1 -1.1,1.1 -0.60751322,0 -1.1,-0.492487 -1.1,-1.1 0,-0.607513 0.49248678,-1.1 1.1,-1.1 0.6075132,0 1.1,0.492487 1.1,1.1 z" data-stroke="true" stroke-width="0.3" /><path d="m 1.938,-19.24 v 1 h 0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  tunnel:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-56.021167,44.822833)"><path d="m 60.167,-41.527 h -3" data-stroke="true" stroke-width="0.3" /><path d="m 60.167,-42.827 h -3" data-stroke="true" stroke-width="0.3" /><path d="m 59.267,-43.577 -0.6,0.75 -0.6,-0.75" data-stroke="true" stroke-width="0.3" /><path d="m 59.267,-40.777 -0.6,-0.75 -0.6,0.75" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_west_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-114.43423,-165.11285)"><path d="m 2802.2852,3973.4338 c 0,14.3507 -11.6335,25.9843 -25.9842,25.9843 -14.3507,0 -25.9843,-11.6336 -25.9843,-25.9843 0,-14.3507 11.6336,-25.9842 25.9843,-25.9842 14.3507,0 25.9842,11.6335 25.9842,25.9842 z" data-stroke="true" stroke-width="7.08661" /><path d="m 2729.0569,3926.1897 v 23.6221 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  western:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-6.9951667,56.259833)"><path d="m 11.141,-53.614 h -3" data-stroke="true" stroke-width="0.3" /><path d="m 8.641,-54.114 -0.5,0.5 0.5,0.5" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_east_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-160.98323,-152.61985)"><path d="m 3898.3246,3700.7645 v -66.1417 h -66.1417" data-stroke="true" stroke-width="7.08661" /><path d="m 3885.3325,3653.5204 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  ruin: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-92.089167,44.391833)"><path d="m 96.135,-42.046 v -1.1 h -1.1" data-stroke="true" stroke-width="0.2" /><path d="m 96.135,-41.446 v 1.1 h -1.1" data-stroke="true" stroke-width="0.2" /><path d="m 93.335,-42.046 v -1.1 h 1.1" data-stroke="true" stroke-width="0.2" /><path d="m 93.335,-41.446 v 1.1 h 1.1" data-stroke="true" stroke-width="0.2" /></g></g></svg>',
  east_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-63.353238,-165.63285)"><path d="m 1569.6632,3975.0874 c 0,14.3507 -11.6335,25.9842 -25.9842,25.9842 -14.3507,0 -25.9843,-11.6335 -25.9843,-25.9842 0,-14.3507 11.6336,-25.9843 25.9843,-25.9843 14.3507,0 25.9842,11.6336 25.9842,25.9843 z" data-stroke="true" stroke-width="7.08661" /><path d="m 1581.4742,3965.6385 v 23.6221 h 18.8977" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  marshy:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-38.488167,39.002833)"><path d="m 41.834,-35.557 h -1.4" data-stroke="true" stroke-width="0.3" /><path d="m 41.834,-37.157 h -1.4" data-stroke="true" stroke-width="0.3" /><path d="m 41.834,-36.357 h -1.4" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_western:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-0.56916667,56.209833)"><path d="m 4.765,-55.114 -3,3" data-stroke="true" stroke-width="0.3" /><path d="m 2.465,-52.014 h -0.8 v -0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  narrow_passage:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-38.321167,49.702833)"><path d="m 39.767,-48.457 h 0.7 v 2.8 h -0.7" data-stroke="true" stroke-width="0.3" /><path d="m 42.167,-48.457 h -0.7 v 2.8 h 0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  west_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-106.57423,-165.95085)"><path d="m 2621.3404,3982.5992 c 0,14.3507 -11.6336,25.9842 -25.9843,25.9842 -14.3507,0 -25.9842,-11.6335 -25.9842,-25.9842 0,-14.3507 11.6335,-25.9843 25.9842,-25.9843 14.3507,0 25.9843,11.6336 25.9843,25.9843 z" data-stroke="true" stroke-width="7.08661" /><path d="m 2538.6632,3973.1504 v 23.622 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  fodder_rack:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-118.05917,44.491833)"><path d="m 119.905,-42.646 0.8,-0.8 0.8,0.8" data-stroke="true" stroke-width="0.3" /><path d="m 120.705,-43.446 v 3.2" data-stroke="true" stroke-width="0.3" /><path d="m 119.905,-40.246 h 1.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  road: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 0.94583353,4.3458331 4.3458331,0.94583353" data-stroke="true" stroke-width="0.499999" /></g></svg>',
  bridge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-27.927167,44.719833)"><path d="m 28.773,-41.374 h 0.6 l 1.9,-1.9 v -0.6" data-stroke="true" stroke-width="0.3" /><path d="m 32.373,-42.774 h -0.6 l -1.9,1.9 v 0.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  "re-entrant":
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-67.909167,56.944833)"><path d="m 72.155,-52.599 c -1.8,0 -0.8,-3.4 -1.6,-3.4" data-stroke="true" stroke-width="0.3" /><path d="m 68.955,-52.599 c 1.8,0 0.8,-3.4 1.6,-3.4" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-171.39623,-158.77785)"><path d="m 4111.2301,3855.6779 v -85.0394" data-stroke="true" stroke-width="7.08661" /><path d="m 4097.0569,3855.6779 h 28.3464" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  boulder_field:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-58.534236,-136.34285)"><path d="m 1445.1986,3271.3865 -14.1732,23.6221 h 28.3464 z" data-fill="true" /><path d="m 1416.8522,3247.7645 -14.1733,23.622 h 28.3465 z" data-fill="true" /><path d="m 1473.5451,3247.7645 14.1732,23.622 h -28.3465 z" data-fill="true" /><path d="m 1416.8522,3295.0086 -14.1733,23.622 h 28.3465 z" data-fill="true" /><path d="m 1473.5451,3295.0086 14.1732,23.622 h -28.3465 z" data-fill="true" /></g></g></svg>',
  ruined:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-69.706167,39.112534)"><path d="m 70.852,-34.917 v -2.2 c 0,-1.8 1.6,-0.6 3,1" data-stroke="true" stroke-width="0.3" /><path d="m 72.852,-36.117 h 1 v -1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  upper_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-193.54823,-157.97285)"><path d="m 138.923,-24.357 v -2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 137.523,-24.357 v -2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4641.5923,3762.8432 c 0,3.9139 -3.1728,7.0866 -7.0866,7.0866 -3.9138,0 -7.0866,-3.1727 -7.0866,-7.0866 0,-3.9138 3.1728,-7.0866 7.0866,-7.0866 3.9138,0 7.0866,3.1728 7.0866,7.0866 z" data-fill="true" /></g></g></g></svg>',
  north_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-84.973236,-159.65985)"><path d="m 30.448,-22.395 -0.8,-2.6 -0.8,2.6" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2075.6474,3795.0165 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9056 5.9055,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /></g></g></g></svg>',
  firm_ground_in_marsh:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-92.774167,50.422833)"><path d="m 93.62,-47.777 h 0.4" data-stroke="true" stroke-width="0.3" /><path d="m 97.22,-47.777 h -0.4" data-stroke="true" stroke-width="0.3" /><path d="m 93.62,-46.977 h 0.8" data-stroke="true" stroke-width="0.3" /><path d="m 97.22,-49.377 h -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 97.22,-46.177 h -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 97.22,-46.977 h -0.8" data-stroke="true" stroke-width="0.3" /><path d="m 97.22,-48.577 h -0.8" data-stroke="true" stroke-width="0.3" /><path d="m 93.62,-48.577 h 0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(28.248833,30.462833)"><path d="m -24.253,-27.542 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m -25.603,-29.442 v 1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-83.097234,-165.91585)"><path d="m 2051.4112,3964.0559 c 0,14.3507 -11.6335,25.9842 -25.9842,25.9842 -14.3507,0 -25.9843,-11.6335 -25.9843,-25.9842 0,-14.3507 11.6336,-25.9843 25.9843,-25.9843 14.3507,0 25.9842,11.6336 25.9842,25.9843 z" data-stroke="true" stroke-width="7.08661" /><path d="m 2015.9782,4001.8511 v 23.6221 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  south_east_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-108.60917,27.966833)"><path d="m 109.455,-27.121 3.2,3.2" data-stroke="true" stroke-width="0.3" /><path d="m 113.055,-24.321 -0.8,0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  marsh:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-87.240167,50.773833)"><path d="m 88.086,-48.128 h 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 91.186,-48.928 h -2.6" data-stroke="true" stroke-width="0.3" /><path d="m 90.686,-49.728 h -1.6" data-stroke="true" stroke-width="0.3" /><path d="m 90.686,-46.528 h -1.6" data-stroke="true" stroke-width="0.3" /><path d="m 91.186,-47.328 h -2.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  thicket:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-133.94317,51.897833)"><path d="m 137.689,-50.352 -2.2,2.2" data-stroke="true" stroke-width="0.3" /><path d="m 135.489,-50.352 2.2,2.2" data-stroke="true" stroke-width="0.3" /><path d="m 134.889,-49.752 2.2,2.2" data-stroke="true" stroke-width="0.3" /><path d="m 136.089,-50.952 2.2,2.2" data-stroke="true" stroke-width="0.3" /><path d="m 137.089,-50.952 -2.2,2.2" data-stroke="true" stroke-width="0.3" /><path d="m 138.289,-49.752 -2.2,2.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  deep: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(0.53483333,37.422833)"><path d="m 3.711,-36.377 c -2,0 -0.2,3.2 -1.6,3.2" data-stroke="true" stroke-width="0.3" /><path d="m 0.511,-36.377 c 2,0 0.2,3.2 1.6,3.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_west_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-118.37317,27.538833)"><path d="m 119.619,-23.493 3.2,-3.2" data-stroke="true" stroke-width="0.3" /><path d="m 119.219,-23.893 0.8,0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  control_point_left_arrow:
    '<svg viewBox="0 0 13.229167 9.2604169" height="35" width="50"><g><path d="m 11.930392,4.6302055 c 0,1.9329948 -1.567002,3.4999969 -3.4999971,3.4999969 -1.9329991,0 -3.5000012,-1.5670021 -3.5000012,-3.4999969 0,-1.9329992 1.5670021,-3.5000012 3.5000012,-3.5000012 1.9329951,0 3.4999971,1.567002 3.4999971,3.5000012 z" data-stroke="true" stroke-width="0.35" /><path ns2:nodetypes="ccc" d="M 1.1836172,8.2139732 4.6078575,4.6302083 1.1836172,1.0464435" data-stroke="true" /></g></svg>',
  vegetation_boundary:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-19.70924,-143.04985)"><path d="m 531.61594,3420.3708 c 0,1.9569 -1.58639,3.5433 -3.54331,3.5433 -1.95691,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.5864,-3.5433 3.54331,-3.5433 1.95692,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /><path d="m 548.15137,3431.0007 c 0,1.9569 -1.58639,3.5433 -3.54331,3.5433 -1.95691,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.58639,-3.5433 3.5433,-3.5433 1.95692,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /><path d="m 515.08051,3409.7409 c 0,1.9569 -1.5864,3.5433 -3.54331,3.5433 -1.95692,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.58639,-3.5433 3.54331,-3.5433 1.95691,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /><path d="m 564.68681,3441.6306 c 0,1.9569 -1.5864,3.5433 -3.54331,3.5433 -1.95692,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.58639,-3.5433 3.54331,-3.5433 1.95691,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /><path d="m 498.54507,3399.1109 c 0,1.957 -1.58639,3.5434 -3.5433,3.5434 -1.95692,0 -3.54331,-1.5864 -3.54331,-3.5434 0,-1.9569 1.58639,-3.5433 3.54331,-3.5433 1.95691,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 531.61594,3462.8905 c 0,1.9569 -1.58639,3.5433 -3.54331,3.5433 -1.95691,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.5864,-3.5433 3.54331,-3.5433 1.95692,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /><path d="m 548.15137,3452.2606 c 0,1.9569 -1.58639,3.5433 -3.54331,3.5433 -1.95691,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.58639,-3.5434 3.5433,-3.5434 1.95692,0 3.54331,1.5864 3.54331,3.5434 z" data-fill="true" /><path d="m 498.54507,3484.1503 c 0,1.9569 -1.58639,3.5433 -3.5433,3.5433 -1.95692,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.58639,-3.5433 3.54331,-3.5433 1.95691,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 515.08051,3473.5204 c 0,1.9569 -1.5864,3.5433 -3.54331,3.5433 -1.95692,0 -3.54331,-1.5864 -3.54331,-3.5433 0,-1.9569 1.58639,-3.5433 3.54331,-3.5433 1.95691,0 3.54331,1.5864 3.54331,3.5433 z" data-fill="true" /></g></g></svg>',
  rocky_stony:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-84.624235,-147.54185)"><path d="m 2061.4978,3547.7409 -14.1732,23.622 h 28.3465 z" data-fill="true" /><path d="m 2037.8758,3524.1188 -14.1732,23.6221 h 28.3464 z" data-fill="true" /><path d="m 2085.1199,3524.1188 14.1732,23.6221 h -28.3465 z" data-fill="true" /></g></g></svg>',
  small_erosion_gully:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-155.13423,-129.10486)"><path d="m 3689.2931,3093.3236 56.6929,56.6929" data-stroke="true" stroke-width="7.08661" /><path d="m 3708.1908,3074.426 56.6929,56.6929" data-stroke="true" stroke-width="7.08661" /><g><path d="m 3732.9939,3112.2212 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3745.986,3125.2133 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3720.0018,3099.2291 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2616 2.644,-5.9056 5.9056,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /><path d="m 3758.9781,3138.2054 c 0,3.2616 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3707.0096,3086.2369 c 0,3.2616 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  special_item_x:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(38.394833,35.960833)"><path d="m -35.149,-33.915 -1.2,1.2" data-stroke="true" stroke-width="0.3" /><path d="m -36.349,-33.915 1.2,1.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  special_item_o:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 3.9958333,2.6458333 c 0,0.7455839 -0.6044151,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.6044161 -1.35,-1.35 0,-0.745584 0.604416,-1.3499999 1.35,-1.3499999 0.7455849,0 1.35,0.6044159 1.35,1.3499999 z" data-stroke="true" stroke-width="0.3" /></g></svg>',
  south_east_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-38.690239,-161.17385)"><path d="m -15.585,-24.381 v 2.8 h -2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 1021.3246,3908.733 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  northern:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(47.413833,55.117833)"><path d="m -44.768,-53.972 v 3" data-stroke="true" stroke-width="0.3" /><path d="m -45.268,-53.472 0.5,-0.5 0.5,0.5" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  broad_leaved:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-62.699167,39.283333)"><path d="m 65.345,-35.05 v -0.8" data-stroke="true" stroke-width="0.3" /><path d="m 64.795,-37.55 c 0.05,-0.9 1.05,-0.9 1.1,0" data-stroke="true" stroke-width="0.3" /><path d="m 65.345,-36.05 c -0.4,0.6 -1.25,0.4 -0.9,-0.5" data-stroke="true" stroke-width="0.3" /><path d="m 65.345,-36.05 c 0.4,0.6 1.25,0.4 0.9,-0.5" data-stroke="true" stroke-width="0.3" /><path d="m 64.795,-37.55 c -0.85,-0.1 -1.05,0.7 -0.35,1" data-stroke="true" stroke-width="0.3" /><path d="m 65.895,-37.55 c 0.85,-0.1 1.05,0.7 0.35,1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  east_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-106.37123,-159.58485)"><path d="m 49.296,-25.02 2.6,0.8 -2.6,0.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2620.0884,3832.2212 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  bend: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-87.316167,28.062833)"><path d="m 91.112,-27.217 -2,1.3" data-stroke="true" stroke-width="0.3" /><path d="m 91.112,-23.617 -2,-1.3" data-stroke="true" stroke-width="0.3" /><path d="m 89.112,-25.917 c -0.4,0.25 -0.4,0.75 0,1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_east_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-20.84324,-161.08585)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m -33.432,-20.969 v -2.8 h -2.8" data-stroke="true" stroke-width="0.3" /></g><path d="m 599.74192,3828.7015 c 0,3.2615 -2.64398,5.9055 -5.90551,5.9055 -3.26152,0 -5.90551,-2.644 -5.90551,-5.9055 0,-3.2615 2.64399,-5.9055 5.90551,-5.9055 3.26153,0 5.90551,2.644 5.90551,5.9055 z" data-fill="true" /></g></g></svg>',
  west_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-145.47223,-152.81985)"><g><path d="m 3485.86,3672.418 c 0,3.2616 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g><path d="m 3530.7419,3672.4181 c 0,17.6122 -14.2775,31.8897 -31.8897,31.8897 -17.6122,0 -31.8898,-14.2775 -31.8898,-31.8897 0,-17.6122 14.2776,-31.8898 31.8898,-31.8898 17.6122,0 31.8897,14.2776 31.8897,31.8898 z" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  north_west_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-140.36723,-158.15585)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 85.392,-23.899 -1.4,-2.8 2.8,1.4" data-stroke="true" stroke-width="0.3" /></g><g><path d="m 3345.1907,3759.4889 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  east_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-120.54323,-153.13785)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 66.568,-30.667 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745585,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604415,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 2934.7813,3679.9298 c 0,3.2616 -2.644,5.9056 -5.9055,5.9056 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9056 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  east_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-166.26123,-152.91285)"><path d="m 3968.6711,3632.0952 42.5196,42.5197 -42.5196,42.5197" data-stroke="true" stroke-width="7.08661" /><g><path d="m 3993.4742,3674.6149 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  distinctive_tree:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(18.733833,43.267812)"><path d="m -16.088,-42.222 0.7,2.6 h -1.4 z" data-stroke="true" stroke-width="0.3" /><path d="m -16.088,-39.022 v -0.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  finish_right_arrow:
    '<svg viewBox="0 0 13.229167 9.2604169" height="35" width="50"><g><g transform="matrix(-0.04233333,0,0,0.04233333,154.98103,-172.01748)" data-stroke="true"><path d="m 3607.5136,4172.7803 c 0,32.6152 -26.4399,59.0551 -59.0551,59.0551 -32.6153,0 -59.0551,-26.4399 -59.0551,-59.0551 0,-32.6153 26.4398,-59.0551 59.0551,-59.0551 32.6152,0 59.0551,26.4398 59.0551,59.0551 z" data-stroke="true" stroke-width="8.26772" /><path d="m 3631.1356,4172.7803 c 0,45.6613 -37.0158,82.6771 -82.6771,82.6771 -45.6614,0 -82.6772,-37.0158 -82.6772,-82.6771 0,-45.6614 37.0158,-82.6772 82.6772,-82.6772 45.6613,0 82.6771,37.0158 82.6771,82.6772 z" data-stroke="true" stroke-width="8.26772" /></g><path ns2:nodetypes="ccc" d="M 12.009743,8.2139732 8.5855027,4.6302083 12.009743,1.0464435" data-stroke="true" /></g></svg>',
  north_west_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-150.73223,-152.16185)"><path d="m 3654.9939,3656.8748 c 0,17.6122 -14.2775,31.8897 -31.8898,31.8897 -17.6122,0 -31.8897,-14.2775 -31.8897,-31.8897 0,-17.6123 14.2775,-31.8898 31.8897,-31.8898 17.6123,0 31.8898,14.2775 31.8898,31.8898 z" data-stroke="true" stroke-width="7.08661" /><g><path d="m 3616.0175,3643.8826 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  fence:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-69.770167,44.522833)"><path d="m 71.216,-40.977 2.4,-2.4" data-stroke="true" stroke-width="0.3" /><path d="m 71.216,-40.977 v 0.6" data-stroke="true" stroke-width="0.3" /><path d="m 73.616,-43.377 v 0.8" data-stroke="true" stroke-width="0.3" /><path d="m 72.016,-41.777 v 0.8" data-stroke="true" stroke-width="0.3" /><path d="m 72.816,-42.577 v 0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_east_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-114.56523,-152.67285)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 60.59,-31.132 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 2787.6632,3655.9535 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  upper:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-85.689236,-130.54685)"><path d="m 31.864,-52.433 h -3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 31.864,-53.733 h -3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2098.4663,3135.0637 c 0,6.5231 -5.2879,11.811 -11.811,11.811 -6.523,0 -11.811,-5.2879 -11.811,-11.811 0,-6.523 5.288,-11.811 11.811,-11.811 6.5231,0 11.811,5.288 11.811,11.811 z" data-fill="true" /></g></g></g></svg>',
  north_east_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-97.272235,-159.50185)"><path d="m 41.597,-22.553 1.4,-2.8 -2.8,1.4" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2405.1514,3791.2842 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2616 2.644,-5.9055 5.9056,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  erosion_gully:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 1.6458334,4.2458156 1,-3.1999998 0.9999999,3.1999998" data-stroke="true" stroke-width="0.3" /></g></svg>',
  minor_water_channel_ditch:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-74.841167,51.149833)"><path d="m 75.487,-49.504 0.7,0.7" data-stroke="true" stroke-width="0.2" /><path d="m 79.487,-47.504 -0.7,-0.7" data-stroke="true" stroke-width="0.2" /><path d="m 76.487,-50.504 0.7,0.7" data-stroke="true" stroke-width="0.2" /><path d="m 78.487,-46.504 -0.7,-0.7" data-stroke="true" stroke-width="0.2" /><path d="m 77.587,-49.404 0.8,0.8" data-stroke="true" stroke-width="0.2" /><path d="m 76.587,-48.404 0.8,0.8" data-stroke="true" stroke-width="0.2" /><path d="m 77.287,-48.704 c 0.3,-0.3 0.7,0.1 0.4,0.4" data-stroke="true" stroke-width="0.2" /><path d="m 77.287,-48.704 c -0.3,0.3 -0.7,-0.1 -0.4,-0.4" data-stroke="true" stroke-width="0.2" /><path d="m 76.887,-49.104 c 0.3,-0.3 -0.1,-0.7 -0.4,-0.4" data-stroke="true" stroke-width="0.2" /><path d="m 76.487,-49.504 c -0.3,0.3 -0.7,-0.1 -0.4,-0.4 l 0.1,-0.1" data-stroke="true" stroke-width="0.2" /><path d="m 77.687,-48.304 c -0.3,0.3 0.1,0.7 0.4,0.4" data-stroke="true" stroke-width="0.2" /><path d="m 78.087,-47.904 c 0.3,-0.3 0.7,0.1 0.4,0.4" data-stroke="true" stroke-width="0.2" /><path d="m 78.487,-47.504 c -0.3,0.3 0.1,0.7 0.4,0.4 l 0.1,-0.1" data-stroke="true" stroke-width="0.2" /></g></g></svg>',
  south_east_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-73.284237,-165.68285)"><path d="m 1806.616,3965.6385 c 0,14.3507 -11.6336,25.9843 -25.9843,25.9843 -14.3507,0 -25.9842,-11.6336 -25.9842,-25.9843 0,-14.3507 11.6335,-25.9842 25.9842,-25.9842 14.3507,0 25.9843,11.6335 25.9843,25.9842 z" data-stroke="true" stroke-width="7.08661" /><path d="m 1813.7026,3989.2606 v 23.622 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  control_check:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-145.91123,-163.66585)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 90.586,-21.664 v 2" data-stroke="true" stroke-width="0.3" /><path d="m 89.786,-20.364 0.8,-0.6 0.8,0.6" data-stroke="true" stroke-width="0.3" /><path d="m 89.786,-18.164 0.8,-1.5 0.8,1.5" data-stroke="true" stroke-width="0.3" /></g><g><path d="m 3521.0333,3890.2369 c 0,6.5231 -5.288,11.8111 -11.8111,11.8111 -6.523,0 -11.811,-5.288 -11.811,-11.8111 0,-6.523 5.288,-11.811 11.811,-11.811 6.5231,0 11.8111,5.288 11.8111,11.811 z" data-fill="true" /></g></g></g></svg>',
  west_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-133.88623,-158.41685)"><path d="m 3266.5057,3785.733 -61.4173,18.8977 61.4173,18.8976" data-stroke="true" stroke-width="7.08661" /><g><path d="m 3192.0963,3804.6306 c 0,3.2616 -2.644,5.9055 -5.9056,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9056,2.644 5.9056,5.9055 z" data-fill="true" /></g></g></g></svg>',
  ant_hill_termite_mound:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-136.74817,57.489833)"><path d="m 139.394,-56.444 v 3.2" data-stroke="true" stroke-width="0.3" /><path d="m 137.794,-54.844 h 3.2" data-stroke="true" stroke-width="0.3" /><path d="m 140.594,-53.644 -2.4,-2.4" data-stroke="true" stroke-width="0.3" /><path d="m 140.594,-56.044 -2.4,2.4" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  earth_wall:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-87.400167,56.614833)"><path d="m 88.546,-53.969 h 3" data-stroke="true" stroke-width="0.3" /><path d="m 89.046,-54.369 v 0.8" data-stroke="true" stroke-width="0.3" /><path d="m 91.046,-54.369 v 0.8" data-stroke="true" stroke-width="0.3" /><path d="m 90.396,-54.569 v 1.2" data-stroke="true" stroke-width="0.3" /><path d="m 89.696,-54.569 v 1.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  first_aid_post:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-127.83523,-164.83085)"><path d="m 3070.4191,3920.7094 h 23.622 v 23.622 h 23.6221 v 23.6221 h -23.6221 v 23.622 h -23.622 v -23.622 h -23.6221 v -23.6221 h 23.6221 z" data-fill="true" /></g></g></svg>',
  south_west_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-96.899235,-165.90685)"><path d="m 2388.0727,3970.9299 c 0,14.3507 -11.6336,25.9842 -25.9843,25.9842 -14.3507,0 -25.9842,-11.6335 -25.9842,-25.9842 0,-14.3507 11.6335,-25.9843 25.9842,-25.9843 14.3507,0 25.9843,11.6336 25.9843,25.9843 z" data-stroke="true" stroke-width="7.08661" /><path d="m 2314.8443,3994.5519 v 23.6221 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  south_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-48.509239,-161.10385)"><path d="m -5.016,-24.051 -1.8,1.8 -1.8,-1.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 1214.2931,3897.6306 c 0,3.2616 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  north_west_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-73.888235,-159.57585)"><path d="m 17.513,-22.479 v -2.8 h 2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 1774.8207,3793.0322 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2615 2.644,-5.9055 5.9056,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  broken_ground:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-131.56717,57.547833)"><path d="m 133.813,-55.977 c 0.2,1 -1.4,1 -1.2,0" data-stroke="true" stroke-width="0.3" /><path d="m 134.613,-55.977 c -0.2,1 1.4,1 1.2,0" data-stroke="true" stroke-width="0.3" /><path d="m 134.813,-54.577 c 0.2,1 -1.4,1 -1.2,0" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_eastern:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(18.725833,55.678833)"><path d="m -17.63,-54.583 3,3" data-stroke="true" stroke-width="0.3" /><path d="m -14.53,-52.283 v 0.8 h -0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-156.08623,-152.97686)"><path d="m 3792.0963,3697.3866 -42.5197,-42.5197 -42.5197,42.5197" data-stroke="true" stroke-width="7.08661" /><g><path d="m 3755.4821,3678.4889 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  overgrown:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-6.5051667,38.219833)"><path d="m 8.751,-37.374 v 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 9.551,-37.374 v 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 10.351,-37.374 v 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 7.951,-37.374 v 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 10.951,-36.774 h -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 10.951,-35.974 h -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 10.951,-35.174 h -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 10.951,-34.374 h -3.6" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  saddle:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-112.43517,57.437833)"><path d="m 114.281,-56.392 c 0.5,0.6 0.5,2.6 0,3.2" data-stroke="true" stroke-width="0.3" /><path d="m 115.881,-56.392 c -0.5,0.6 -0.5,2.6 0,3.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  foot_no_direction:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-37.77724,-167.05085)"><path d="m -18.248,-18.154 v 2.8 h 1.4" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 958.41909,4027.481 c 0,3.2616 -2.64399,5.9055 -5.90551,5.9055 -3.26153,0 -5.90552,-2.6439 -5.90552,-5.9055 0,-3.2615 2.64399,-5.9055 5.90552,-5.9055 3.26152,0 5.90551,2.644 5.90551,5.9055 z" data-fill="true" /></g></g></g></svg>',
  south_west_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-57.389238,-160.60985)"><path d="m 1393.3483,3815.0952 v 66.1418 h 66.1417" data-stroke="true" stroke-width="7.08661" /><g><path d="m 1385.0805,3895.4102 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9056 5.9055,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /></g></g></g></svg>',
  open_land:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 2.6458332,4.4458333 1.8,-1.8 -1.8,-1.79999992 -1.79999977,1.79999992 z" data-stroke="true" stroke-width="0.3" /></g></svg>',
  start:
    '<svg viewBox="0 0 9.2604165 9.2604169" height="35" width="35"><g><path d="M 1.1302073,7.7487033 4.6302084,1.686706 8.1302094,7.7487033 Z" data-stroke="true" stroke-width="0.350001" /></g></svg>',
  refreshment_point:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-134.15523,-164.94835)"><path d="m 3200.8128,3927.9141 11.811,66.1418" data-stroke="true" stroke-width="7.08661" /><path d="m 3262.2301,3927.9141 -11.811,66.1418" data-stroke="true" stroke-width="7.08661" /><path d="m 3231.5215,3918.4653 c 14.1732,0 28.3464,4.7244 30.7086,9.4488 -2.3622,4.7244 -16.5354,9.4489 -30.7086,9.4489 -14.1733,0 -28.3465,-4.7245 -30.7087,-9.4489 2.3622,-4.7244 16.5354,-9.4488 30.7087,-9.4488 z" data-stroke="true" stroke-width="7.08661" /><path d="m 3212.6238,3994.0559 c 4.7244,7.0866 33.0709,7.0866 37.7953,0" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  south_east_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-181.57023,-148.19885)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 127.22,-35.781 c 0,0.635127 -0.51487,1.15 -1.15,1.15 -0.63513,0 -1.15,-0.514873 -1.15,-1.15 0,-0.635127 0.51487,-1.15 1.15,-1.15 0.63513,0 1.15,0.514873 1.15,1.15 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 4386.4033,3592.1976 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  shallow:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 1.0458335,2.3485557 c 0.9999999,0.7999999 2.1999998,0.7999999 3.1999996,0" data-stroke="true" stroke-width="0.3" /></g></svg>',
  north_eastern:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(38.120833,55.512833)"><path d="m -34.025,-54.317 -3,3" data-stroke="true" stroke-width="0.3" /><path d="m -34.725,-54.417 h 0.8 v 0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  junction:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-103.00817,38.513833)"><path d="m 104.154,-37.368 1.5,1.5" data-stroke="true" stroke-width="0.3" /><path d="m 104.154,-34.368 3,-3" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  low: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 1.0458335,2.943111 c 0.9999999,-0.7999999 2.1999998,-0.7999999 3.1999996,0" data-stroke="true" stroke-width="0.3" /></g></svg>',
  middle:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-105.61523,-130.19085)"><path d="m 50.29,-55.114 v 3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 51.59,-55.114 v 3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><path d="m 48.99,-55.114 v 3" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2569.1592,3137.8747 c 0,6.5231 -5.2879,11.8111 -11.811,11.8111 -6.523,0 -11.811,-5.288 -11.811,-11.8111 0,-6.523 5.288,-11.811 11.811,-11.811 6.5231,0 11.811,5.288 11.811,11.811 z" data-fill="true" /></g></g></g></svg>',
  south_west_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-192.51223,-147.26885)"><path d="m 4641.3325,3537.1582 c 0,15.003 -12.1623,27.1654 -27.1654,27.1654 -15.0031,0 -27.1653,-12.1624 -27.1653,-27.1654 0,-15.003 12.1622,-27.1653 27.1653,-27.1653 15.0031,0 27.1654,12.1623 27.1654,27.1653 z" data-stroke="true" stroke-width="7.08661" /><path d="m 4587.0018,3570.2291 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2616 2.644,-5.9056 5.9056,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /></g></g></svg>',
  eastern:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(28.871833,55.993833)"><path d="m -24.726,-53.348 h -3" data-stroke="true" stroke-width="0.3" /><path d="m -25.226,-53.848 0.5,0.5 -0.5,0.5" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_part:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-106.06023,-152.67985)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 52.085,-31.125 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745585,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604415,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g><path d="m 2573.7655,3650.2133 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  depression:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-117.61617,57.570833)"><path d="m 120.262,-55.825 c 2.2,0 2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /><path d="m 120.262,-55.825 c -2.2,0 -2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /><path d="m 118.762,-54.925 h 0.7" data-stroke="true" stroke-width="0.3" /><path d="m 121.762,-54.925 h -0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  west_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-186.45923,-153.27085)"><path d="m 132.034,-32.334 -1.8,1.8 1.8,1.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4475.3167,3683.0716 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  clearing:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-186.88023,-135.21585)"><path d="m 4480.5372,3299.0952 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4480.5372,3214.0558 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4523.0569,3256.5755 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4438.0175,3256.5755 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4501.797,3218.7802 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4518.3325,3277.8354 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5863 3.5433,3.5433 z" data-fill="true" /><path d="m 4501.797,3294.3708 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4518.3325,3235.3157 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4442.7419,3235.3157 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4459.2773,3218.7802 c 0,1.957 -1.5863,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4442.7419,3277.8354 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5863 3.5433,3.5433 z" data-fill="true" /><path d="m 4459.2773,3294.3708 c 0,1.9569 -1.5863,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /></g></g></svg>',
  boulder_cluster:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-65.673238,-136.15585)"><path d="m 1604.3876,3257.5204 -18.8976,33.0709 h 37.7952 z" data-fill="true" /><path d="m 1623.2852,3266.9692 -18.8976,33.0709 h 37.7953 z" data-fill="true" /></g></g></svg>',
  north_west_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-38.695167,34.052833)"><path d="m 42.691,-31.407 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 40.741,-32.007 -0.7,-0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_east_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(17.878833,31.558833)"><path d="m -13.883,-28.913 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m -14.633,-29.513 0.7,-0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  spur: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-62.091167,57.056833)"><path d="m 63.437,-56.111 c 0.4,0.7 0.4,2.7 0,3.4" data-stroke="true" stroke-width="0.3" /><path d="m 64.037,-56.111 c 0.3,2.2 2,0.9 2,1.7" data-stroke="true" stroke-width="0.3" /><path d="m 66.037,-54.411 c 0,0.8 -1.7,-0.5 -2,1.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-4.8043048,-1.4634351)"><path d="m 8.600138,3.6342709 c 0,0.6351269 -0.51487,1.1499999 -1.1499999,1.1499999 -0.63513,0 -1.1499999,-0.514873 -1.1499999,-1.1499999 0,-0.6351269 0.5148699,-1.1499999 1.1499999,-1.1499999 0.6351299,0 1.1499999,0.514873 1.1499999,1.1499999 z" data-stroke="true" stroke-width="0.3" /><g transform="matrix(0.04233333,0,0,0.04233333,-181.77192,-146.43542)"><path d="m 4475.7183,3592.1976 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  pit: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 1.4458334,1.0458474 2.6458333,4.245847 3.8458332,1.0458474" data-stroke="true" stroke-width="0.3" /></g></svg>',
  north_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-198.51623,-151.99085)"><path d="m 144.991,-30.464 -1.8,-1.8 -1.8,1.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4757.7655,3623.3078 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  sandy:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-106.20623,-146.83135)"><path d="m 2575.4427,3531.2763 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2608.5136,3502.9298 c 0,1.957 -1.5864,3.5434 -3.5433,3.5434 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5434 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2606.1514,3564.3472 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2542.3718,3564.3472 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2547.0963,3498.2054 c 0,1.957 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 2575.8207,3502.2448 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.957,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5863,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2573.1278,3565.6228 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5863 3.5434,3.5433 z" data-fill="true" /><path d="m 2554.4191,3561.0401 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2591.0805,3564.1109 c 0,1.957 -1.5864,3.5434 -3.5433,3.5434 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5434 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2601.7813,3521.3314 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2610.5687,3549.985 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5863 3.5433,3.5433 z" data-fill="true" /><path d="m 2543.0569,3511.1503 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2539.1356,3547.2921 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5434 3.5433,-3.5434 1.9569,0 3.5433,1.5864 3.5433,3.5434 z" data-fill="true" /><path d="m 2609.4821,3533.2842 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2540.6711,3527.8275 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.957,0 -3.5434,-1.5864 -3.5434,-3.5433 0,-1.9569 1.5864,-3.5433 3.5434,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2591.6947,3496.2921 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5434 3.5433,-3.5434 1.9569,0 3.5433,1.5864 3.5433,3.5434 z" data-fill="true" /><path d="m 2564.364,3498.418 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.957,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5863,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2593.3718,3513.3235 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2589.1671,3532.7881 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2594.1514,3548.4495 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2578.49,3517.1267 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 2575.8207,3551.4968 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.957,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5863,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2556.5687,3511.9535 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2560.3482,3544.3629 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 2558.9073,3531.2763 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /></g></g></svg>',
  shooting_platform:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 1.8458333,4.2458331 V 1.0458335 h 1.6000001" data-stroke="true" stroke-width="0.3" /></g></svg>',
  bare_rock:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-27.519167,49.514833)"><path d="m 30.165,-48.469 v 0.9" data-stroke="true" stroke-width="0.3" /><path d="m 30.165,-46.169 v 0.9" data-stroke="true" stroke-width="0.3" /><path d="m 28.565,-46.869 h 0.9" data-stroke="true" stroke-width="0.3" /><path d="m 30.865,-46.869 h 0.9" data-stroke="true" stroke-width="0.3" /><path d="m 31.365,-45.669 -0.7,-0.7" data-stroke="true" stroke-width="0.3" /><path d="m 28.965,-48.069 0.7,0.7" data-stroke="true" stroke-width="0.3" /><path d="m 31.365,-48.069 -0.7,0.7" data-stroke="true" stroke-width="0.3" /><path d="m 28.965,-45.669 0.7,-0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  beneath:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-28.848241,-167.42685)"><path d="m 701.43488,4045.8118 v -56.6929 h 85.03937 v 56.6929" data-stroke="true" stroke-width="7.08661" /><g><path d="m 751.04114,4036.3629 c 0,3.9138 -3.17279,7.0866 -7.08662,7.0866 -3.91383,0 -7.08661,-3.1728 -7.08661,-7.0866 0,-3.9138 3.17278,-7.0866 7.08661,-7.0866 3.91383,0 7.08662,3.1728 7.08662,7.0866 z" data-fill="true" /></g></g></g></svg>',
  ride: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-74.731235,-140.97085)"><path d="m 1836.0726,3409.0558 c 0,3.2616 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1850.2459,3394.8826 c 0,3.2615 -2.644,5.9055 -5.9056,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9056,2.644 5.9056,5.9055 z" data-fill="true" /><path d="m 1817.175,3390.1582 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1831.3482,3375.985 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /><path d="m 1863.238,3381.8905 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.6439 5.9055,5.9055 z" data-fill="true" /><path d="m 1844.3403,3362.9928 c 0,3.2616 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1823.0805,3422.048 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9056 5.9055,-5.9056 3.2615,0 5.9055,2.644 5.9055,5.9056 z" data-fill="true" /><path d="m 1804.1829,3403.1503 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9056,-2.644 -5.9056,-5.9055 0,-3.2615 2.644,-5.9055 5.9056,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1857.3325,3350.0007 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1810.0884,3435.0401 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1791.1907,3416.1424 c 0,3.2616 -2.6439,5.9056 -5.9055,5.9056 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9056 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 1876.2301,3368.8983 c 0,3.2616 -2.644,5.9056 -5.9055,5.9056 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9056 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  open: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-73.540235,-147.91685)"><path d="m 1836.2852,3523.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1836.2852,3589.67 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1770.1435,3589.67 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1770.1435,3523.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1815.0254,3523.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1791.4033,3523.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1791.4033,3589.67 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1815.0254,3589.67 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1836.2852,3544.7881 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1836.2852,3568.4102 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5434 3.5433,-3.5434 1.9569,0 3.5433,1.5864 3.5433,3.5434 z" data-fill="true" /><path d="m 1770.1435,3544.7881 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1770.1435,3568.4102 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.957 1.5864,-3.5434 3.5433,-3.5434 1.9569,0 3.5433,1.5864 3.5433,3.5434 z" data-fill="true" /></g></g></svg>',
  "semi-open_land":
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-175.98423,-135.12185)"><path d="m 4223.1514,3296.8747 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5434,-1.5864 -3.5434,-3.5433 0,-1.9569 1.5865,-3.5433 3.5434,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4223.1514,3211.8354 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5434,-1.5864 -3.5434,-3.5433 0,-1.957 1.5865,-3.5433 3.5434,-3.5433 1.9569,0 3.5433,1.5863 3.5433,3.5433 z" data-fill="true" /><path d="m 4265.671,3254.355 c 0,1.957 -1.5863,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4180.6317,3254.355 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4237.3246,3224.8275 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4252.6789,3268.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4237.3246,3283.8826 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4252.6789,3240.1818 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4193.6238,3240.1818 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4208.9781,3224.8275 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4193.6238,3268.5283 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 4208.9781,3283.8826 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /></g></g></svg>',
  cliff_rock_face:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(0.03995548,-1.0291227)"><path d="M 4.2058777,4.0749573 V 3.2749547 H 1.005878 v 0.8000026" data-stroke="true" stroke-width="0.3" /><path d="M 2.0558779,3.2749547 V 4.0749573" data-stroke="true" stroke-width="0.3" /><path d="M 3.1558778,3.2749547 V 4.0749573" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  west_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-26.988167,33.497833)"><path d="m 31.259,-30.852 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745585,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604415,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 28.009,-30.852 h 1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  crossing:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-97.827167,38.446833)"><path d="m 98.973,-37.301 3,3" data-stroke="true" stroke-width="0.3" /><path d="m 98.973,-34.301 3,-3" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  east_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(9.2728333,32.066833)"><path d="m -5.552,-29.421 c 0,0.745585 -0.6044156,1.35 -1.35,1.35 -0.7455844,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.6044156,-1.35 1.35,-1.35 0.7455844,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m -5.002,-29.421 h -1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  stone_wall:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-121.23223,-141.62785)"><path d="m 64.107,-40.377 3.6,-3.6" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2936.8837,3408.0401 c 0,5.8707 -4.7592,10.6299 -10.63,10.6299 -5.8707,0 -10.6299,-4.7592 -10.6299,-10.6299 0,-5.8708 4.7592,-10.6299 10.6299,-10.6299 5.8708,0 10.63,4.7591 10.63,10.6299 z" data-fill="true" /><path d="m 2913.2616,3431.6621 c 0,5.8708 -4.7592,10.63 -10.6299,10.63 -5.8708,0 -10.6299,-4.7592 -10.6299,-10.63 0,-5.8707 4.7591,-10.6299 10.6299,-10.6299 5.8707,0 10.6299,4.7592 10.6299,10.6299 z" data-fill="true" /><path d="m 2960.5057,3384.418 c 0,5.8708 -4.7592,10.63 -10.6299,10.63 -5.8708,0 -10.6299,-4.7592 -10.6299,-10.63 0,-5.8707 4.7591,-10.6299 10.6299,-10.6299 5.8707,0 10.6299,4.7592 10.6299,10.6299 z" data-fill="true" /></g></g></g></svg>',
  east_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-103.14617,27.697833)"><path d="m 103.992,-25.052 h 3.6" data-stroke="true" stroke-width="0.3" /><path d="m 107.592,-24.452 v -1.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  needle_leaved:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-56.787167,39.295827)"><path d="m 59.433,-38.25 -0.8,1.2 h 0.8 l -0.8,1.2 h 1.6 l -0.8,-1.2 h 0.8 z" data-stroke="true" stroke-width="0.3" /><path d="m 59.433,-35.05 v -0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-6.4851667,33.428833)"><path d="m 10.481,-31.058 c 0,0.745585 -0.6044156,1.35 -1.35,1.35 -0.7455844,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.6044156,-1.35 1.35,-1.35 0.7455844,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 9.131,-29.158 v -1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_foot:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-47.822238,-166.52485)"><path d="m 1218.1435,4013.8748 c 0,14.3507 -11.6335,25.9842 -25.9842,25.9842 -14.3507,0 -25.9843,-11.6335 -25.9843,-25.9842 0,-14.3507 11.6336,-25.9843 25.9843,-25.9843 14.3507,0 25.9842,11.6336 25.9842,25.9843 z" data-stroke="true" stroke-width="7.08661" /><path d="m 1182.7105,3952.4574 v 23.6221 h 18.8976" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  radio_or_tv_control:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 3.845833,0.84583494 1.4458337,2.6458354 H 3.845833 L 1.4458337,4.4458317" data-stroke="true" stroke-width="0.3" /></g></svg>',
  north_east_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-170.71823,-147.76185)"><path d="m 116.368,-35.868 c 0,0.635127 -0.51487,1.15 -1.15,1.15 -0.63513,0 -1.15,-0.514873 -1.15,-1.15 0,-0.635127 0.51487,-1.15 1.15,-1.15 0.63513,0 1.15,0.514873 1.15,1.15 z" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4130.0569,3524.0007 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  lake: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-48.184167,50.078833)"><path d="m 50.53,-47.433 c 0,0.4 0.6,0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 50.53,-47.433 c 0,-0.4 -0.6,-0.4 -0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 51.13,-47.433 c 0,-0.4 0.6,-0.4 0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 50.83,-48.333 c 2.2,0 2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /><path d="m 50.83,-48.333 c -2.2,0 -2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_west_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-20.81224,-155.69385)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m -33.188,-27.936 c 0,0.635128 -0.514873,1.15 -1.15,1.15 -0.635127,0 -1.15,-0.514872 -1.15,-1.15 0,-0.635127 0.514873,-1.15 1.15,-1.15 0.635127,0 1.15,0.514873 1.15,1.15 z" data-stroke="true" stroke-width="0.3" /></g><g><path d="m 531.09625,3711.3708 c 0,3.2615 -2.64398,5.9055 -5.90551,5.9055 -3.26152,0 -5.90551,-2.644 -5.90551,-5.9055 0,-3.2615 2.64399,-5.9055 5.90551,-5.9055 3.26153,0 5.90551,2.644 5.90551,5.9055 z" data-fill="true" /></g></g></g></svg>',
  finish:
    '<svg viewBox="0 0 9.2604165 9.2604169" height="35" width="35"><g><g transform="matrix(0.04233333,0,0,0.04233333,-145.58785,-172.01748)" data-stroke="true"><path d="m 3607.5136,4172.7803 c 0,32.6152 -26.4399,59.0551 -59.0551,59.0551 -32.6153,0 -59.0551,-26.4399 -59.0551,-59.0551 0,-32.6153 26.4398,-59.0551 59.0551,-59.0551 32.6152,0 59.0551,26.4398 59.0551,59.0551 z" data-stroke="true" stroke-width="8.26772" /><path d="m 3631.1356,4172.7803 c 0,45.6613 -37.0158,82.6771 -82.6771,82.6771 -45.6614,0 -82.6772,-37.0158 -82.6772,-82.6771 0,-45.6614 37.0158,-82.6772 82.6772,-82.6772 45.6613,0 82.6771,37.0158 82.6771,82.6772 z" data-stroke="true" stroke-width="8.26772" /></g></g></svg>',
  hill: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-102.33917,57.437833)"><path d="m 104.985,-55.692 c 2.2,0 2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /><path d="m 104.985,-55.692 c -2.2,0 -2.2,1.8 0,1.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  start_location:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 0.87291021,0.64583328 4.2729102,2.6458333 0.87291021,4.6458334 Z" data-stroke="true" stroke-width="0.3" /></g></svg>',
  stairway:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 4.2458331,1.4458334 H 3.4458333 v 0.7999999 h -0.8 V 3.0458332 H 1.8458334 v 0.8 H 1.0458335" data-stroke="true" stroke-width="0.3" /></g></svg>',
  control_point_right_arrow:
    '<svg viewBox="0 0 13.229167 9.2604169" height="35" width="50"><g><path d="m 1.2629684,4.6302055 c 0,1.9329948 1.567002,3.4999969 3.4999969,3.4999969 1.9329991,0 3.5000012,-1.5670021 3.5000012,-3.4999969 0,-1.9329992 -1.5670021,-3.5000012 -3.5000012,-3.5000012 -1.9329949,0 -3.4999969,1.567002 -3.4999969,3.5000012 z" data-stroke="true" stroke-width="0.35" /><path ns2:nodetypes="ccc" d="M 12.009743,8.2139732 8.5855027,4.6302083 12.009743,1.0464435" data-stroke="true" /></g></svg>',
  slash_for_height_on_slope:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="M 4.8458333,0.84583353 0.44583332,4.4458331" data-stroke="true" stroke-width="0.2" /></g></svg>',
  north_west_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-130.06317,27.805833)"><path d="m 131.309,-26.56 3.2,3.2" data-stroke="true" stroke-width="0.3" /><path d="m 130.909,-26.16 0.8,-0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  pipeline:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-98.236167,44.949833)"><path d="m 99.182,-40.604 3.6,-3.6" data-stroke="true" stroke-width="0.3" /><path d="m 100.082,-42.704 h 1.2 v 1.2" data-stroke="true" stroke-width="0.3" /><path d="m 98.982,-41.604 h 1.2 v 1.2" data-stroke="true" stroke-width="0.3" /><path d="m 101.182,-43.804 h 1.2 v 1.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_east_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-98.133167,28.038833)"><path d="m 98.979,-23.593 3.2,-3.2" data-stroke="true" stroke-width="0.3" /><path d="m 102.579,-26.393 -0.8,-0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  finish_left_arrow:
    '<svg viewBox="0 0 13.229167 9.2604169" height="35" width="50"><g><g transform="matrix(0.04233333,0,0,0.04233333,-141.78767,-172.01748)" data-stroke="true"><path d="m 3607.5136,4172.7803 c 0,32.6152 -26.4399,59.0551 -59.0551,59.0551 -32.6153,0 -59.0551,-26.4399 -59.0551,-59.0551 0,-32.6153 26.4398,-59.0551 59.0551,-59.0551 32.6152,0 59.0551,26.4398 59.0551,59.0551 z" data-stroke="true" stroke-width="8.26772" /><path d="m 3631.1356,4172.7803 c 0,45.6613 -37.0158,82.6771 -82.6771,82.6771 -45.6614,0 -82.6772,-37.0158 -82.6772,-82.6771 0,-45.6614 37.0158,-82.6772 82.6772,-82.6772 45.6613,0 82.6771,37.0158 82.6771,82.6772 z" data-stroke="true" stroke-width="8.26772" /></g><path ns2:nodetypes="ccc" d="M 1.183619,8.2139732 4.6078592,4.6302083 1.183619,1.0464435" data-stroke="true" /></g></svg>',
  narrow_marsh:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-138.82323,-135.67685)"><path d="m 3347.6947,3267.4653 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2616,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.6439,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3366.5923,3286.3629 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3328.797,3248.5676 c 0,3.2616 -2.6439,5.9056 -5.9055,5.9056 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9056 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /><path d="m 3385.49,3305.2606 c 0,3.2615 -2.644,5.9055 -5.9056,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9056 5.9055,-5.9056 3.2616,0 5.9056,2.644 5.9056,5.9056 z" data-fill="true" /><path d="m 3309.8994,3229.67 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  charcoal_burning_ground:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-123.91317,44.392833)"><path d="m 126.559,-43.047 -1.1,1.95 h 2.2 z" data-stroke="true" stroke-width="0.2" /><path d="m 127.909,-41.747 c 0,0.745585 -0.60442,1.35 -1.35,1.35 -0.74558,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.60442,-1.35 1.35,-1.35 0.74558,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  between:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-121.39223,-164.96285)"><path d="m 2965.4663,3978.1582 h -70.8661" data-stroke="true" stroke-width="7.08661" /><path d="m 2965.4663,3940.363 h -70.8661" data-stroke="true" stroke-width="7.08661" /><g><path d="m 2937.1199,3959.2606 c 0,3.9138 -3.1728,7.0866 -7.0866,7.0866 -3.9139,0 -7.0867,-3.1728 -7.0867,-7.0866 0,-3.9139 3.1728,-7.0867 7.0867,-7.0867 3.9138,0 7.0866,3.1728 7.0866,7.0867 z" data-fill="true" /></g></g></g></svg>',
  south_east_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-170.84623,-152.92585)"><path d="m 4131.3089,3641.8511 v 66.1418 h -66.1418" data-stroke="true" stroke-width="7.08661" /><path d="m 4118.3167,3689.0952 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  small_depression:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><path d="m 3.6458333,1.8208334 c 0.7999999,2.1999998 -2.79999983,2.1999998 -1.9999999,0" data-stroke="true" stroke-width="0.3" /></g></svg>',
  boulder:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-48.580237,-137.33885)"><path d="m 1210.0648,3276.0165 35.433,61.4173 h -70.8661 z" data-fill="true" /></g></g></svg>',
  east_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-175.55923,-147.95685)"><path d="m 120.909,-35.848 c 0,0.635127 -0.51487,1.15 -1.15,1.15 -0.63513,0 -1.15,-0.514873 -1.15,-1.15 0,-0.635127 0.51487,-1.15 1.15,-1.15 0.63513,0 1.15,0.514873 1.15,1.15 z" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4251.4978,3557.544 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  west_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-182.12323,-158.64485)"><path d="m 4322.1041,3810.0165 h 85.0394" data-stroke="true" stroke-width="7.08661" /><path d="m 4322.1041,3824.1897 v -28.3464" data-stroke="true" stroke-width="7.08661" /></g></g></svg>',
  west_side:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-197.91022,-147.49285)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 144.21,-36.312 c 0,0.635127 -0.51487,1.15 -1.15,1.15 -0.63513,0 -1.15,-0.514873 -1.15,-1.15 0,-0.635127 0.51487,-1.15 1.15,-1.15 0.63513,0 1.15,0.514873 1.15,1.15 z" data-stroke="true" stroke-width="0.3" /></g><g><path d="m 4707.427,3546.5834 c 0,3.2615 -2.644,5.9055 -5.9056,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9056,2.644 5.9056,5.9055 z" data-fill="true" /></g></g></g></svg>',
  linear_thicket:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-139.38917,51.693104)"><path d="m 142.435,-48.987 c 0,0.220914 -0.17909,0.4 -0.4,0.4 -0.22091,0 -0.4,-0.179086 -0.4,-0.4 0,-0.220914 0.17909,-0.4 0.4,-0.4 0.22091,0 0.4,0.179086 0.4,0.4 z" data-stroke="true" stroke-width="0.3" /><path d="m 141.435,-47.987 c 0,0.220914 -0.17909,0.4 -0.4,0.4 -0.22091,0 -0.4,-0.179086 -0.4,-0.4 0,-0.220914 0.17909,-0.4 0.4,-0.4 0.22091,0 0.4,0.179086 0.4,0.4 z" data-stroke="true" stroke-width="0.3" /><path d="m 143.435,-49.987 c 0,0.220914 -0.17909,0.4 -0.4,0.4 -0.22091,0 -0.4,-0.179086 -0.4,-0.4 0,-0.220914 0.17909,-0.4 0.4,-0.4 0.22091,0 0.4,0.179086 0.4,0.4 z" data-stroke="true" stroke-width="0.3" /><path d="m 140.235,-47.187 0.4,-0.4" data-stroke="true" stroke-width="0.3" /><path d="m 143.835,-50.787 -0.4,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 142.335,-49.287 0.4,-0.4" data-stroke="true" stroke-width="0.3" /><path d="m 141.735,-48.687 -0.4,0.4" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  water_tank_water_trough:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-107.85117,51.542833)"><path d="m 110.197,-50.172 c 0,-0.4 0.6,-0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 110.197,-50.172 c 0,0.4 -0.6,0.4 -0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 110.797,-50.172 c 0,0.4 0.6,0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 109.597,-50.172 c 0,-0.4 -0.6,-0.4 -0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 111.397,-50.172 c 0,-0.4 0.6,-0.4 0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 111.897,-48.972 v 1.6 h -2.8 v -1.6 z" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  north_west_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-192.67123,-152.60585)"><path d="m 135.946,-29.799 v -2.8 h 2.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 4605.5214,3653.1897 c 0,3.2615 -2.6439,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  north_end:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-92.632167,28.485833)"><path d="m 95.278,-24.04 v -3.6" data-stroke="true" stroke-width="0.3" /><path d="m 94.678,-27.64 h 1.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-120.76323,-159.12985)"><path d="m 66.238,-26.425 -0.8,2.6 -0.8,-2.6" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2921.0805,3860.4495 c 0,3.2616 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.6439 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  southern:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(8.4148333,57.587833)"><path d="m -5.769,-56.442 v 3" data-stroke="true" stroke-width="0.3" /><path d="m -6.269,-53.942 0.5,0.5 0.5,-0.5" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  east_corner_outside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-29.88524,-160.84785)"><path d="m -26.79,-21.157 1.8,-1.8 -1.8,-1.8" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 803.88366,3862.0558 c 0,3.2616 -2.64399,5.9055 -5.90552,5.9055 -3.26152,0 -5.90551,-2.6439 -5.90551,-5.9055 0,-3.2615 2.64399,-5.9055 5.90551,-5.9055 3.26153,0 5.90552,2.644 5.90552,5.9055 z" data-fill="true" /></g></g></g></svg>',
  south_east_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-114.51423,-159.59985)"><path d="m 58.839,-25.955 1.4,2.8 -2.8,-1.4" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 2812.4427,3871.5519 c 0,3.2615 -2.644,5.9055 -5.9055,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></g></svg>',
  cave: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-3.701818,1.3428944)"><path d="M 7.097635,0.80293905 5.5976352,1.302939 l 1.4999998,0.5" data-stroke="true" stroke-width="0.3" /><path d="M 5.8976352,-0.49706086 C 6.2976351,0.10293908 6.3976351,0.50293905 6.4976351,0.90293905" data-stroke="true" stroke-width="0.3" /><path d="M 5.8976352,3.1029388 C 6.2976351,2.502939 6.3976351,2.102939 6.4976351,1.702939" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  paved_area:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-87.017167,44.204833)"><path d="m 91.063,-42.959 v 2.8 h -2.8 v -2.8 z" data-stroke="true" stroke-width="0.3" /><path d="m 88.263,-41.959 1,-1" data-stroke="true" stroke-width="0.3" /><path d="m 88.263,-40.759 2.2,-2.2" data-stroke="true" stroke-width="0.3" /><path d="m 88.863,-40.159 2.2,-2.2" data-stroke="true" stroke-width="0.3" /><path d="m 90.063,-40.159 1,-1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  knol: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-165.35823,-129.80985)"><path d="m 3992.2222,3128.8747 c 0,13.0461 -10.5759,23.6221 -23.622,23.6221 -13.0461,0 -23.6221,-10.576 -23.6221,-23.6221 0,-13.0461 10.576,-23.622 23.6221,-23.622 13.0461,0 23.622,10.5759 23.622,23.622 z" data-fill="true" /></g></g></svg>',
  pond: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-55.866167,50.949833)"><path d="m 58.212,-49.504 c 0,-0.4 0.6,-0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 58.212,-49.504 c 0,0.4 -0.6,0.4 -0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 58.812,-49.504 c 0,0.4 0.6,0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 57.612,-49.504 c 0,-0.4 -0.6,-0.4 -0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 59.412,-49.504 c 0,-0.4 0.6,-0.4 0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 59.512,-48.504 c 0.8,2.2 -2.8,2.2 -2,0" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  power_line:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-38.886167,44.852833)"><path d="m 39.732,-40.407 3.6,-3.6" data-stroke="true" stroke-width="0.3" /><path d="m 41.132,-42.607 0.8,0.8" data-stroke="true" stroke-width="0.3" /><path d="m 40.132,-41.607 0.8,0.8" data-stroke="true" stroke-width="0.3" /><path d="m 42.932,-42.807 -0.8,-0.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  stony_ground:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-71.967237,-135.12785)"><path d="m 1766.0569,3254.4968 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1799.1278,3221.4259 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1799.1278,3287.5676 c 0,1.957 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1732.986,3287.5676 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1732.986,3221.4259 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1766.0569,3221.4259 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1766.0569,3287.5676 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1749.5215,3287.5676 c 0,1.957 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1782.5923,3287.5676 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1799.1278,3237.9613 c 0,1.957 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1799.1278,3271.0322 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1732.986,3237.9613 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1732.986,3271.0322 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1799.1278,3254.4968 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1732.986,3254.4968 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1782.5923,3221.4259 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1749.5215,3221.4259 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1782.5923,3237.9613 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1782.5923,3254.4968 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1782.5923,3271.0322 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1766.0569,3237.9613 c 0,1.957 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1766.0569,3271.0322 c 0,1.9569 -1.5864,3.5433 -3.5433,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.9569,0 3.5433,1.5864 3.5433,3.5433 z" data-fill="true" /><path d="m 1749.5215,3237.9613 c 0,1.957 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5863 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1749.5215,3271.0322 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /><path d="m 1749.5215,3254.4968 c 0,1.9569 -1.5864,3.5433 -3.5434,3.5433 -1.9569,0 -3.5433,-1.5864 -3.5433,-3.5433 0,-1.9569 1.5864,-3.5433 3.5433,-3.5433 1.957,0 3.5434,1.5864 3.5434,3.5433 z" data-fill="true" /></g></g></svg>',
  rock_pillar:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-28.919239,-136.77485)"><path d="m 726.73405,3335.922 18.89764,-85.0394 18.89763,85.0394 z" data-fill="true" /></g></g></svg>',
  south_west_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-16.067167,33.497833)"><path d="m 20.063,-30.852 c 0,0.745585 -0.604416,1.35 -1.35,1.35 -0.745585,0 -1.35,-0.604415 -1.35,-1.35 0,-0.745584 0.604415,-1.35 1.35,-1.35 0.745584,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 18.113,-30.252 -0.7,0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  waterhole:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-62.160167,50.492846)"><path d="m 64.506,-49.222 c 0,-0.4 0.6,-0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 64.506,-49.222 c 0,0.4 -0.6,0.4 -0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 65.106,-49.222 c 0,0.4 0.6,0.4 0.6,0" data-stroke="true" stroke-width="0.2" /><path d="m 63.906,-49.222 c 0,-0.4 -0.6,-0.4 -0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 65.706,-49.222 c 0,-0.4 0.6,-0.4 0.6,0 v 0.2" data-stroke="true" stroke-width="0.2" /><path d="m 65.606,-48.222 -0.8,2 -0.8,-2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  top: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-21.239241,-167.06985)"><path d="m -34.886,-15.26 v -2.2 h 1.6 v 2.2" transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)" data-stroke="true" stroke-width="0.3" /><g><path d="m 571.30098,3977.733 c 0,3.9138 -3.17279,7.0866 -7.08661,7.0866 -3.91383,0 -7.08662,-3.1728 -7.08662,-7.0866 0,-3.9138 3.17279,-7.0866 7.08662,-7.0866 3.91382,0 7.08661,3.1728 7.08661,7.0866 z" data-fill="true" /></g></g></g></svg>',
  building:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-139.20723,-142.29985)"><path d="m 3383.9309,3390.8432 v 66.1418 h -66.1417 v -66.1418 z" data-fill="true" /></g></g></svg>',
  south_west_tip:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-128.00823,-158.43285)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 73.033,-27.122 -1.4,2.8 2.8,-1.4" data-stroke="true" stroke-width="0.3" /></g><g><path d="m 3053.2459,3843.985 c 0,3.2615 -2.644,5.9055 -5.9056,5.9055 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9055 0,-3.2616 2.644,-5.9055 5.9055,-5.9055 3.2616,0 5.9056,2.6439 5.9056,5.9055 z" data-fill="true" /></g></g></g></svg>',
  tree_stump_root_stock:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(8.8198333,44.690833)"><path d="m -4.824,-42.045 c 0,0.745584 -0.6044156,1.35 -1.35,1.35 -0.7455844,0 -1.35,-0.604416 -1.35,-1.35 0,-0.745584 0.6044156,-1.35 1.35,-1.35 0.7455844,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m -5.274,-42.945 -1.8,1.8" data-stroke="true" stroke-width="0.3" /><path d="m -5.274,-41.145 -1.8,-1.8" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  well: '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-98.021167,50.547833)"><path d="m 102.017,-48.377 c 0,0.745584 -0.60442,1.35 -1.35,1.35 -0.745584,0 -1.35,-0.604416 -1.35,-1.35 0,-0.745584 0.604416,-1.35 1.35,-1.35 0.74558,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 100.367,-46.377 c 0,0.4 0.6,0.4 0.6,0" data-stroke="true" stroke-width="0.3" /><path d="m 100.367,-46.377 c 0,-0.4 -0.6,-0.4 -0.6,0 v 0.2" data-stroke="true" stroke-width="0.3" /><path d="m 100.967,-46.377 c 0,-0.4 0.6,-0.4 0.6,0 v 0.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_east_edge:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(0.67983333,32.265833)"><path d="m 3.316,-29.62 c 0,0.745584 -0.6044156,1.35 -1.35,1.35 -0.7455844,0 -1.35,-0.604416 -1.35,-1.35 0,-0.745584 0.6044156,-1.35 1.35,-1.35 0.7455844,0 1.35,0.604416 1.35,1.35 z" data-stroke="true" stroke-width="0.3" /><path d="m 2.566,-29.02 0.7,0.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  tower:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-103.26717,44.814833)"><path d="m 105.913,-40.569 v -3.2" data-stroke="true" stroke-width="0.3" /><path d="m 104.313,-43.769 h 3.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  river_stream_watercourse:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-68.923222,49.834888)"><path d="m 71.369,-47.389 c 0.3,-0.3 0.7,0.1 0.4,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 71.369,-47.389 c -0.3,0.3 -0.7,-0.1 -0.4,-0.4" data-stroke="true" stroke-width="0.3" /><path d="m 70.969,-47.789 c 0.3,-0.3 -0.1,-0.7 -0.4,-0.4" data-stroke="true" stroke-width="0.3" /><path d="m 70.569,-48.189 c -0.3,0.3 -0.7,-0.1 -0.4,-0.4 l 0.1,-0.1" data-stroke="true" stroke-width="0.3" /><path d="m 71.769,-46.989 c -0.3,0.3 0.1,0.7 0.4,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 72.169,-46.589 c 0.3,-0.3 0.7,0.1 0.4,0.4" data-stroke="true" stroke-width="0.3" /><path d="m 72.569,-46.189 c -0.3,0.3 0.1,0.7 0.4,0.4 l 0.1,-0.1" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  south_corner_inside:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="matrix(0.04233333,0,0,0.04233333,-175.80023,-153.30585)"><g transform="matrix(23.622047,0,0,23.622047,1369.3955,4404.3472)"><path d="m 122.275,-31.399 -1.8,1.8 -1.8,-1.8" data-stroke="true" stroke-width="0.3" /></g><path d="m 4221.1671,3681.5361 c 0,3.2616 -2.644,5.9056 -5.9055,5.9056 -3.2615,0 -5.9055,-2.644 -5.9055,-5.9056 0,-3.2615 2.644,-5.9055 5.9055,-5.9055 3.2615,0 5.9055,2.644 5.9055,5.9055 z" data-fill="true" /></g></g></svg>',
  quarry:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-81.355167,56.747833)"><path d="m 82.801,-52.502 c -1.2,-2.3 0.2,-3.2 1.2,-3.2" data-stroke="true" stroke-width="0.3" /><path d="m 85.201,-52.502 c 1.2,-2.3 -0.2,-3.2 -1.2,-3.2" data-stroke="true" stroke-width="0.3" /><path d="m 82.901,-55.202 0.6,0.6" data-stroke="true" stroke-width="0.3" /><path d="m 85.101,-55.202 -0.6,0.6" data-stroke="true" stroke-width="0.3" /><path d="m 82.601,-53.402 0.5,-0.2" data-stroke="true" stroke-width="0.3" /><path d="m 85.401,-53.402 -0.5,-0.2" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
  terrace:
    '<svg viewBox="0 0 5.2916666 5.2916668" height="20" width="20"><g><g transform="translate(-56.778167,56.790833)"><path d="m 58.124,-55.845 c 0.4,0.7 0.4,2.7 0,3.4" data-stroke="true" stroke-width="0.3" /><path d="m 58.724,-55.845 c 0.4,1.5 1.9,-0.1 2,1.7" data-stroke="true" stroke-width="0.3" /><path d="m 60.724,-54.145 c -0.1,1.8 -1.6,0.2 -2,1.7" data-stroke="true" stroke-width="0.3" /></g></g></svg>',
};

const sheetTemplate = document.createElement("template");
sheetTemplate.innerHTML = `
  <style>
    table, th, td, tr {
      border-color: var(--primary);
      border-style: solid;
      border-width: 1px;
      border-collapse: separate;
      font-size: calc(var(--cell-size) / 1.5);
      color: var(--primary);
    }
    table {
      font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 400;
      border-width: 5px;
      border-radius: var(--border-radius);
      border-spacing: 0;
      overflow: hidden;
    }
    th, td {
      height: var(--cell-size);
      text-align: center;
    }
    td { width: var(--cell-size); }
    tr:nth-of-type(3n+1):not(:last-of-type) > td { border-bottom-width: 3px; }
    tr > td:nth-of-type(3n) { border-right-width: 3px; }
    tr:last-of-type > td { border-top-width: 3px; }
    tr:nth-last-of-type(2) { border-bottom-width: 3px; }
    tr > th { border-bottom-width: 3px; }
    tr > th:not(:last-of-type) { border-right-width: 3px; }
    svg {
      width: 100%;
      height: 100%;
      max-height: var(--cell-size);
      max-width: calc(2.5 * var(--cell-size)); 
    }
    path {
      fill: none;
      stroke: none;
      stroke-linecap: round;
      stroke-linejoin: miter;
      stroke-miterlimit: 2.23607;
      stroke-dasharray: none;
      stroke-opacity: 1;
      fill-opacity: 1;
      fill-rule: evenodd;
    }
    path[data-stroke] { stroke: var(--primary); }
    path[data-fill] { fill: var(--primary); }
  </style>
  
  <table>
    <tr>
      <th colspan="8" data-title></th>
    </tr>
    <tr>
      <th colspan="3" data-course></th>
      <th colspan="3" data-distance></th>
      <th colspan="2" data-elevation></th>
    </tr>
  </table>
`;

/**
 * Create an SVG icon.
 * @param {SYMBOLS | null} name
 * @returns {string}
 */
function createIcon(name) {
  if (Object.keys(SYMBOLS).includes(name)) return SYMBOLS[name];
  return "";
}

/**
 * A web component to build a control description sheet.
 * @element control-description-sheet
 *
 * @attr {string} title - Title of the course
 * @attr {string} [course] - Course name or number
 * @attr {string} [distance] - Total distance of the course
 * @attr {string} [elevation] - Total elevation gain
 * @attr {string} [finalDistance] - Distance to the final control
 * @cssprop --primary - Color of the text, borders and symbols
 * @cssprop --width - Width of the control sheet
 * @cssprop --border-radius - Border radius of the outermost border
 */
export class ControlDescriptionSheet extends HTMLElement {
  get title() {
    return this.getAttribute("title");
  }

  set title(title) {
    this.setAttribute("title", title);
  }

  get course() {
    return this.getAttribute("course");
  }

  set course(course) {
    this.setAttribute("course", course);
  }

  get distance() {
    return this.getAttribute("distance");
  }

  set distance(distance) {
    this.setAttribute("distance", distance);
  }

  get elevation() {
    return this.getAttribute("elevation");
  }

  set elevation(elevation) {
    this.setAttribute("elevation", elevation);
  }

  get finalDistance() {
    return this.getAttribute("finalDistance");
  }

  set finalDistance(finalDistance) {
    this.setAttribute("finalDistance", finalDistance);
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host { 
          --primary: #b30e8e;
          --width: 12em;
          --cell-size: calc(var(--width) / 8);
          --border-radius: 0px;
        }
      </style>`;
    shadow.append(sheetTemplate.content.cloneNode(true));

    shadow.querySelector(`[data-title]`).innerHTML = this.title ?? "";
    shadow.querySelector(`[data-course]`).innerHTML = this.course ?? "";
    shadow.querySelector(`[data-distance]`).innerHTML = this.distance ?? "";
    shadow.querySelector(`[data-elevation]`).innerHTML = this.elevation ?? "";

    for (const [index, control] of [...this.children].entries()) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${
          index == 0 ? createIcon("start_location") : index
        }</strong></td>
        <td>${control.getAttribute("code") ?? ""}</td>
        <td>${createIcon(control.getAttribute("which"))}</td>
        <td>${createIcon(control.getAttribute("feature"))}</td>
        <td>${createIcon(control.getAttribute("appearance"))}</td>
        <td>${createIcon(control.getAttribute("dimensions"))}</td>
        <td>${createIcon(control.getAttribute("location"))}</td>
        <td>${createIcon(control.getAttribute("other"))}</td>
      `;
      shadow.querySelector("table").append(tr);
    }
    const footer = document.createElement("tr");
    footer.innerHTML = `
    <td colspan="8">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
          ${createIcon("control_point_right_arrow")}
          <div style="display: flex; flex-direction: column; justify-content: center;">${
            this.finalDistance ?? ""
          }</div>
          ${createIcon("finish_left_arrow")}
        </div>
    </td>`;
    shadow.querySelector("table").append(footer);
  }
}

/**
 * An element representing a control.
 * @element control-description
 *
 * @attr {string} [code] - Control code
 * @attr {string} [which] - Which feature
 * @attr {string} [feature] - Control feature
 * @attr {string} [appearance] - Control appearance
 * @attr {string} [dimensions] - Control dimensions
 * @attr {string} [location] - Control location
 * @attr {string} [other] - Other informaion about the control
 */
export class ControlDescription extends HTMLElement {
  get code() {
    return this.getAttribute("code");
  }

  set code(code) {
    this.setAttribute("code", code);
  }

  get which() {
    return this.getAttribute("which");
  }

  set which(which) {
    this.setAttribute("which", which);
  }

  get feature() {
    return this.getAttribute("feature");
  }

  set feature(feature) {
    this.setAttribute("feature", feature);
  }

  get appearance() {
    return this.getAttribute("appearance");
  }

  set appearance(appearance) {
    this.setAttribute("appearance", appearance);
  }

  get dimensions() {
    return this.getAttribute("dimensions");
  }

  set dimensions(dimensions) {
    this.setAttribute("dimensions", dimensions);
  }

  get location() {
    return this.getAttribute("location");
  }

  set location(location) {
    this.setAttribute("location", location);
  }

  get other() {
    return this.getAttribute("other");
  }

  set other(other) {
    this.setAttribute("other", other);
  }

  constructor() {
    super();
  }
}

if (!customElements.get("control-description-sheet"))
  customElements.define("control-description-sheet", ControlDescriptionSheet);

if (!customElements.get("control-description"))
  customElements.define("control-description", ControlDescription);
