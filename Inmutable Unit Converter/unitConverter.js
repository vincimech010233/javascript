function convertLength(meters) {
    return meters / 1000;
}

function convertWeight(grams) {
    return grams / 1000;
}

function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

const units = ["Length", "Weight", "Temperature"];

function getAvailableUnits(selectedUnit) {
    const index = units.indexOf(selectedUnit);
    if (index !== -1) {
        return units.toSpliced(index, 1);
    }
    return units;
}

function unitConverter(value, unitType, availableUnits) {
    if (!availableUnits.includes(unitType)) {
        return "Error: Esta unidad no está disponible para la conversión.";
    }
    switch(unitType) {
        case "Length":
            return convertLength(value) + " kilometers";
        case "Weight":
            return convertWeight(value) + " kilograms";
        case "Temperature":
            return convertTemperature(value) + " Fahrenheit";
        default:
            return "Error: Unidad no soportada.";
    }
}

// Prueba eliminando "Length"
const selectedUnit = "Temperature";
console.log("Unidades disponibles antes de la selección:", units);
const availableUnitsAfterSelection = getAvailableUnits(selectedUnit);
console.log("Unidades disponibles después de seleccionar " + selectedUnit + ":", availableUnitsAfterSelection);

console.log(unitConverter(5000, "Length", availableUnitsAfterSelection));
console.log(unitConverter(3000, "Weight", availableUnitsAfterSelection));
console.log(unitConverter(25, "Temperature", availableUnitsAfterSelection));
