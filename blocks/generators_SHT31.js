Blockly.JavaScript['SHT31_Setup'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  //var dropdown_dht_type = block.getFieldValue('dht_type');
  //var number_pin = block.getFieldValue('pin'); 
  var text_sht31addr = block.getFieldValue('SHT31ADDR');
  var dropdown_sht31_i2c_port = block.getFieldValue('SHT31_I2C_PORT');
  var code = `
  #EXTINC#include "Adafruit_SHT31.h"#END
  #VARIABLE Adafruit_SHT31 ${variable_instance} = Adafruit_SHT31(&${dropdown_sht31_i2c_port});#END
  if (! ${variable_instance}.begin(${text_sht31addr})) {}\nif (${variable_instance}.isHeaterEnabled()){}
  `;
  return code;
};

Blockly.JavaScript['SHT31_readHumid'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readHumidity()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['SHT31_readTemp'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readTemperature()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
