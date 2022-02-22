varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec2 uResolution;

float lines(vec2 uv) {
    return abs(sin(uv.x * 10. + (uTime * 10.)));
    // return abs(sin(uv.x * 10.0 + uTime * 0.5) * 0.5 + 0.5);
}

void main() {
    // float n = noise((vPosition) / 100. + uTime);
    vec2 baseUv = vPosition.xy / 2. + 0.5;
    float basePattern = lines(baseUv);

    gl_FragColor = vec4(vec3(basePattern), 1.0);
}