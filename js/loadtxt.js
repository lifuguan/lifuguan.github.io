// CAR
$(function(){
   $.get("./abs/car.txt", function(data) {
      $("#carabs").html(data);
   });
});

$(function(){
   $.get("./bib/car.txt", function(data) {
      $("#carbib").html(data);
   });
});

// ECON
$(function(){
   $.get("./abs/econ.txt", function(data) {
      $("#econabs").html(data);
   });
});

$(function(){
   $.get("./bib/econ.txt", function(data) {
      $("#econbib").html(data);
   });
});

// ICON
$(function(){
   $.get("./abs/icon.txt", function(data) {
      $("#iconabs").html(data);
   });
});

$(function(){
   $.get("./bib/icon.txt", function(data) {
      $("#iconbib").html(data);
   });
});

// Alphapose
$(function(){
   $.get("./abs/alphapose.txt", function(data) {
      $("#alphaposeabs").html(data);
   });
});

$(function(){
   $.get("./bib/alphapose.txt", function(data) {
      $("#alphaposebib").html(data);
   });
});

// DART
$(function(){
   $.get("./abs/dart.txt", function(data) {
      $("#dartabs").html(data);
   });
});

$(function(){
   $.get("./bib/dart.txt", function(data) {
      $("#dartbib").html(data);
   });
});

// PoseHD
$(function(){
   $.get("./abs/posehd.txt", function(data) {
      $("#posehdabs").html(data);
   });
});

$(function(){
   $.get("./bib/posehd.txt", function(data) {
      $("#posehdbib").html(data);
   });
});

// MonoPort
$(function(){
   $.get("./abs/monoport.txt", function(data) {
      $("#monoportabs").html(data);
   });
});

$(function(){
   $.get("./bib/monoport.txt", function(data) {
      $("#monoportbib").html(data);
   });
});

// MonoPort_RTL
$(function(){
   $.get("./abs/monoport_rtl.txt", function(data) {
      $("#monoportrtlabs").html(data);
   });
});

$(function(){
   $.get("./bib/monoport_rtl.txt", function(data) {
      $("#monoportrtlbib").html(data);
   });
});

// PoseFlow
$(function(){
   $.get("./abs/poseflow.txt", function(data) {
      $("#poseflowabs").html(data);
   });
});

$(function(){
   $.get("./bib/poseflow.txt", function(data) {
      $("#poseflowbib").html(data);
   });
});