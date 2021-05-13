<template>
  <div class="canvas-container">
    <!-- Canvas will render here  -->
  </div>
</template>

<script>
import {
  Mesh,
  Color,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  MeshBasicMaterial,
  BoxGeometry,
  IcosahedronGeometry,
} from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

class Stage {
  constructor(options = {}) {
    this.meshes = [];
    this.container = options.container || document.body;
    this.size = {
      width: options.size?.width || window.innerWidth,
      height: options.size?.height || window.innerHeight,
    };
  }

  init() {
    // Init Canvas
    this.container.style.overflow = 'hidden';
    this.container.style.margin = 0;
    this.renderer = this.initRenderer();
    this.container.appendChild(this.renderer.domElement);

    // Main Scene
    this.scene = new Scene();

    // Mesh & Material
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    this.basicMaterial = new MeshBasicMaterial({color: accentColor, wireframe: true});
    this.d20Mesh = new Mesh(new IcosahedronGeometry(0.8), this.basicMaterial);
    this.meshes.push(this.d20Mesh);
    this.cubeMesh = new Mesh(new BoxGeometry(1,1), this.basicMaterial);
    this.meshes.push(this.cubeMesh);
    this.scene.add(this.d20Mesh); // default first mesh

    console.log(this.size);
    const {width, height} = this.size;
    const aspectRatio = width / height;
    this.camera = new PerspectiveCamera(75, aspectRatio, 0.1, 100);
    // this.camera.position.y = 5;
    this.camera.position.z = 3;
    this.camera.lookAt(this.d20Mesh.position)
    this.scene.add(this.camera);

    console.log(this.scene);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // Render Scene
    console.log(this.renderer);
    this.renderer.render(this.scene, this.camera);
  }

  animate = () => {
    this.controls.update();
    this.d20Mesh.rotation.x += 0.02;
    this.cubeMesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.animate);
  }

  initRenderer() {
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    const AA = pixelRatio <= 1;

    const renderer = new WebGLRenderer({antialias: AA});
    renderer.setPixelRatio(pixelRatio);
    const {width, height} = this.size;
    renderer.setSize(width, height);

    return renderer;
  }

  onResize({width, height}) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    // Reset pixel ratio in case they moved to a different screen
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  updateMaterialColor(color) {
    this.basicMaterial.color = new Color(color);
  }

  changeMesh(mesh) {
    this.meshes.forEach((mesh) => this.scene.remove(mesh));
    this.scene.add(this[mesh]);
  }
}

export default {
  data() {
    return {
      currentMesh: 'd20Mesh',
    };
  },
  mounted() {
    this.stage = new Stage({
      container: this.$el,
      size: this.getElSize(),
    });

    // Resize Stage Listener
    this.$events.on('viewport:resize', () => {
      this.stage.onResize(this.getElSize());
    });

    // Respond to Accent Color Changes
    this.$events.on('accentColorChange', (color) => {
      this.stage.updateMaterialColor(color);
    });

    // Change Mesh Currently Rendered
    this.$events.on('changeMesh', (mesh) => {
      this.stage.changeMesh(mesh);
    });

    // Start Animating
    this.stage.init();
    this.stage.animate();
  },
  methods: {
    getElSize() {
      return {
        width: this.$el.clientWidth,
        height: this.$el.clientHeight,
      };
    },
  }
}
</script>

<style lang="scss" scoped>
  .canvas-container {
    flex: 1;
    max-height: 500px;
    @include boxHighlight;
  }
</style>
