Blockly.Blocks['SHT31_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("begin ADDR")
        .appendField(new Blockly.FieldTextInput("0x44"), "SHT31ADDR");
    this.appendDummyInput()
        .appendField("I2C PORT")
        .appendField(new Blockly.FieldDropdown([["Wire1","Wire1"], ["Wire","Wire"], ["none","none"]]), "SHT31_I2C_PORT");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("setup sensor SHT31 ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SHT31_readHumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("read humidity (%)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour("#3f93e8");
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SHT31_readTemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("read temperature (°C)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour("#3f93e8");
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};
