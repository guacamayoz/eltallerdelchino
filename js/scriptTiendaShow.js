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
/*!mobile*/
$("#tiendaSubDCVerTodoMob").on('click', function() {
   $(".tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDC,.tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc").fadeIn();
});
$("#tiendaSubDCFMob").on('click', function() {
   $(".tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCF,.tiendaDC").fadeIn();
});
$("#tiendaSubDCVMob").on('click', function() {
   $(".tiendaDCF,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCV,.tiendaDC").fadeIn();
});
$("#tiendaSubDCCMob").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCB,.tiendaDCAur,.tiendaDCAcc,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCC,.tiendaDC").fadeIn();
});
$("#tiendaSubDCBMob").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCAur,.tiendaDCAcc,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCB,.tiendaDC").fadeIn();
});
$("#tiendaSubDCAurMob").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAcc,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCAur,.tiendaDC").fadeIn();
});
$("#tiendaSubDCAccMob").on('click', function() {
   $(".tiendaDCF,.tiendaDCV,.tiendaDCC,.tiendaDCB,.tiendaDCAur,.tiendaDPc,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDCAcc,.tiendaDC").fadeIn();
});
/*!escritorio*/
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
/*!mobile*/
$("#tiendaSubDPcVerTodoMob").on('click', function() {
   $(".tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPc,.tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther").fadeIn();
});
$("#tiendaSubDPcAurMob").on('click', function() {
   $(".tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPcAur,.tiendaDPc").fadeIn();
});
$("#tiendaSubDPcCompMob").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPcComp,.tiendaDPc").fadeIn();
});
$("#tiendaSubDPCJoyMob").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCMous,.tiendaDPCKey,.tiendaDPCOther,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPCJoy,.tiendaDPc").fadeIn();
});
$("#tiendaSubDPCMousMob").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCKey,.tiendaDPCOther,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPCMous,.tiendaDPc").fadeIn();
});
$("#tiendaSubDPCKeyMob").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCOther,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPCKey,.tiendaDPc").fadeIn();
});
$("#tiendaSubDPCOtherMob").on('click', function() {
   $(".tiendaDPcAur,.tiendaDPcComp,.tiendaDPCJoy,.tiendaDPCMous,.tiendaDPCKey,.tiendaDC,.tiendaDO,.tiendaDR").hide();
   $(".tiendaDPCOther,.tiendaDPc").fadeIn();
});
/*!escritorio*/
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
/*!mobile*/
$("#tiendaSubDOVerTodoMob").on('click', function() {
   $(".tiendaDC,.tiendaDPc,.tiendaDR").hide();
   $(".tiendaDO,.tiendaDOPen,.tiendaDORem,.tiendaDOPar,.tiendaDOAcc").fadeIn();
});
$("#tiendaDOPenMob").on('click', function() {
   $(".tiendaDORem,.tiendaDOPar,.tiendaDOAcc,.tiendaDC,.tiendaDPc,.tiendaDR").hide();
   $(".tiendaDOPen,.tiendaDO").fadeIn();
});
$("#tiendaDORemMob").on('click', function() {
   $(".tiendaDOPen,.tiendaDOPar,.tiendaDOAcc,.tiendaDC,.tiendaDPc,.tiendaDR").hide();
   $(".tiendaDORem,.tiendaDO").fadeIn();
});
$("#tiendaDOParMob").on('click', function() {
   $(".tiendaDOPen,.tiendaDORem,.tiendaDOAcc,.tiendaDC,.tiendaDPc,.tiendaDR").hide();
   $(".tiendaDOPar,.tiendaDO").fadeIn();
});
$("#tiendaDOAccMob").on('click', function() {
   $(".tiendaDOPen,.tiendaDORem,.tiendaDOPar,.tiendaDC,.tiendaDPc,.tiendaDR").hide();
   $(".tiendaDOAcc,.tiendaDO").fadeIn();
});
/*!escritorio*/
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
/*!REPUESTOS*/
/*!mobile*/
$("#tiendaSubDRVerTodoMob").on('click', function() {
   $(".tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDR,.tiendaDRR,.tiendaDRC,.tiendaDRB").fadeIn();
});
$("#tiendaDRRMob").on('click', function() {
   $(".tiendaDRC,.tiendaDRB,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRR,.tiendaDR").fadeIn();
});
$("#tiendaDRCMob").on('click', function() {
   $(".tiendaDRR,.tiendaDRB,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRC,.tiendaDR").fadeIn();
});
$("#tiendaDRBMob").on('click', function() {
   $(".tiendaDRR,.tiendaDRC,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRB,.tiendaDR").fadeIn();
});
/*!escritorio*/
$("#tiendaDRR").on('click', function() {
   $(".tiendaDRC,.tiendaDRB,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRR,.tiendaDR").fadeIn();
});
$("#tiendaDRC").on('click', function() {
   $(".tiendaDRR,.tiendaDRB,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRC,.tiendaDR").fadeIn();
});
$("#tiendaDRB").on('click', function() {
   $(".tiendaDRC,.tiendaDRR,.tiendaDC,.tiendaDPc,.tiendaDO").hide();
   $(".tiendaDRB,.tiendaDR").fadeIn();
});
/*!SCRIPT SERVICIOS*/
/*
serviciosRowCelulares
serviciosRowComputadoras
serviciosRowOtros
*/
$("#serviciosBoxesHide").hide();
$("#serviciosBotonCelulares").on('click', function() {
   $(".serviciosRowComputadoras,.serviciosRowOtros").hide();
   $(".serviciosRowCelulares,#serviciosBoxesHide").fadeIn();
});
$("#serviciosBotonComputadoras").on('click', function() {
   $(".serviciosRowCelulares,.serviciosRowOtros").hide();
   $(".serviciosRowComputadoras,#serviciosBoxesHide").fadeIn();
});
$("#serviciosBotonOtros").on('click', function() {
   $(".serviciosRowCelulares,.serviciosRowComputadoras").hide();
   $(".serviciosRowOtros,#serviciosBoxesHide").fadeIn();
});
$("#serviciosBotonInicioBtn").on('click', function() {
   $("#serviciosBoxesHide").hide();
});
