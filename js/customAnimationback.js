function reAdjustCanvas(){
	//ajustemos el canvas al centro
	$(".wrapp").css("top", (($(window).height() - 500)/2));
}
window.onload = function(){
	reAdjustCanvas();
};
window.onresize = function() {
    reAdjustCanvas();
};

var stage;
function init2() {
	stage.addChild(grant);
	createjs.Ticker.setFPS(12);
	createjs.Ticker.addEventListener("tick", stage);
}

//iniciamos la función que nos ayudará a animar
function init2() {

	// create a new stage and point it at our canvas:
	stage = new createjs.Stage(document.getElementById("layer"));

	mediospropiosObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [5,9,8,7,6,10,4,3,2,1,0]
			},
			apagado:[5]
		},
		images: ["images/esp/pte4_mediospropios.png"],
		frames: {
			height: 204,
			width: 216
		}
	}),
	mediospropios = new createjs.BitmapAnimation(mediospropiosObject);
	mediospropios.x = 7826 - 7750;
	mediospropios.y = 185;
	mediospropios.gotoAndPlay("apagado");

	mediosganadosObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [5,9,8,7,6,10,4,3,2,1,0]
			},
			apagado:[5]
		},
		images: ["images/esp/pte4_mediosganados.png"],
		frames: {
			height: 204,
			width: 216
		}
	}),
	mediosganados = new createjs.BitmapAnimation(mediosganadosObject);
	mediosganados.x = 8061  - 7750;
	mediosganados.y = 185;
	mediosganados.gotoAndPlay("apagado");

	conversacionObject = new createjs.SpriteSheet({
		animations: {
			prendido: [0,12],
			apagado:[12]
		},
		images: ["images/pte4.png"],
		frames: {
			height: 92,
			width: 202	
		}
	}),
	conversacion = new createjs.BitmapAnimation(conversacionObject);
	conversacion.x = 8340  - 7750;
	conversacion.y = 205;
	conversacion.gotoAndPlay("apagado");

	tele2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames: [0,1,2,3,4,4,5,6,7,8,9]
			},
			apagado:[0]
		},
		images: ["images/pte4_tele.png"],
		frames: {
			height: 64,
			width: 54	
		}
	}),
	tele2 = new createjs.BitmapAnimation(tele2Object);
	tele2.x = 9555  - 7750;
	tele2.y = 195;
	tele2.gotoAndPlay("apagado");

	radio2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,4,5,6,7,8,9]
			},
			apagado:[0]
		},
		images: ["images/pte4_radio.png"],
		frames: {
			height: 64,
			width: 57	
		}
	}),
	radio2 = new createjs.BitmapAnimation(radio2Object);
	radio2.x = 9767  - 7750;
	radio2.y = 195;
	radio2.gotoAndPlay("apagado");

	celular3Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,4,5,6,7,8,9]
			},
			apagado:[0]
		},
		images: ["images/celular3.png"],
		frames: {
			height: 68,
			width: 45	
		}
	}),
	celular3 = new createjs.BitmapAnimation(celular3Object);
	celular3.x = 9981  - 7750;
	celular3.y = 195;
	celular3.gotoAndPlay("apagado");

	lapTop2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,4,5,6,7,8,9]
			},
			apagado:[0]
		},
		images: ["images/pte4_lap_s01.png"],
		frames: {
			height: 48,
			width: 65	
		}
	}),
	lapTop2 = new createjs.BitmapAnimation(lapTop2Object);
	lapTop2.x = 10180  - 7750;
	lapTop2.y = 212;
	lapTop2.gotoAndPlay("apagado");

	corazones5Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,9,10]
			},
			apagado:[11]
		},
		images: ["images/corazones5.png"],
		frames: {
			height: 159,
			width: 117	
		}
	}),
	corazones5 = new createjs.BitmapAnimation(corazones5Object);
	corazones5.x = 10510  - 7750;
	corazones5.y = 12;
	corazones5.gotoAndPlay("apagado");

	trofeoObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,9,10,11,12]
			},
			apagado:[6]
		},
		images: ["images/trofeos.png"],
		frames: {
			height: 152,
			width: 	222
		}
	}),
	trofeo = new createjs.BitmapAnimation(trofeoObject);
	trofeo.x = 11549  - 7750;
	trofeo.y = 245;
	trofeo.gotoAndPlay("apagado");



	signoPesosObject = new createjs.SpriteSheet({
		animations: {
			prendido: [0,5],
			apagado:[5]
		},
		images: ["images/pesos.png"],
		frames: {
			height: 511,
			width: 292	
		}
	}),
	signoPesos = new createjs.BitmapAnimation(signoPesosObject);
	signoPesos.x = 13444  - 7750;
	signoPesos.y = -120;
	signoPesos.gotoAndPlay("apagado");

	resorteObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,0]
			},
			apagado:[0]
		},
		images: ["images/pte4_resorte.png"],
		frames: {
			height: 150,
			width: 231	
		}
	}),
	resorte = new createjs.BitmapAnimation(resorteObject);
	resorte.x = 13137  - 7750;
	resorte.y = 164;
	resorte.gotoAndPlay("apagado");

	Robot2Object = new createjs.SpriteSheet({
		animations: {
			prendido: [0,3],
			apagado:[0]
		},
		images: ["images/pte4_robot02.png"],
		frames: {
			height: 73,
			width: 74	
		}
	}),
	Robot2 = new createjs.BitmapAnimation(Robot2Object);
	Robot2.x = 12929  - 7750;
	Robot2.y = 207;
	Robot2.gotoAndPlay("apagado");

	robot1Object = new createjs.SpriteSheet({
		animations: {
			prendido: [0,13],
			apagado:[0]
		},
		images: ["images/pte4_robot01.png"],
		frames: {
			height: 35,
			width: 83	
		}
	}),
	robot1 = new createjs.BitmapAnimation(robot1Object);
	robot1.x = 12900  - 7750;
	robot1.y = 80;
	robot1.gotoAndPlay("apagado");

	corazon2Object = new createjs.SpriteSheet({
		animations: {
			prendido: [0,13],
			apagado:[0]
		},
		images: ["images/pte4corazon.png"],
		frames: {
			height: 100,
			width: 101	
		}
	}),
	corazon2 = new createjs.BitmapAnimation(corazon2Object);
	corazon2.x = 8724  - 7750;
	corazon2.y = 318;
	corazon2.gotoAndPlay("apagado");

	cerebro3Object = new createjs.SpriteSheet({
		animations: {
			prendido: [0,8],
			apagado:[0]
		},
		images: ["images/pte4_cerebro.png"],
		frames: {
			height: 26,
			width: 28
		}
	}),
	cerebro3 = new createjs.BitmapAnimation(cerebro3Object);
	cerebro3.x = 11296  - 7750;
	cerebro3.y = 208;
	cerebro3.gotoAndPlay("apagado");

	cerebro3copia1 = new createjs.BitmapAnimation(cerebro3Object);
	cerebro3copia1.x = 11403  - 7750;
	cerebro3copia1.y = 208;
	cerebro3copia1.gotoAndPlay("apagado");

	cerebro3copia2 = new createjs.BitmapAnimation(cerebro3Object);
	cerebro3copia2.x = 11350  - 7750;
	cerebro3copia2.y = 208;
	cerebro3copia2.gotoAndPlay("apagado");

	cinta2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,0]
			},
			apagado:[0]
		},
		images: ["images/pte4_cinta.png"],
		frames: {
			height: 128,
			width: 225	
		}
	}),
	cinta2 = new createjs.BitmapAnimation(cinta2Object);
	cinta2.x = 12517  - 7750;
	cinta2.y = 196;
	cinta2.gotoAndPlay("apagado");

	oidosObject = new createjs.SpriteSheet({
        animations: {
            prendido: [0,25],
            apagado:[25]
        },
        images: ["images/esp/oidos.png"],
        frames: {
            height: 190,
            width: 362
        }
    }),
    oidos = new createjs.BitmapAnimation(oidosObject);
    oidos.x = 12070  - 7750;
    oidos.y = 165;
    oidos.gotoAndPlay("apagado");



	

	// Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
	stage.addChild(mediospropios);
	stage.addChild(trofeo);
	stage.addChild(corazones5);
    stage.addChild(celular3);
    stage.addChild(lapTop2);
	stage.addChild(oidos);
	stage.addChild(cinta2);
	stage.addChild(cerebro3copia1);
	stage.addChild(cerebro3copia2);
	stage.addChild(cerebro3);
	stage.addChild(radio2);
	stage.addChild(tele2);
	stage.addChild(corazon2);
	stage.addChild(robot1);
	stage.addChild(Robot2);
	stage.addChild(resorte);
	stage.addChild(signoPesos);
	stage.addChild(conversacion);
	stage.addChild(mediosganados);
	createjs.Ticker.setFPS(12);
	createjs.Ticker.addEventListener("tick", stage);
}
//iniciamos la función que nos ayudará a animar
function init() {

	var canvas = document.getElementById("mainCanvas"),
	stage = new createjs.Stage(canvas);

	var start = new createjs.Bitmap("images/estrella.svg");
	start.x = 85;
	start.y = 260;
	start.regX = 9;
	start.regY = 9;

	var fondoFinal = new createjs.Bitmap("images/fondoFinal.svg");
	fondoFinal.x = 0;
	fondoFinal.y = 3780;
	
	var start2 = new createjs.Bitmap("images/estrella.svg");
	start2.x = 260;
	start2.y = 260;
	start2.regX = 9;
	start2.regY = 9;

	var hand = new createjs.Bitmap("images/hand.svg");
	hand.x = 340;
	hand.y = 360;

	var television = new createjs.Bitmap("images/tele.svg");
	television.x = 400;
	television.y = 120;

	sobreObjeto = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17]
			},
			apagado:[9]
		},
		images: ["images/esp/pte1_mail.png"],
		frames: {
			height: 205,
			width: 193
		}
	}),
	sobreFrame = new createjs.BitmapAnimation(sobreObjeto);
	sobreFrame.x = 654;
	sobreFrame.y = 158;
	sobreFrame.gotoAndPlay("apagado");

	ss = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames: [12,0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,19,19,20,21,22,23]
			},
			apagado:[21]
		},
		images: ["images/esp/pte1_tv.png"],
		frames: {
			regX: 50,
			regY: 50,
			height: 140,
			width: 153
		}
	}),
	teleFrame = new createjs.BitmapAnimation(ss);
	teleFrame.x = 494;
	teleFrame.y = 238;
	teleFrame.gotoAndPlay("apagado");

	lapObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames: [0,1,2,3,4,5,7,8,9,10,11]
			},
			apagado:[6]
		},
		images: ["images/esp/pte1_lap.png"],
		frames: {
			
			height: 250,
			width: 133
		}
	}),
	lapFrame = new createjs.BitmapAnimation(lapObject);
	lapFrame.x = 1048;
	lapFrame.y = 96;
	lapFrame.gotoAndPlay("apagado");


	arreglo1Object = new createjs.SpriteSheet({
		animations: {
			prendido:{
				frames:[0,1,2,3,4,5,6,7,8,9,10,22,12,13,14,15,16,17,18,19,20,21]
			},
			apagado:[0]
		},
		images: ["images/esp/pte1_arreglo01.png"],
		frames: {
			
			height: 327,
			width: 371
		}
	}),
	arreglo1 = new createjs.BitmapAnimation(arreglo1Object);
	arreglo1.x = 1450;
	arreglo1.y = 80;
	arreglo1.gotoAndPlay("apagado");

	arreglo2Object = new createjs.SpriteSheet({
		animations: {
			prendido:{
				frames:[0,1,2,3,4,5,6,7,8,9,10]
			},
			apagado:[11]
		},
		images: ["images/esp/pte2_arreglo01.png"],
		frames: {
			height: 294,
			width: 257
		}
	}),
	arreglo2 = new createjs.BitmapAnimation(arreglo2Object);
	arreglo2.x = 1840;
	arreglo2.y = 100;
	arreglo2.gotoAndPlay("apagado");

	signosObject = new createjs.SpriteSheet({
		animations: {
			prendido: [0,15],
			apagado:[1]
		},
		images: ["images/signos.png"],
		frames: {
			height: 110,
			width: 200
		}
	}),
	signos = new createjs.BitmapAnimation(signosObject);
	signos.x = 2420;
	signos.y = 80;
	signos.gotoAndPlay("apagado");

	dialogosObject = new createjs.SpriteSheet({
		animations: {
			prendido: [0,29],
			apagado:[30]
		},
		images: ["images/esp/pte2_xs.png"],
		frames: {
			height: 115,
			width: 407
		}
	}),
	dialogos = new createjs.BitmapAnimation(dialogosObject);
	dialogos.x = 2990;
	dialogos.y = 100;
	dialogos.gotoAndPlay("apagado");


	focoObject = new createjs.SpriteSheet({
		animations: {
			prendido: [0,12],
			apagado:[0]
		},
		images: ["images/foco.png"],
		frames: {
			height: 40,
			width: 100
		}
	}),
	foco = new createjs.BitmapAnimation(focoObject);
	foco.x = 3835;
	foco.y = 143;
	foco.gotoAndPlay("prendido");

	ventanaObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames:[0,1,2,3,4,5,6,15,8,9,10,11,12,13,14]
			},
			apagado:[7]
		},
		images: ["images/esp/pte3_ventanilla01.png"],
		frames: {
			
			height: 64,
			width: 53
		}
	}),
	ventana1 = new createjs.BitmapAnimation(ventanaObject);
	ventana1.x = 3859;
	ventana1.y = 229;
	ventana1.gotoAndPlay("apagado");

	ventana2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,7]
				},

			apagado:[7]
		},
		images: ["images/esp/pte3_ventanilla02.png"],
		frames: {
			height: 70,
			width: 64
		}
	}),
	ventana2 = new createjs.BitmapAnimation(ventana2Object);
	ventana2.x = 4068;
	ventana2.y = 217;
	ventana2.gotoAndPlay("apagado");

	radiografia2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15]
				},

			apagado:[8]
		},
		images: ["images/pte3_radiografia.png"],
		frames: {
			height: 100,
			width: 88
		}
	}),
	radiografia = new createjs.BitmapAnimation(radiografia2Object);
	radiografia.x = 4292;
	radiografia.y = 200;
	radiografia.gotoAndPlay("apagado");

	var engrane = new createjs.Bitmap("images/egra1.svg");
	engrane.x = 4436;
	engrane.y = 152;
	engrane.regX = 20;
	engrane.regY =20;
	

	var engrane2 = new createjs.Bitmap("images/egra2.svg");
	engrane2.x = 4414;
	engrane2.y = 170;
	engrane2.regX = 20;
	engrane2.regY = 20;


	var engrane3 = engrane.clone();
	engrane3.x = 4610;
	engrane3.y = 260;
	var engrane4 = engrane2.clone();
	engrane4.x = engrane3.x - 20;
	engrane4.y = engrane3.y - 20;


	var engrane5 = engrane2.clone();
	engrane5.x = 4814;
	engrane5.y = 100;

	var engrane6 = new createjs.Bitmap("images/egra3.svg");
	engrane6.x = 4790;
	engrane6.y = 127;
	engrane6.regX = 20;
	engrane6.regY = 20;

	var engrane7 = engrane.clone();
	engrane7.x = 4822;
	engrane7.y = 160;

	cerebros2Object = new createjs.SpriteSheet({
		animations: {
			prendido: [0, 152]
		},
		images: ["images/cerebros.png"],
		frames: {
			regX: 50,
			regY: 50,
			height: 98,
			width: 100
		}
	}),
	cerebros = new createjs.BitmapAnimation(cerebros2Object);
	cerebros.x = 4734;
	cerebros.y = 271;
	cerebros.gotoAndPlay("apagado");

	var banda = new createjs.Bitmap("images/banda.svg");
	banda.x = 4490;
	banda.y = 279;
	banda.regX = 20;
	banda.regY = 20;

	pantalla2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,5,3,4,2]
				},
			apagado:[2]
		},
		images: ["images/esp/pte3_pantalla.png"],
		frames: {
			height: 128,
			width: 140
		}
	}),
	pantalla2 = new createjs.BitmapAnimation(pantalla2Object);
	pantalla2.x = 5142;
	pantalla2.y = 91	;
	pantalla2.gotoAndPlay("apagado");

	telefonoPantallaObjeto = new createjs.SpriteSheet({
		animations: {
			prendido: {
				frames:[10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]
			},
			apagado:[10]
		},
		images: ["images/telefono.png"],
		frames: {
			height: 150,
			width: 83
		}
	}),
	telefonoPantalla = new createjs.BitmapAnimation(telefonoPantallaObjeto);
	telefonoPantalla.x = 1246;
	telefonoPantalla.y = 174;
	telefonoPantalla.gotoAndPlay("apagado");

	medidorObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,2,3,8,5,6,7,4]
				},

			apagado:[4]
		},
		images: ["images/pte3_medidor.png"],
		frames: {
			height: 14,
			width: 18
		}
	}),
	medidor = new createjs.BitmapAnimation(medidorObject);
	medidor.x = 5494;
	medidor.y = 233;
	medidor.gotoAndPlay("apagado");

	medidor2Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[7,3,6,5,4,2,1,0]
				},

			apagado:[0]
		},
		images: ["images/pte3_palanca.png"],
		frames: {
			height: 50,
			width: 26
		}
	}),
	medidor2 = new createjs.BitmapAnimation(medidor2Object);
	medidor2.x = 5467;
	medidor2.y = 308;
	medidor2.gotoAndPlay("apagado");

	rayoObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[7,6,5,4,3,2,1,0]
				},
			apagado:[7]
		},
		images: ["images/pte3_rayo.png"],
		frames: {
			height: 60,
			width: 69
		}
	}),
	rayo = new createjs.BitmapAnimation(rayoObject);
	rayo.x = 5657;
	rayo.y = 220;
	rayo.gotoAndPlay("apagado");

	palancaObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
				},
			apagado:[0]
		},
		images: ["images/pte3_palanca02.png"],
		frames: {
			height: 60,
			width: 52
		}
	}),
	palanca = new createjs.BitmapAnimation(palancaObject);
	palanca.x = 5850;
	palanca.y = 280;
	palanca.gotoAndPlay("apagado");

	medidor3Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,14]
				},
			apagado:[14]
		},
		images: ["images/pte3_medidor02.png"],
		frames: {
			height: 21,
			width: 75
		}
	}),
	medidor3 = new createjs.BitmapAnimation(medidor3Object);
	medidor3.x = 5978;
	medidor3.y = 294;
	medidor3.gotoAndPlay("apagado");

	pantalla3Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames:[6,0,1,2,3,4,5,12,7,8,9,10,11]
				},
			apagado:[6]
		},
		images: ["images/esp/pte3_pantalla02.png"],
		frames: {
			height: 126,
			width: 105
		}
	}),
	pantalla3 = new createjs.BitmapAnimation(pantalla3Object);
	pantalla3.x = 6401;
	pantalla3.y = 217;
	pantalla3.gotoAndPlay("apagado");

	radioObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [23, 22, 20, 19, 16, 13, 11, 10, 8, 9, 4, 1, 0, 2, 3, 5, 7, 6, 12, 14, 15, 17, 18, 21, 23]
			},
			apagado:[23]
		},
		images: ["images/pte3_radio.png"],
		frames: {
			height: 60,
			width: 58
		}
	}),
	radio = new createjs.BitmapAnimation(radioObject);
	radio.x = 6388;
	radio.y = 2985;
	radio.gotoAndPlay("apagado");

	posterObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [7,0,1,2,3,4,5,6,8,9,10,11,12,13,14]
			},
			apagado:[15]
		},
		images: ["images/esp/pte3_poster.png"],
		frames: {
			height: 80,
			width: 65
		}
	}),
	poster = new createjs.BitmapAnimation(posterObject);
	poster.x = 6454;
	poster.y = 300;
	poster.gotoAndPlay("apagado");

	pantalla4Object = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [10,0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]
			},
			apagado:[21]
		},
		images: ["images/esp/pte3_pantalla03.png"],
		frames: {
			height: 60,
			width: 77
		}
	}),
	pantalla4 = new createjs.BitmapAnimation(pantalla4Object);
	pantalla4.x = 6524;
	pantalla4.y = 232;
	pantalla4.gotoAndPlay("apagado");

	cpuObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
			},
			apagado:[0]
		},
		images: ["images/pte3_cpu.png"],
		frames: {
			height: 56,
			width: 36
		}
	}),
	cpu = new createjs.BitmapAnimation(cpuObject);
	cpu.x = 6570;
	cpu.y = 330;
	cpu.gotoAndPlay("apagado");

	siluetaObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [10,0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]
			},
			apagado:[10]
		},
		images: ["images/pte3_silueta.png"],
		frames: {
			height: 100,
			width: 88
		}
	}),
	silueta = new createjs.BitmapAnimation(siluetaObject);
	silueta.x = 6630;
	silueta.y = 212;
	silueta.gotoAndPlay("apagado");

	graficaObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [8,16,15,14,13,12,11,10,9,7,6,5,4,3,2,1,0]
			},
			apagado:[8]
		},
		images: ["images/pte3_grafica.png"],
		frames: {
			height: 156,
			width: 150
		}
	}),
	grafica = new createjs.BitmapAnimation(graficaObject);
	grafica.x = 6935;
	grafica.y = 179;
	grafica.gotoAndPlay("apagado");

	focosObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [0,1,2,3,4,5,6,7,8,9,10,11,12]
			},
			apagado:[12]
		},
		images: ["images/28_pte3_focos.png"],
		frames: {
			height: 64,
			width: 124
		}
	}),
	focos = new createjs.BitmapAnimation(focosObject);
	focos.x = 6947;
	focos.y = 104;
	focos.gotoAndPlay("apagado");

	signosroiObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [6, 12, 11, 10, 9, 8, 7, 13, 5, 4, 3, 2, 1, 0]
			},
			apagado:[0]
		},
		images: ["images/29_pte4_signosroi.png"],
		frames: {
			height: 90,
			width: 87
		}
	}),
	signosroi = new createjs.BitmapAnimation(signosroiObject);
	signosroi.x = 7304;
	signosroi.y = 214;
	signosroi.gotoAndPlay("apagado");

	liquidoObject = new createjs.SpriteSheet({
		animations: {
			prendido: {
					frames: [13,12,11,10,9,8,7,6,5,4,3,2,1,0]
			},
			apagado:[0]
		},
		images: ["images/pte4_liquido.png"],
		frames: {
			height: 160,
			width: 18
		}
	}),
	liquido = new createjs.BitmapAnimation(liquidoObject);
	liquido.x = 7473;
	liquido.y = 275;
	liquido.gotoAndPlay("apagado");

	stage.addChild(liquido);
	stage.addChild(signosroi);
	stage.addChild(focos);
	stage.addChild(grafica);
	stage.addChild(silueta);
	stage.addChild(cpu);
	stage.addChild(pantalla4);
	stage.addChild(poster);
	stage.addChild(radio);
	stage.addChild(pantalla3);
	stage.addChild(medidor3);
	stage.addChild(palanca);
	stage.addChild(rayo);
	stage.addChild(medidor2);
	stage.addChild(medidor);
	stage.addChild(pantalla2);
	stage.addChild(banda);
	stage.addChild(cerebros);
	stage.addChild(engrane7);
	stage.addChild(engrane6);
	stage.addChild(engrane5);
	stage.addChild(engrane4);
	stage.addChild(engrane3);
	stage.addChild(engrane);
	stage.addChild(engrane2);
	stage.addChild(radiografia);
	stage.addChild(ventana2);
	stage.addChild(ventana1);
	stage.addChild(foco);
	stage.addChild(dialogos);
	stage.addChild(signos);
	stage.addChild(arreglo1);
	stage.addChild(arreglo2);
	stage.addChild(lapFrame);
	stage.addChild(television);
	stage.addChild(start);
	stage.addChild(start2);
	stage.addChild(hand);
	stage.addChild(teleFrame);
	stage.addChild(sobreFrame);
	stage.addChild(telefonoPantalla);
	stage.addChild(fondoFinal);

	var i = 0;

	createjs.Ticker.setFPS(12);
	createjs.Ticker.addListener(function() {

		i ++;

		if (i == 12){
			banda.x = banda.x + 48;
			i = 0;
		}
		banda.x = banda.x - 4;

		engrane5.rotation = engrane7.rotation = engrane.rotation = engrane3.rotation -= 8;

		engrane6.rotation =  engrane4.rotation = engrane2.rotation  = start.rotation = start2.rotation += 16;
		hand.x = 160 + (Math.sin(createjs.Ticker.getTicks()/8)*50);
		
		
		if (o*8 >= (centerX + 680) && o*8 <= (centerX + 880)) {
			launchTele();
		} else {
			stopTele();
		}
		if (o*8 >= (centerX + 910) && o*8 <= (centerX + 1140)) {
			launchCarta();
		} else {
			stopCarta();
		}
		if (o*8 >= (centerX + 1140) && o*8 <= (centerX + 1480)) {
			launchLap();
		} else {
			stopLap();
		}
		if (o*8 >= (centerX + 1680) && o*8 <= (centerX + 2080)) {
			launchArreglo1();
		} else {
			stopArreglo1();
		}
		//POSICION DE LA X EN ALTURA
		if (o*8 > (centerX + 2520)) {
			$("#marca").css("marginTop", -18);
		} else if (o*8 > (centerX + 1420)) {
			$("#marca").css("marginTop", -58);
		} else{
			$("#marca").css("marginTop", 0);
		}
		if (o*8 >= (centerX + 2180) && o*8 <= (centerX + 2280)) {
			launchArreglo2();
		} else {
			stopArreglo2();
		}
		if (o*8 >= (centerX + 2680) && o*8 <= (centerX + 2980)) {
			launchSignos();
		} else {
			stopSignos();
		}
		if (o*8 >= (centerX + 3180) && o*8 <= (centerX + 3780)) {
			launchDialogos();
		} else {
			stopDialogos();
		}
		if (o*8 >= (centerX + 4080) && o*8 <= (centerX + 4230)) {
			launchVentana1();
		} else {
			stopVentana1();
		}
		if (o*8 >= (centerX + 4230) && o*8 <= (centerX + 4530)) {
			launchVentana2();
		} else {
			stopVentana2();
		}
		if (o*8 >= (centerX + 4530) && o*8 <= (centerX + 4830)) {
			launchRadiografia();
		} else {
			stopRadiografia();
		}
		if (o*8 >= (centerX + 8320) && o*8 <= (centerX + 8520)) {
			launchmediosganados();
		} else {
			stopmediosganados();
		}
		if (o*8 >= (centerX + 8000) && o*8 <= (centerX + 8300)) {
			launchmediospropios();
		} else {
			stopmediospropios();
		}
		if (o*8 >= (centerX + 6000) && o*8 <= (centerX + 9500)) {
			launchliquido();
		} else {
			stopliquido();
		}
		if (o*8 >= (centerX + 7400) && o*8 <= (centerX + 7600)) {
			launchsignosroi();
		} else {
			stopsignosroi();
		}
		if (o*8 >= (centerX + 7150) && o*8 <= (centerX + 7400)) {
			launchfocos();
		} else {
			stopfocos();
		}
		//Visivilidad y tamaño
		if (o*8 < (centerX + 7760) && o*8 > (centerX + 7200)) {
			$("#marca").css("opacity", 0);
		} else {
			$("#marca").css("opacity", 1);
		}
		if (o*8 >= (centerX + 7150) && o*8 <= (centerX + 7400)) {
			launchgrafica();
		} else {
			stopgrafica();
		}
		if (o*8 >= (centerX + 6750) && o*8 <= (centerX + 7150)) {
			launchsilueta();
		} else {
			stopsilueta();
		}
		if (o*8 >= (centerX + 6550) && o*8 <= (centerX + 6950)) {
			launchcpu();
		} else {
			stopcpu();
		}
		if (o*8 >= (centerX + 6550) && o*8 <= (centerX + 6950)) {
			launchpantalla4();
		} else {
			stoppantalla4();
		}
		if (o*8 >= (centerX + 6550) && o*8 <= (centerX + 6950)) {
			launchposter();
		} else {
			stopposter();
		}
		if (o*8 >= (centerX + 6550) && o*8 <= (centerX + 6950)) {
			launchradio();
		} else {
			stopradio();
		}
		if (o*8 >= (centerX + 6550) && o*8 <= (centerX + 6950)) {
			launchpantalla3();
		} else {
			stoppantalla3();
		}
		if (o*8 >= (centerX + 6150) && o*8 <= (centerX + 6350)) {
			launchmedidor3();
		} else {
			stopmedidor3();
		}
		if (o*8 >= (centerX + 6130) && o*8 <= (centerX + 6330)) {
			launchpalanca();
		} else {
			stoppalanca();
		}
		if (o*8 >= (centerX + 5830) && o*8 <= (centerX + 6030)) {
			launchrayo();
		} else {
			stoprayo();
		}
		if (o*8 >= (centerX + 5630) && o*8 <= (centerX + 5830)) {
			launchmedidor2();
		} else {
			stopmedidor2();
		}
		if (o*8 >= (centerX + 5630) && o*8 <= (centerX + 5830)) {
			launchmedidor();
		} else {
			stopmedidor();
		}
		if (o*8 >= (centerX + 5380) && o*8 <= (centerX + 5580)) {
			launchpantalla2();
		} else {
			stoppantalla2();
		}
		if (o*8 >= (centerX + 8560) && o*8 <= (centerX + 8830)) {
			launchconversacion();
		} else {
			stopconversacion();
		}
		if (o*8 >= (centerX + 8880) && o*8 <= (centerX + 9200)) {
			launchcorazon2();
		} else {
			stopcorazon2();
		}
		if (o*8 >= (centerX + 9760) && o*8 <= (centerX + 9960)) {
			launchtele2();
		} else {
			stoptele2();
		}
		if (o*8 >= (centerX + 9960) && o*8 <= (centerX + 10180)) {
			launchradio2();
		} else {
			stopradio2();
		}
		if (o*8 >= (centerX + 9960) && o*8 <= (centerX + 10180)) {
			launchradio2();
		} else {
			stopradio2();
		}

		if (o*8 >= (centerX + 10180) && o*8 <= (centerX + 10390)) {
			launchcelular3();
		} else {
			stopcelular3();
		}

		if (o*8 >= (centerX + 10390) && o*8 <= (centerX + 10600)) {
			launchlapTop2();
		} else {
			stoplapTop2();
		}

		if (o*8 >= (centerX + 10700) && o*8 <= (centerX + 11200)) {
			launchcorazones5();
		} else {
			stopcorazones5();
		}

		if (o*8 >= (centerX + 11420) && o*8 <= (centerX + 11820)) {
			launchcerebro3();
		} else {
			stopcerebro3();
		}
		if (o*8 >= (centerX + 11420) && o*8 <= (centerX + 11820)) {
			launchcerebro3copia1();
		} else {
			stopcerebro3copia1();
		}
		if (o*8 >= (centerX + 11420) && o*8 <= (centerX + 11820)) {
			launchcerebro3copia2();
		} else {
			stopcerebro3copia2();
		}
		if (o*8 >= (centerX + 11820) && o*8 <= (centerX + 12150)) {
			launchtrofeo();
		} else {
			stoptrofeo();
		}

		if (o*8 >= (centerX + 12369) && o*8 <= (centerX + 12660)) {
			launchoidos();
		} else {
			stopoidos();
		}

		if (o*8 >= (centerX + 12700) && o*8 <= (centerX + 13030)) {
			launchcinta2();
		} else {
			stopcinta2();
		}
		if (o*8 >= (centerX + 13040) && o*8 <= (centerX + 13340)) {
			launchrobot1();
		} else {
			stoprobot1();
		}
		if (o*8 >= (centerX + 13040) && o*8 <= (centerX + 13340)) {
			launchRobot2();
		} else {
			stopRobot2();
		}
		if (o*8 >= (centerX + 13340) && o*8 <= (centerX + 13720)) {
			launchresorte();
		} else {
			stopresorte();
		}
		if (o*8 >= (centerX + 13720) && o*8 <= (centerX + 14140)) {
			launchsignoPesos();
		} else {
			stopsignoPesos();
		}
		if (o*8 >= (centerX + 1480) && o*8 <= (centerX + 1780)) {
			launchtelefonoPantalla();
		} else {
			stoptelefonoPantalla();
		}
		stage.update();
	});
}


//ANIMACION DE ENTRADA
$(document).ready(function() {
	reAdjustCanvas();
	$(".wrapp").css("marginLeft", anchuraPantalla);
	o = centerX/6;
	$("#pantalla").delay(800).fadeOut(1500, function(){
		$(".wrapp").transition({
			x: -(o*8),
			duration: 1600,
			complete: function() {
				startScrollAnimation();
				activarTeclas();
				activarTouch();
			}
		});
	});
});
