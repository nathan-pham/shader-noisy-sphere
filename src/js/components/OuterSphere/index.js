import * as THREE from "three";
import Component from "@/js/components/Component";

import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";
import genericNoise from "./genericNoise.glsl";

export default class OuterSphere extends Component {
    name = "outer-sphere";

    constructor({ uniforms, size }) {
        super();

        const vMax = Math.max(size.width, size.height);

        const geometry = new THREE.SphereBufferGeometry(vMax, 64, 64);
        const material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            // wireframe: true,
            side: THREE.DoubleSide,
            uniforms,
            vertexShader,
            fragmentShader: `${genericNoise}\n${fragmentShader}`,
        });

        this.object = new THREE.Mesh(geometry, material);
    }
}
