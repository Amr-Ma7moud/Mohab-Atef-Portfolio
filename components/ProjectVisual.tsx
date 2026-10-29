import type { CSSProperties } from "react";
import type { Project } from "@/data/portfolio";

export default function ProjectVisual({ slug }: { slug: Project["slug"] }) {
  if (slug === "solar") {
    return (
      <div className="project__visual visual--solar" aria-hidden="true">
        <div className="blueprint">
          <div className="blueprint__head">
            <span>SOLAR / MONITOR</span>
            <span>RIG v1.0</span>
          </div>
          <div className="blueprint__count">
            16<span>-bit</span>
          </div>
          <div className="blueprint__caption">I2C ADC / voltage + current sensing</div>
          <div className="blueprint__modules">
            <span>Panel</span>
            <span>Voltage</span>
            <span>Current</span>
            <span>ADC</span>
            <span>I2C</span>
            <span>Temp</span>
            <span>Humidity</span>
            <span>3.3V MCU</span>
          </div>
          <div className="blueprint__bars">
            {[42, 58, 66, 54, 72, 88, 80, 94, 76, 90, 62, 84].map((height, index) => (
              <i key={index} style={{ "--h": `${height}%` } as CSSProperties} />
            ))}
          </div>
          <div className="blueprint__foot">
            <span>STATUS: SAMPLING</span>
            <span>I2C / OK</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "rover") {
    return (
      <div className="project__visual visual--rover" aria-hidden="true">
        <div className="portal">
          <div className="portal__bar">
            <span>ROVER / AUTONOMY</span>
            <span>SENSOR VIEW</span>
          </div>
          <div className="portal__headline">
            AUTO
            <br />
            <span>ROVER</span>
          </div>
          <div className="portal__grid">
            <div className="portal__tile portal__tile--wide">
              <span>DISTANCE</span>
              <strong>42</strong>
              <small>cm / clear</small>
            </div>
            <div className="portal__tile">
              <span>MOTORS</span>
              <strong>02</strong>
              <small>DC / driver</small>
            </div>
            <div className="portal__tile">
              <span>STATE</span>
              <strong>AVOID</strong>
              <small>obstacle</small>
            </div>
          </div>
          <div className="portal__ticker">
            <span>SENSE</span>
            <span>DECIDE</span>
            <span>DRIVE</span>
          </div>
          <div className="portal__foot">
            <span>REAL-TIME OBSTACLE AVOIDANCE</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project__visual visual--gas" aria-hidden="true">
      <div className="market">
        <div className="market__bar">
          <span>GAS / ALERT</span>
          <span className="market__live">
            <i />
            ARMED
          </span>
        </div>
        <div className="market__price">
          180<span>ppm</span>
        </div>
        <div className="market__caption">ATMOSPHERIC GAS / LIVE SAMPLE</div>
        <div className="market__chart">
          <svg viewBox="0 0 320 120" role="presentation">
            <path className="market__gridline" d="M0 30H320M0 60H320M0 90H320" />
            <path
              className="market__line"
              d="M0 96L28 88L56 92L84 70L112 76L140 54L168 60L196 38L224 44L252 24L280 30L320 12"
            />
            <path
              className="market__area"
              d="M0 96L28 88L56 92L84 70L112 76L140 54L168 60L196 38L224 44L252 24L280 30L320 12V120H0Z"
            />
          </svg>
        </div>
        <div className="market__rows">
          <span>
            <b>GAS</b>
            <em>RISING</em>
          </span>
          <span>
            <b>BUZZER</b>
            <em>ON</em>
          </span>
          <span>
            <b>LED</b>
            <em>RED</em>
          </span>
        </div>
        <div className="market__foot">
          <span>THRESHOLD: EXCEEDED</span>
          <span>ALERT / ON</span>
        </div>
      </div>
    </div>
  );
}
