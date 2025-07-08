function mostrarCampos() {
  const figura = document.getElementById("figura").value;
  const form = document.getElementById("formMedidas");
  const imagem = document.getElementById("imagem");
  form.innerHTML = "";
  imagem.innerHTML = "";

  const imagens = {
    triangulo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Triangle_-_black_simple.svg",
    quadrado: "https://upload.wikimedia.org/wikipedia/commons/3/34/Square_-_black_simple.svg",
    retangulo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Rectangle_example.svg",
    circulo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Circle_-_black_simple.svg",
    losango: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Rhombus_-_black_simple.svg",
    trapezio: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Trapezoid_-_black_simple.svg",
    quadrilatero: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Quadrilateral_-_black_simple.svg"
  };

  if (figura && imagens[figura]) {
    imagem.innerHTML = `<img src="${imagens[figura]}" alt="${figura}" />`;
  }

  switch (figura) {
    case "triangulo":
      form.innerHTML = `
        <input type="number" placeholder="Base" id="base"/>
        <input type="number" placeholder="Altura" id="altura"/>
        <input type="number" placeholder="Lado A" id="ladoA"/>
        <input type="number" placeholder="Lado B" id="ladoB"/>
        <input type="number" placeholder="Lado C" id="ladoC"/>
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
        <input type="number" placeholder="Diagonal maior" id="dMaior"/>
        <input type="number" placeholder="Diagonal menor" id="dMenor"/>
        <input type="number" placeholder="Lado" id="lado"/>
      `;
      break;
    case "trapezio":
      form.innerHTML = `
        <input type="number" placeholder="Base maior" id="baseMaior"/>
        <input type="number" placeholder="Base menor" id="baseMenor"/>
        <input type="number" placeholder="Altura" id="altura"/>
        <input type="number" placeholder="Lado não paralelo 1" id="lado1"/>
        <input type="number" placeholder="Lado não paralelo 2" id="lado2"/>
      `;
      break;
    case "quadrilatero":
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
  let area = 0, perimetro = 0, diagonais = 0, comprimentoDiagonais = "";
  const r = document.getElementById("resultado");

  switch (figura) {
    case "triangulo":
      const baseT = +document.getElementById("base").value;
      const alturaT = +document.getElementById("altura").value;
      const a = +document.getElementById("ladoA").value;
      const b = +document.getElementById("ladoB").value;
      const c = +document.getElementById("ladoC").value;
      area = (baseT * alturaT) / 2;
      perimetro = a + b + c;
      diagonais = 0;
      break;
    case "quadrado":
      const ladoQ = +document.getElementById("lado").value;
      area = ladoQ * ladoQ;
      perimetro = 4 * ladoQ;
      diagonais = 2;
      comprimentoDiagonais = (Math.sqrt(2) * ladoQ).toFixed(2);
      break;
    case "retangulo":
      const baseR = +document.getElementById("base").value;
      const alturaR = +document.getElementById("altura").value;
      area = baseR * alturaR;
      perimetro = 2 * (baseR + alturaR);
      diagonais = 2;
      comprimentoDiagonais = Math.sqrt(baseR ** 2 + alturaR ** 2).toFixed(2);
      break;
    case "circulo":
      const raio = +document.getElementById("raio").value;
      area = Math.PI * raio ** 2;
      perimetro = 2 * Math.PI * raio;
      diagonais = 0;
      break;
    case "losango":
      const d1 = +document.getElementById("dMaior").value;
      const d2 = +document.getElementById("dMenor").value;
      const ladoL = +document.getElementById("lado").value;
      area = (d1 * d2) / 2;
      perimetro = 4 * ladoL;
      diagonais = 2;
      comprimentoDiagonais = `${d1}, ${d2}`;
      break;
    case "trapezio":
      const B = +document.getElementById("baseMaior").value;
      const bMenor = +document.getElementById("baseMenor").value;
      const h = +document.getElementById("altura").value;
      const l1 = +document.getElementById("lado1").value;
      const l2 = +document.getElementById("lado2").value;
      area = ((B + bMenor) * h) / 2;
      perimetro = B + bMenor + l1 + l2;
      diagonais = 2;
      break;
    case "quadrilatero":
      const qa = +document.getElementById("ladoA").value;
      const qb = +document.getElementById("ladoB").value;
      const qc = +document.getElementById("ladoC").value;
      const qd = +document.getElementById("ladoD").value;
      perimetro = qa + qb + qc + qd;
      area = "Depende da forma";
      diagonais = 2;
      break;
  }

  r.innerHTML = `
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Perímetro:</strong> ${perimetro}</p>
    <p><strong>Diagonais:</strong> ${diagonais}</p>
    ${comprimentoDiagonais ? `<p><strong>Comprimento das diagonais:</strong> ${comprimentoDiagonais}</p>` : ""}
  `;
}
