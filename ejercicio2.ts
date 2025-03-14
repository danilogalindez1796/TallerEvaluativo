const calcularIMC = (peso: number, altura: number) => {
    const imc = peso / (altura * altura);
  
    let categoria;
    if (imc < 18.5) {
      categoria = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
      categoria = "Normal";
    } else if (imc >= 25 && imc < 30) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidad";
    }
    return `Tu IMC es ${imc.toFixed(2)} y tu categoría es: ${categoria}`;
  };
  console.log(calcularIMC(70, 1.75));
    