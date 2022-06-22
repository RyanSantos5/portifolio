// import React from "react";
// import Sketch from "react-p5";
// import modelo from './../../assets/images/wolf.obj';

// 	let train = "";
// export default (props) => {
// 	const setup = (p5, canvasParentRef) => {
// 		// use parent to render the canvas in this ref
// 		// (without that p5 will render the canvas outside of your component)
//         var largura = window.innerWidth
//         || document.documentElement.clientWidth
//         || document.body.clientWidth;

//         var altura = window.innerHeight
//         || document.documentElement.clientHeight
//         || document.body.clientHeight;

// 		p5.createCanvas(largura - 17, altura, p5.WEBGL).parent(canvasParentRef);
// 		train = p5.loadModel(modelo, true);
// 	};

// 	const draw = (p5) => {
// 		p5.background(p5.color('#EAF0F1'));
// 		p5.angleMode(p5.DEGREES);

// 		p5.scale(2);

// 		p5.rotateX(180);
// 		p5.rotateY(180);

// 		p5.ambientLight(255);
// 		// p5.specularMaterial(100);
// 		p5.ambientMaterial(34,51,59);

// 		p5.model(train);

// 		p5.translate(p5.mouseX);
// 		// NOTE: Do not use setState in the draw function or in functions that are executed
// 		// in the draw function...
// 		// please use normal variables or class properties for these purposes
// 	};

// 	return <Sketch setup={setup} draw={draw} />;
// };