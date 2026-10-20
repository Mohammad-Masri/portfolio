"use client";

import { useState } from "react";
import { engineeringProcess } from "@/data/portfolio-v5";

export default function ApproachSelector() {
  const [selected, setSelected] = useState(0);
  const active = engineeringProcess[selected];

  return (
    <div className="v5-approach-inner">
      <div className="v5-approach-tabs" role="group" aria-label="Choose an engineering principle">
        <span className="v5-approach-track" aria-hidden="true" />
        {engineeringProcess.map((step, index) => (
          <button
            type="button"
            key={step.number}
            className={selected === index ? "v5-approach-tab is-active" : "v5-approach-tab"}
            aria-label={`Step ${step.number}: ${step.short}`}
            aria-pressed={selected === index}
            aria-controls="v5-approach-detail"
            onClick={() => setSelected(index)}
          >
            <span className="v5-approach-number">{step.number}</span>
            <span className="v5-approach-label">{step.short}</span>
          </button>
        ))}
      </div>
      <div className="v5-approach-detail" id="v5-approach-detail" aria-live="polite" aria-atomic="true">
        <span className="v5-mono">THE WORK / STEP {active.number}</span>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
      </div>
    </div>
  );
}
