
import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Conversion Celsius → Fahrenheit
  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const f = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(f.toFixed(1));
    }
  };

  // Conversion Fahrenheit → Celsius
  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const c = (parseFloat(value) - 32) * 5/9;
      setCelsius(c.toFixed(1));
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div>
        <label>°C : </label>
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>°F : </label>
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>
      <p>
        {celsius !== '' && fahrenheit !== ''
          ? `${celsius} °C = ${fahrenheit} °F`
          : 'Saisissez une température'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;