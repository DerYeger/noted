<template>
  <svg
    class="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 99.21 99.21"
  >
    <path
      class="logo__main"
      d="M47.21,82.26a2,2,0,0,1-2-2V19.56a2,2,0,0,1,2-2H80.64a2,2,0,0,0,2-2V2.9a2,2,0,0,0-2-2H18.1a2,2,0,0,0-2,2V96.32a2,2,0,0,0,2,2H80.64a2,2,0,0,0,2-2V84.26a2,2,0,0,0-2-2Z"
    />
    <rect
      class="logo__secondary"
      x="50.68"
      y="22.81"
      width="45.8"
      height="54.6"
      rx="2"
    />
    <rect
      class="logo__secondary"
      x="3.8"
      y="0.9"
      width="16.46"
      height="97.42"
      rx="2"
    />
  </svg>
</template>

<style>
.logo {
  display: block;
}

.logo__secondary {
  fill: #008f54;
}

.logo__main {
  fill: #00dc82;
}

rect {
  shape-rendering: crispEdges;
}
</style>
