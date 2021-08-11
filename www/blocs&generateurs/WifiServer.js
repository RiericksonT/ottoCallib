/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Blocks.WifiServer');
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');



Blockly.Blocks['wifiserver_port'] = {
  init: function() {
     this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_port);
   	this.appendValueInput("server_port")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Init the internal web server in the defined port number in the block');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['wifiserver_port'] = function(block) {
  var server_port = Blockly.Arduino.valueToCode(block, 'server_port', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.variables_['define_wifiserver_port'] = 'WiFiServer server('+server_port+');\n';
  
  var code = 'server.begin();\n';
  
  return code;
};


Blockly.Blocks['wifiserver_waitconnection'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_wait)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Wait connection into the internal server');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['wifiserver_waitconnection'] = function(block) {
	 
 var code ='WiFiClient client = server.available();\n'+
    'if (!client) { return; }\n'+
    'while(!client.available()){  delay(1); }\n';
    	
  return code;
};

Blockly.Blocks['wifiserver_answer'] = {
  init: function() {
     this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_answer);
   	this.appendValueInput("server_answer")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Answer text.Our server respond to any customer this text');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['wifiserver_answer'] = function(block) {
  var server_answer = Blockly.Arduino.valueToCode(block, 'server_answer', Blockly.Arduino.ORDER_ATOMIC);
  
   var code ='client.println("HTTP/1.1 200 OK");\n'+
    'client.println("Content-Type: text/html");\n'+
	'client.println("");\n'+
	'client.println("<!DOCTYPE HTML>");\n'+
	'client.println("<html>");\n'+
	'client.println('+server_answer+');\n'+
	'client.println("</html>");\n'+
	'delay(1);\n';
	 
  
  return code;
};


Blockly.Blocks['wifiserver_stop'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_stop)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Stop connected client');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['wifiserver_stop'] = function(block) {
	 
 var code ='client.stop();\n';
        	
  return code;
};

Blockly.Blocks['wifiserver_flush'] = {
   init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_flush)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('flush connected client');
    this.setHelpUrl(''); 
  }
};

Blockly.Arduino['wifiserver_flush'] = function(block) {
	 
 var code ='client.flush();\n';
        	
  return code;
};

Blockly.Blocks['wifiserver_ip'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_ip)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the ip of the connected customer');
	this.setHelpUrl(''); 
  }
};


Blockly.Arduino['wifiserver_ip'] = function(block) {
 
  
  var code = 'client.remoteIP()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks['wifiserver_request'] = {
  init: function() {
    this.setColour("#008080");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_request)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('Refund the request of the connected customer');
	this.setHelpUrl(''); 
  }
};


Blockly.Arduino['wifiserver_request'] = function(block) {
 
  
  var code = 'client.readStringUntil(\'\\r\')';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

