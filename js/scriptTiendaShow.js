/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    $("#menuTiendaCelulares").on('click', function() {
   $("#tiendaSeccionComputadoras,#tiendaSeccionOtros,#tiendaSeccionRepuestos,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $("#tiendaSeccionCelulares,.tiendaDC,.tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc").fadeIn();
});
$("#menuTiendaComputadoras").on('click', function() {
   $("#tiendaSeccionCelulares,#tiendaSeccionOtros,#tiendaSeccionRepuestos,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $("#tiendaSeccionComputadoras,.tiendaDPc,.tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther").fadeIn();
});
$("#menuTiendaOtros").on('click', function() {
   $("#tiendaSeccionCelulares,#tiendaSeccionComputadoras,#tiendaSeccionRepuestos,.tiendaDPc,.tiendaDC,.tiendaDR").hide();
   $("#tiendaSeccionOtros,.tiendaDO").fadeIn();
});
$("#menuTiendaRepuestos").on('click', function() {
   $("#tiendaSeccionCelulares,#tiendaSeccionComputadoras,#tiendaSeccionOtros,.tiendaDPc,.tiendaDO,.tiendaDC").hide();
   $("#tiendaSeccionRepuestos,.tiendaDR").fadeIn();
});
/*!SUBSECCIONS*/
/*!CELULARES*/
$("#tiendaSubDCF").on('click', function() {
   $(".tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc").hide();
   $(".tiendaDCF").fadeIn();
});
$("#tiendaSubDCV").on('click', function() {
   $(".tiendaDCF,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc").hide();
   $(".tiendaDCV").fadeIn();
});
$("#tiendaSubDCC").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc").hide();
   $(".tiendaDCC").fadeIn();
});
$("#tiendaSubDCB").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCAur,.tiendaDCAcc").hide();
   $(".tiendaDCB").fadeIn();
});
$("#tiendaSubDCAur").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAcc").hide();
   $(".tiendaDCAur").fadeIn();
});
$("#tiendaSubDCAcc").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur").hide();
   $(".tiendaDCAcc").fadeIn();
});
/*!COMPUTADORAS*/
$("#tiendaDPCAur").on('click', function() {
   $(".tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther").hide();
   $(".tiendaDPcAur").fadeIn();
});
$("#tiendaDPCComp").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther").hide();
   $(".tiendaDPcComp").fadeIn();
});
$("#tiendaDPCJoy").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther").hide();
   $(".tiendaDPCJoy").fadeIn();
});
$("#tiendaDPCMous").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCKey,.tiendaDPCOther").hide();
   $(".tiendaDPCMous").fadeIn();
});
$("#tiendaDPCKey").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCOther").hide();
   $(".tiendaDPCKey").fadeIn();
});
$("#tiendaDPCOther").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey").hide();
   $(".tiendaDPCOther").fadeIn();
});
$("#tiendaDOPen").on('click', function() {
   $(".tiendaDORem,.tiendaDOPar,.tiendaDOAcc").hide();
   $(".tiendaDOPen").fadeIn();
});
$("#tiendaDORem").on('click', function() {
   $(".tiendaDOPen,.tiendaDOPar,.tiendaDOAcc").hide();
   $(".tiendaDORem").fadeIn();
});
$("#tiendaDOPar").on('click', function() {
   $(".tiendaDOPen,.tiendaDORem,.tiendaDOAcc").hide();
   $(".tiendaDOPar").fadeIn();
});
$("#tiendaDOAcc").on('click', function() {
   $(".tiendaDOPen,.tiendaDORem,.tiendaDOPar").hide();
   $(".tiendaDOAcc").fadeIn();
});
/*!SCRIPT SERVICIOS*/
/*
serviciosRowCelulares
serviciosRowComputadoras
serviciosRowOtros
*/

$("#serviciosBotonCelulares").on('click', function() {
   $(".serviciosRowComputadoras,.serviciosRowOtros").hide();
   $(".serviciosRowCelulares").fadeIn();
});
$("#serviciosBotonComputadoras").on('click', function() {
   $(".serviciosRowCelulares,.serviciosRowOtros").hide();
   $(".serviciosRowComputadoras").fadeIn();
});
$("#serviciosBotonOtros").on('click', function() {
   $(".serviciosRowCelulares,.serviciosRowComputadoras").hide();
   $(".serviciosRowOtros").fadeIn();
});