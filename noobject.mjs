import cx from "clsx";

const ITERATIONS = process.env.ITERATIONS || 100000;

const classes = ["pieru", "keisari"];

const navigationOnTop = true;
const showHeaderTitle = false;

// no-object

performance.mark("noobject-start");
for (let x = 1; x <= ITERATIONS; x = x + 1) {
  cx(
    "carousel clearfix",
    classes,
    navigationOnTop && "carousel--navi-on-top",
    !showHeaderTitle && "without-header"
  );
}
performance.mark("noobject-end");

const noobjectMeasure = performance.measure(
  "noobject",
  "noobject-start",
  "noobject-end"
);

console.log(noobjectMeasure);
