import * as THREE from "three";
import Component from "@/js/components/Component";

import fragmentShader from "./fragmentShader.glsl"
import vertexShader from "./vertexShader.glsl"

import genericNoise from "@/js/components/OuterSphere/genericNoise.glsl";

export default class InnerSphere extends Component {
    name = "inner-sphere";

    constructor({ uniforms, size }) {
        super();

        const vMax = Math.max(size.width, size.height);

        const geometry = new THREE.SphereBufferGeometry(400, 32, 32);
        const material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms,
            vertexShader,
            fragmentShader: `${genericNoise}\n${fragmentShader}`,
        });

        this.object = new THREE.Mesh(geometry, material);
        this.object.position.x = size.width / 2 - (vMax / 5);
        this.object.position.y = 200;
        // this.object.position.x = size.width - ;
    }
}
