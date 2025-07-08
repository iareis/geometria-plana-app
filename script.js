// script.js
function limparCampos() {
  document.getElementById("formMedidas").innerHTML = "";
  document.getElementById("imagem").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("submenuTipo").style.display = "none";
  document.getElementById("tipoQuadrilatero").value = "";
}

function mostrarCampos() {
  limparCampos();
  const figura = document.getElementById("figura").value;
  if (figura === "quadrilatero") {
    document.getElementById("submenuTipo").style.display = "block";
  } else {
    mostrarCamposQuadrilatero(figura);
  }
}

function mostrarCamposQuadrilatero(tipo = null) {
  limparCampos();
  const form = document.getElementById("formMedidas");
  const imagem = document.getElementById("imagem");
  let figura = tipo || document.getElementById("tipoQuadrilatero").value;

  const imagens = {
    triangulo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Triangle_-_black_simple.svg",
    quadrado: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Square_-_black_simple.svg",
    retangulo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Rectangle_-_black_simple.svg",
    circulo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Circle_-_black_simple.svg",
    losango: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rhombus.svg",
    trapezio: "https://upload.wikimedia.org/wikipedia/commons/6/66/Trapezoid.svg",
    paralelogramo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Parallelogram.svg",
    deltoide: "https://upload.wikimedia.org/wikipedia/commons/7/78/Kite_diagram.svg",
    irregular: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Quadrilateral_-_black_simple.svg"
  };

  if (imagens[figura]) {
    imagem.innerHTML = `<img src="${imagens[figura]}" alt="${figura}" />`;
  }

  switch (figura) {
    case "triangulo":
      form.innerHTML = `
        <input type="number" placeholder="Base" id="base"/>
        <input type="number" placeholder="Altura" id="altura"/>
        <input type="number" placeholder="Lado A" id="a"/>
        <input type="number" placeholder="Lado B" id="b"/>
        <input type="number" placeholder="Lado C" id="c"/>
      `;
      break;
    case "quadrado":
      form.innerHTML = `<input type="number" placeholder="Lado" id="lado"/>`;
      break;
    case "retangulo":
      form.innerHTML = `
        <input type="number" placeholder="Base" id="base"/>
        <input type="number" placeholder="Altura" id="altura"/>
      `;
      break;
    case "circulo":
      form.innerHTML = `<input type="number" placeholder="Raio" id="raio"/>`;
      break;
    case "losango":
      form.innerHTML = `
        <input type="number" placeholder="Diagonal maior (D)" id="dMaior"/>
        <input type="number" placeholder="Diagonal menor (d)" id="dMenor"/>
      `;
      break;
    case "trapezio":
      form.innerHTML = `
        <input type="number" placeholder="Base maior" id="baseMaior"/>
        <input type="number" placeholder="Base menor" id="baseMenor"/>
        <input type="number" placeholder="Altura" id="altura"/>
        <input type="number" placeholder="Lado A" id="a"/>
        <input type="number" placeholder="Lado B" id="b"/>
      `;
      break;
    case "paralelogramo":
      form.innerHTML = `
        <input type="number" placeholder="Base" id="base"/>
        <input type="number" placeholder="Altura" id="altura"/>
        <input type="number" placeholder="Lado" id="lado"/>
      `;
      break;
    case "deltoide":
      form.innerHTML = `
        <input type="number" placeholder="Diagonal maior (D)" id="dMaior"/>
        <input type="number" placeholder="Diagonal menor (d)" id="dMenor"/>
        <input type="number" placeholder="Lado maior" id="ladoMaior"/>
        <input type="number" placeholder="Lado menor" id="ladoMenor"/>
      `;
      break;
    case "irregular":
      form.innerHTML = `
        <input type="number" placeholder="Lado A" id="ladoA"/>
        <input type="number" placeholder="Lado B" id="ladoB"/>
        <input type="number" placeholder="Lado C" id="ladoC"/>
        <input type="number" placeholder="Lado D" id="ladoD"/>
      `;
      break;
  }
}

function calcular() {
  const figura = document.getElementById("figura").value;
  const tipo = figura === "quadrilatero" ? document.getElementById("tipoQuadrilatero").value : figura;
  const r = document.getElementById("resultado");
  let area = 0, perimetro = 0, diagonais = 2, comprimentoDiagonais = "";

  switch (tipo) {
    case "triangulo":
      const baseT = +document.getElementById("base").value;
      const alturaT = +document.getElementById("altura").value;
      const aT = +document.getElementById("a").value;
      const bT = +document.getElementById("b").value;
      const cT = +document.getElementById("c").value;
      area = (baseT * alturaT) / 2;
      perimetro = aT + bT + cT;
      break;
    case "quadrado":
      const ladoQ = +document.getElementById("lado").value;
      area = ladoQ ** 2;
      perimetro = 4 * ladoQ;
      comprimentoDiagonais = (Math.sqrt(2) * ladoQ).toFixed(2);
      break;
    case "retangulo":
      const baseR = +document.getElementById("base").value;
      const alturaR = +document.getElementById("altura").value;
      area = baseR * alturaR;
      perimetro = 2 * (baseR + alturaR);
      comprimentoDiagonais = (Math.sqrt(baseR ** 2 + alturaR ** 2)).toFixed(2);
      break;
    case "circulo":
      const raio = +document.getElementById("raio").value;
      area = (Math.PI * raio ** 2).toFixed(2);
      perimetro = (2 * Math.PI * raio).toFixed(2);
      diagonais = 0;
      break;
    case "losango":
      const D = +document.getElementById("dMaior").value;
      const d = +document.getElementById("dMenor").value;
      area = (D * d) / 2;
      perimetro = 4 * Math.sqrt((D / 2) ** 2 + (d / 2) ** 2).toFixed(2);
      comprimentoDiagonais = `${D}, ${d}`;
      break;
    case "trapezio":
      const baseMaior = +document.getElementById("baseMaior").value;
      const baseMenor = +document.getElementById("baseMenor").value;
      const alturaTrap = +document.getElementById("altura").value;
      const a = +document.getElementById("a").value;
      const b = +document.getElementById("b").value;
      area = ((baseMaior + baseMenor) * alturaTrap) / 2;
      perimetro = baseMaior + baseMenor + a + b;
      break;
    case "paralelogramo":
      const base = +document.getElementById("base").value;
      const altura = +document.getElementById("altura").value;
      const lado = +document.getElementById("lado").value;
      area = base * altura;
      perimetro = 2 * (base + lado);
      break;
    case "deltoide":
      const dMaior = +document.getElementById("dMaior").value;
      const dMenor = +document.getElementById("dMenor").value;
      const lMaior = +document.getElementById("ladoMaior").value;
      const lMenor = +document.getElementById("ladoMenor").value;
      area = (dMaior * dMenor) / 2;
      perimetro = 2 * (lMaior + lMenor);
      comprimentoDiagonais = `${dMaior}, ${dMenor}`;
      break;
    case "irregular":
      const aI = +document.getElementById("ladoA").value;
      const bI = +document.getElementById("ladoB").value;
      const cI = +document.getElementById("ladoC").value;
      const dI = +document.getElementById("ladoD").value;
      const s = (aI + bI + cI + dI) / 2;
      area = Math.sqrt((s - aI) * (s - bI) * (s - cI) * (s - dI)).toFixed(2);
      perimetro = aI + bI + cI + dI;
      break;
  }

  r.innerHTML = `
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Perímetro:</strong> ${perimetro}</p>
    <p><strong>Diagonais:</strong> ${diagonais}</p>
    ${comprimentoDiagonais ? `<p><strong>Comprimento das diagonais:</strong> ${comprimentoDiagonais}</p>` : ""}
  `;
}
