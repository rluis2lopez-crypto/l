(function () {
  const shapeSelect = document.getElementById("shape");
  const inputsWrap = document.getElementById("inputs");
  const calculateBtn = document.getElementById("calculate");
  const resetBtn = document.getElementById("reset");
  const resultArea = document.getElementById("resultArea");
  const resultPerimeter = document.getElementById("resultPerimeter");
  const resultVolume = document.getElementById("resultVolume");

  const shapes = {
    cube: [{ id: "side", label: "Lado (a)", placeholder: "ej. 5" }],
    prism: [
      { id: "length", label: "Largo (l)", placeholder: "ej. 6" },
      { id: "width", label: "Ancho (w)", placeholder: "ej. 4" },
      { id: "height", label: "Altura (h)", placeholder: "ej. 3" },
    ],
    cylinder: [
      { id: "radius", label: "Radio (r)", placeholder: "ej. 3" },
      { id: "height", label: "Altura (h)", placeholder: "ej. 7" },
    ],
    cone: [
      { id: "radius", label: "Radio (r)", placeholder: "ej. 3" },
      { id: "height", label: "Altura (h)", placeholder: "ej. 6" },
      { id: "slant", label: "Generatriz (g)", placeholder: "opcional" },
    ],
    pyramid: [
      { id: "baseLength", label: "Lado de la base (b)", placeholder: "ej. 5" },
      { id: "height", label: "Altura (h)", placeholder: "ej. 7" },
    ],
    sphere: [{ id: "radius", label: "Radio (r)", placeholder: "ej. 4" }],
  };

  function createInputs(shape) {
    inputsWrap.innerHTML = "";
    shapes[shape].forEach((field) => {
      const div = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = field.label;
      const input = document.createElement("input");
      input.type = "number";
      input.id = field.id;
      input.placeholder = field.placeholder;
      input.min = "0";
      input.step = "any";
      div.appendChild(label);
      div.appendChild(input);
      inputsWrap.appendChild(div);
    });
  }

  function format(n) {
    return n && isFinite(n) ? n.toFixed(4) : "—";
  }

  function calculate() {
    const shape = shapeSelect.value;
    const get = (id) => parseFloat(document.getElementById(id)?.value);
    let area = null,
      per = null,
      vol = null;

    switch (shape) {
      case "cube": {
        const a = get("side");
        if (a > 0) {
          area = 6 * a * a;
          per = 12 * a;
          vol = a ** 3;
        }
        break;
      }

      case "prism": {
        const l = get("length"),
          w = get("width"),
          h = get("height");
        if (l > 0 && w > 0 && h > 0) {
          area = 2 * (l * w + l * h + w * h);
          per = 4 * (l + w + h) / 3;
          vol = l * w * h;
        }
        break;
      }

      case "cylinder": {
        const r = get("radius"),
          h = get("height");
        if (r > 0 && h > 0) {
          area = 2 * Math.PI * r * (r + h);
          per = 2 * Math.PI * r;
          vol = Math.PI * r * r * h;
        }
        break;
      }

      case "cone": {
        const r = get("radius"),
          h = get("height");
        let g = get("slant");
        if (!g && r > 0 && h > 0) g = Math.sqrt(r * r + h * h);
        if (r > 0 && g > 0 && h > 0) {
          area = Math.PI * r * (r + g);
          per = 2 * Math.PI * r;
          vol = (1 / 3) * Math.PI * r * r * h;
        }
        break;
      }

      case "pyramid": {
        const b = get("baseLength"),
          h = get("height");
        if (b > 0 && h > 0) {
          const base = b * b;
          const apotema = Math.sqrt((b / 2) ** 2 + h ** 2);
          area = base + 2 * b * apotema / 2;
          per = 4 * b;
          vol = (1 / 3) * base * h;
        }
        break;
      }

      case "sphere": {
        const r = get("radius");
        if (r > 0) {
          area = 4 * Math.PI * r * r;
          per = 2 * Math.PI * r;
          vol = (4 / 3) * Math.PI * r ** 3;
        }
        break;
      }
    }

    resultArea.textContent = "Área: " + format(area);
    resultPerimeter.textContent = "Perímetro / Superficie: " + format(per);
    resultVolume.textContent = "Volumen: " + format(vol);
  }

  function reset() {
    inputsWrap.querySelectorAll("input").forEach((i) => (i.value = ""));
    resultArea.textContent = "Área: —";
    resultPerimeter.textContent = "Perímetro / Superficie: —";
    resultVolume.textContent = "Volumen: —";
  }

  shapeSelect.addEventListener("change", () => {
    createInputs(shapeSelect.value);
    reset();
  });
  calculateBtn.addEventListener("click", calculate);
  resetBtn.addEventListener("click", reset);
  createInputs(shapeSelect.value);
})();
