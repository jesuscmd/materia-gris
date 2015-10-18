var o = 0;
var alturaPantalla = $(window).height();
var anchuraPantalla = $(window).width();

//VARIABLES PARA LANZAR ANIMACIONES
var telefonoPantallaBoolean = false;
var teleBoolean = false;
var cartaBoolean = false;
var compuBoolean = false;
var celularBoolean = false;
var arreglo1Boolean = false;
var arreglo2Boolean = false;
var signosBoolen = false;
var dialogosBoolean = false;
var ventana1Boolean = false;
var ventana2Boolean = false;
var radiografiaBoolean = false;
var teleBoolean = false;
var teleBoolean = false;
var teleBoolean = false;
var mediosganadosBoolean = false;
var mediospropiosBoolean = false;
var liquidoBoolean = false;
var signosroiBoolean = false;
var focosBoolean = false;
var graficaBoolean = false;
var siluetaBoolean = false;
var cpuBoolean = false;
var pantalla4Boolean = false;
var posterBoolean = false;
var radioBoolean = false;
var pantalla3Boolean = false;
var medidor3Boolean = false;
var palancaBoolean = false;
var rayoBoolean = false;
var medidor2Boolean = false;
var medidorBoolean = false;
var pantalla2Boolean = false;
var pantalla2Boolean = false;
var oidosBoolean = false;
var cinta2Boolean = false;
var cerebro3Boolean = false;
var cerebro3copia1Boolean = false;
var cerebro3copia2Boolean = false;
var radio2Boolean = false;
var tele2Boolean = false;
var corazon2Boolean = false;
var robot1Boolean = false;
var Robot2Boolean = false;
var resorteBoolean = false;
var signoPesosBoolean = false;
var conversacionBoolean = false;
var trofeoBoolean = false;
var corazones5Boolean = false;
var celular3Boolean = false;
var lapTop2Boolean = false;
var activesScrollListener = true;
//centramos la marca
var centerX = anchuraPantalla/2;
var activeDradStage = false;
var touchDrag = false;

document.ontouchmove = function(event){
	event.preventDefault();
}
//===Función que hace que el sitio escuche el scroll==========//
function startScrollAnimation(){

	$("body").mousewheel(function(event, delta, deltaX, deltaY) {
		
		if (deltaX > 0 && o < 1880){
			o = o + deltaX;
		} else if (deltaX < 0 && o > centerX/6){
			o = o +deltaX;
		} if (deltaY > 0 && o < 1880){
			o = o +deltaY;
		} else if (deltaY < 0 && o > centerX/6){
			o = o +deltaY;
		}

		if (activesScrollListener == true){
			$(".wrapp").css({ x: -(o*8) });
		}
		return false; // prevent default
	});
};
function activarTouch(){
	$('body').on( 'swipeleft', swipeleftHandler );
	$('body').on( 'swiperight', swiperightHandler );
	
	function swipeleftHandler(event){
		if (touchDrag == false && o < 1850){
				touchDrag = true;
				o = o + 25;
				$(".wrapp").transition({
					x: -(o*8),
					duration: 500,
					complete: function() {
						touchDrag = false;
					}
				});
		}

	}
	function swiperightHandler(event){
		if (touchDrag == false && o > centerX/6){
				touchDrag = true;
				o = o - 25;
				$(".wrapp").transition({
					x: -(o*8),
					duration: 500,
					complete: function() {
						touchDrag = false;
					}
				});
		}

	}
}

function activarTeclas() {
	$(document).keydown(function(e){

		if (activeDradStage == false){

		    if ((e.keyCode == 39 ||e.keyCode == 38) && o < 1850) { 
		    	activeDradStage = true;
				o = o + 30;
		    }
		    if ((e.keyCode == 37 ||e.keyCode == 40) && o > centerX/6) {
		    	activeDradStage = true;
		       	o = o - 30;
		    }
		
		    if (activeDradStage == true) {
		    	$(".wrapp").transition({
					x: -(o*8),
					duration: 500,
					complete: function() {
						activeDradStage = false;
					}
				});
			};
		}
	    return false;
	});

};



function launchTele(){
	if ( teleBoolean == false ){
		teleFrame.gotoAndPlay("prendido");
		teleBoolean = true;
	}
}
function stopTele(){
	if (teleBoolean == true){
		teleFrame.gotoAndPlay("apagado");
		teleBoolean = false;
	}
}

function launchCarta(){
	if ( cartaBoolean == false ){
		sobreFrame.gotoAndPlay("prendido");
		cartaBoolean = true;
	}
}
function stopCarta(){
	if (cartaBoolean == true){
		sobreFrame.gotoAndPlay("apagado");
		cartaBoolean = false;
	}
}

function launchLap(){
	if ( compuBoolean == false ){
		lapFrame.gotoAndPlay("prendido");
		compuBoolean = true;
	}
}
function stopLap(){
	if (compuBoolean == true){
		lapFrame.gotoAndPlay("apagado");
		compuBoolean = false;
	}
}

function launchArreglo1(){
	if ( arreglo1Boolean == false ){
		arreglo1.gotoAndPlay("prendido");
		arreglo1Boolean = true;
	}
}
function stopArreglo1(){
	if (arreglo1Boolean == true){
		arreglo1.gotoAndPlay("apagado");
		arreglo1Boolean = false;
	}
}

function launchArreglo2(){
	if ( arreglo2Boolean == false ){
		arreglo2.gotoAndPlay("prendido");
		arreglo2Boolean = true;
	}
}
function stopArreglo2(){
	if (arreglo2Boolean == true){
		arreglo2.gotoAndPlay("apagado");
		arreglo2Boolean = false;
	}
}

function launchSignos(){
	if ( signosBoolen == false ){
		signos.gotoAndPlay("prendido");
		signosBoolen = true;
	}
}
function stopSignos(){
	if (signosBoolen == true){
		signos.gotoAndPlay("apagado");
		signosBoolen = false;
	}
}

function launchDialogos(){
	if ( dialogosBoolean == false ){
		dialogos.gotoAndPlay("prendido");
		dialogosBoolean = true;
	}
}
function stopDialogos(){
	if (dialogosBoolean == true){
		dialogos.gotoAndPlay("apagado");
		dialogosBoolean = false;
	}
}

function launchVentana1(){
	if ( ventana1Boolean == false ){
		ventana1.gotoAndPlay("prendido");
		ventana1Boolean = true;
	}
}
function stopVentana1(){
	if (ventana1Boolean == true){
		ventana1.gotoAndPlay("apagado");
		ventana1Boolean = false;
	}
}

function launchVentana2(){
	if ( ventana2Boolean == false ){
		ventana2.gotoAndPlay("prendido");
		ventana2Boolean = true;
	}
}
function stopVentana2(){
	if (ventana2Boolean == true){
		ventana2.gotoAndPlay("apagado");
		ventana2Boolean = false;
	}
}
function launchRadiografia(){
	if ( radiografiaBoolean == false ){
		radiografia.gotoAndPlay("prendido");
		radiografiaBoolean = true;
	}
}
function stopRadiografia(){
	if (radiografiaBoolean == true){
		radiografia.gotoAndPlay("apagado");
		radiografiaBoolean = false;
	}
}

function launchmediosganados(){
	if (mediosganadosBoolean == false){
		mediosganados.gotoAndPlay("prendido");
		mediosganadosBoolean = true;
	}
}
function stopmediosganados(){
	if (mediosganadosBoolean == true){
		mediosganados.gotoAndPlay("apagado");
		mediosganadosBoolean = false;
	}
}
function launchmediospropios(){
	if (mediospropiosBoolean == false){
		mediospropios.gotoAndPlay("prendido");
		mediospropiosBoolean = true;
	}
}
function stopmediospropios(){
	if (mediospropiosBoolean == true){
		mediospropios.gotoAndPlay("apagado");
		mediospropiosBoolean = false;
	}
}

function launchliquido(){
	if (liquidoBoolean == false){
		liquido.gotoAndPlay("prendido");
		liquidoBoolean = true;
	}
}
function stopliquido(){
	if (liquidoBoolean == true){
		liquido.gotoAndPlay("apagado");
		liquidoBoolean = false;
	}
}

function launchsignosroi(){
	if (signosroiBoolean == false){
		signosroi.gotoAndPlay("prendido");
		signosroiBoolean = true;
	}
}
function stopsignosroi(){
	if (signosroiBoolean == true){
		signosroi.gotoAndPlay("apagado");
		signosroiBoolean = false;
	}
}

function launchfocos(){
	if (focosBoolean == false){
		focos.gotoAndPlay("prendido");
		focosBoolean = true;
	}
}
function stopfocos(){
	if (focosBoolean == true){
		focos.gotoAndPlay("apagado");
		focosBoolean = false;
	}
}

function launchgrafica(){
	if (graficaBoolean == false){
		grafica.gotoAndPlay("prendido");
		graficaBoolean = true;
	}
}
function stopgrafica(){
	if (graficaBoolean == true){
		grafica.gotoAndPlay("apagado");
		graficaBoolean = false;
	}
}

function launchsilueta(){
	if (siluetaBoolean == false){
		silueta.gotoAndPlay("prendido");
		siluetaBoolean = true;
	}
}
function stopsilueta(){
	if (siluetaBoolean == true){
		silueta.gotoAndPlay("apagado");
		siluetaBoolean = false;
	}
}

function launchcpu(){
	if (cpuBoolean == false){
		cpu.gotoAndPlay("prendido");
		cpuBoolean = true;
	}
}
function stopcpu(){
	if (cpuBoolean == true){
		cpu.gotoAndPlay("apagado");
		cpuBoolean = false;
	}
}

function launchpantalla4(){
	if (pantalla4Boolean == false){
		pantalla4.gotoAndPlay("prendido");
		pantalla4Boolean = true;
	}
}
function stoppantalla4(){
	if (pantalla4Boolean == true){
		pantalla4.gotoAndPlay("apagado");
		pantalla4Boolean = false;
	}
}

function launchposter(){
	if (posterBoolean == false){
		poster.gotoAndPlay("prendido");
		posterBoolean = true;
	}
}
function stopposter(){
	if (posterBoolean == true){
		poster.gotoAndPlay("apagado");
		posterBoolean = false;
	}
}
function launchradio(){
	if (radioBoolean == false){
		radio.gotoAndPlay("prendido");
		radioBoolean = true;
	}
}
function stopradio(){
	if (radioBoolean == true){
		radio.gotoAndPlay("apagado");
		radioBoolean = false;
	}
}

function launchpantalla3(){
	if (pantalla3Boolean == false){
		pantalla3.gotoAndPlay("prendido");
		pantalla3Boolean = true;
	}
}
function stoppantalla3(){
	if (pantalla3Boolean == true){
		pantalla3.gotoAndPlay("apagado");
		pantalla3Boolean = false;
	}
}

function launchmedidor3(){
	if (medidor3Boolean == false){
		medidor3.gotoAndPlay("prendido");
		medidor3Boolean = true;
	}
}
function stopmedidor3(){
	if (medidor3Boolean == true){
		medidor3.gotoAndPlay("apagado");
		medidor3Boolean = false;
	}
}

function launchpalanca(){
	if (palancaBoolean == false){
		palanca.gotoAndPlay("prendido");
		palancaBoolean = true;
	}
}
function stoppalanca(){
	if (palancaBoolean == true){
		palanca.gotoAndPlay("apagado");
		palancaBoolean = false;
	}
}

function launchrayo(){
	if (rayoBoolean == false){
		rayo.gotoAndPlay("prendido");
		rayoBoolean = true;
	}
}
function stoprayo(){
	if (rayoBoolean == true){
		rayo.gotoAndPlay("apagado");
		rayoBoolean = false;
	}
}

function launchmedidor2(){
	if (medidor2Boolean == false){
		medidor2.gotoAndPlay("prendido");
		medidor2Boolean = true;
	}
}
function stopmedidor2(){
	if (medidor2Boolean == true){
		medidor2.gotoAndPlay("apagado");
		medidor2Boolean = false;
	}
}

function launchmedidor(){
	if (medidorBoolean == false){
		medidor.gotoAndPlay("prendido");
		medidorBoolean = true;
	}
}
function stopmedidor(){
	if (medidorBoolean == true){
		medidor.gotoAndPlay("apagado");
		medidorBoolean = false;
	}
}

function launchpantalla2(){
	if (pantalla2Boolean == false){
		pantalla2.gotoAndPlay("prendido");
		pantalla2Boolean = true;
	}
}
function stoppantalla2(){
	if (pantalla2Boolean == true){
		pantalla2.gotoAndPlay("apagado");
		pantalla2Boolean = false;
	}
}



function launchoidos(){
	if (oidosBoolean == false){
		oidos.gotoAndPlay("prendido");
		oidosBoolean = true;
	}
}
function stopoidos(){
	if (oidosBoolean == true){
		oidos.gotoAndPlay("apagado");
		oidosBoolean = false;
	}
}

function launchcinta2(){
	if (cinta2Boolean == false){
		cinta2.gotoAndPlay("prendido");
		cinta2Boolean = true;
	}
}
function stopcinta2(){
	if (cinta2Boolean == true){
		cinta2.gotoAndPlay("apagado");
		cinta2Boolean = false;
	}
}

function launchcerebro3(){
	if (cerebro3Boolean == false){
		cerebro3.gotoAndPlay("prendido");
		cerebro3Boolean = true;
	}
}
function stopcerebro3(){
	if (cerebro3Boolean == true){
		cerebro3.gotoAndPlay("apagado");
		cerebro3Boolean = false;
	}
}

function launchcerebro3copia2(){
	if (cerebro3copia2Boolean == false){
		cerebro3copia2.gotoAndPlay("prendido");
		cerebro3copia2Boolean = true;
	}
}
function stopcerebro3copia2(){
	if (cerebro3copia2Boolean == true){
		cerebro3copia2.gotoAndPlay("apagado");
		cerebro3copia2Boolean = false;
	}
}

function launchcerebro3copia1(){
	if (cerebro3copia1Boolean == false){
		cerebro3copia1.gotoAndPlay("prendido");
		cerebro3copia1Boolean = true;
	}
}
function stopcerebro3copia1(){
	if (cerebro3copia1Boolean == true){
		cerebro3copia1.gotoAndPlay("apagado");
		cerebro3copia1Boolean = false;
	}
}

function launchradio2(){
	if (radio2Boolean == false){
		radio2.gotoAndPlay("prendido");
		radio2Boolean = true;
	}
}
function stopradio2(){
	if (radio2Boolean == true){
		radio2.gotoAndPlay("apagado");
		radio2Boolean = false;
	}
}

function launchtele2(){
	if (tele2Boolean == false){
		tele2.gotoAndPlay("prendido");
		tele2Boolean = true;
	}
}
function stoptele2(){
	if (tele2Boolean == true){
		tele2.gotoAndPlay("apagado");
		tele2Boolean = false;
	}
}



function launchrobot1(){
	if (robot1Boolean == false){
		robot1.gotoAndPlay("prendido");
		robot1Boolean = true;
	}
}
function stoprobot1(){
	if (robot1Boolean == true){
		robot1.gotoAndPlay("apagado");
		robot1Boolean = false;
	}
}

function launchRobot2(){
	if (Robot2Boolean == false){
		Robot2.gotoAndPlay("prendido");
		Robot2Boolean = true;
	}
}
function stopRobot2(){
	if (Robot2Boolean == true){
		Robot2.gotoAndPlay("apagado");
		Robot2Boolean = false;
	}
}

function launchresorte(){
	if (resorteBoolean == false){
		resorte.gotoAndPlay("prendido");
		resorteBoolean = true;
	}
}
function stopresorte(){
	if (resorteBoolean == true){
		resorte.gotoAndPlay("apagado");
		resorteBoolean = false;
	}
}

function launchsignoPesos(){
	if (signoPesosBoolean == false){
		signoPesos.gotoAndPlay("prendido");
		signoPesosBoolean = true;
	}
}
function stopsignoPesos(){
	if (signoPesosBoolean == true){
		signoPesos.gotoAndPlay("apagado");
		signoPesosBoolean = false;
	}
}


function launchconversacion(){
	if (conversacionBoolean == false){
		conversacion.gotoAndPlay("prendido");
		conversacionBoolean = true;
	}
}
function stopconversacion(){
	if (conversacionBoolean == true){
		conversacion.gotoAndPlay("apagado");
		conversacionBoolean = false;
	}
}

function launchtrofeo(){
	if (trofeoBoolean == false){
		trofeo.gotoAndPlay("prendido");
		trofeoBoolean = true;
	}
}
function stoptrofeo(){
	if (trofeoBoolean == true){
		trofeo.gotoAndPlay("apagado");
		trofeoBoolean = false;
	}
}

function launchcorazones5(){
	if (corazones5Boolean == false){
		corazones5.gotoAndPlay("prendido");
		corazones5Boolean = true;
	}
}
function stopcorazones5(){
	if (corazones5Boolean == true){
		corazones5.gotoAndPlay("apagado");
		corazones5Boolean = false;
	}
}

function launchcelular3(){
	if (celular3Boolean == false){
		celular3.gotoAndPlay("prendido");
		celular3Boolean = true;
	}
}
function stopcelular3(){
	if (celular3Boolean == true){
		celular3.gotoAndPlay("apagado");
		celular3Boolean = false;
	}
}

function launchlapTop2(){
	if (lapTop2Boolean == false){
		lapTop2.gotoAndPlay("prendido");
		lapTop2Boolean = true;
	}
}
function stoplapTop2(){
	if (lapTop2Boolean == true){
		lapTop2.gotoAndPlay("apagado");
		lapTop2Boolean = false;
	}
}

function launchtelefonoPantalla(){
	if (telefonoPantallaBoolean == false){
		telefonoPantalla.gotoAndPlay("prendido");
		telefonoPantallaBoolean = true;
	}
}
function stoptelefonoPantalla(){
	if (telefonoPantallaBoolean == true){
		telefonoPantalla.gotoAndPlay("apagado");
		telefonoPantallaBoolean = false;
	}
}





function desactivateScrollListener(){
	activesScrollListener = false;
}
function reactiveScrollListener(scrollReactivate){
	if (activesScrollListener == false) {
		activesScrollListener = true;
		o = (centerX + scrollReactivate)/8;
	};
}

function launchcorazon2(){
	if (corazon2Boolean == false){
		corazon2.gotoAndPlay("prendido");
		corazon2Boolean = true;
	}
}
function stopcorazon2(){
	if (corazon2Boolean == true){
		corazon2.gotoAndPlay("apagado");
		corazon2Boolean = false;
	}
}
