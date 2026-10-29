const capabilities = [
  "C/C++",
  "Arduino",
  "ESP32",
  "ATmega32",
  "Embedded systems",
  "I2C / UART",
  "Sensors",
  "Control systems",
  "Robotics",
  "Circuit prototyping",
  "LTspice",
  "ImageJ",
];

function MarqueeGroup() {
  return (
    <span className="marquee__group">
      {capabilities.map((capability) => (
        <span key={capability}>
          {capability}
          <i aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technical capabilities">
      <div className="marquee__track" aria-hidden="true">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
