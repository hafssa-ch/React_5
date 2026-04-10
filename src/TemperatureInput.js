
function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Température °C"
        style={{ margin: '5px', padding: '8px' }}
      />
    </div>
  );
}

export default TemperatureInput;