import cx from "clsx";

const ITERATIONS = process.env.ITERATIONS || 100000;

const classes = ["pieru", "keisari"];

const navigationOnTop = true;
const showHeaderTitle = false;

performance.mark("object-start");
for (let x = 1; x <= ITERATIONS; x = x + 1) {
  cx("carousel clearfix", classes, {
    "carousel--navi-on-top": navigationOnTop,
    "without-header": !showHeaderTitle,
  });
}
performance.mark("object-end");

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

const objectMeasure = performance.measure(
  "object",
  "object-start",
  "object-end"
);

console.log(objectMeasure);
