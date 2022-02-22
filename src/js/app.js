import "@/css/globals.css";
import "@/css/index.css";

import Sketch from "./Sketch";
import OuterSphere from "./components/OuterSphere";

const sketch = new Sketch({ enableControls: true, container: "#app" });

sketch.add(new OuterSphere(sketch));
sketch.startCore();
