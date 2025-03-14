const ciudades = [
    { ciudad: "Madrid", temperatura: 25 },
    { ciudad: "Medellin", temperatura: 15 },
    { ciudad: "Barranquilla", temperatura: 30 },
    { ciudad: "Bogota", temperatura: 10 }
  ];
  interface CiudadTemperatura {
    ciudad: string;
    temperatura: number;
  }
  
  const analizarTemperaturas = (ciudades: CiudadTemperatura[]) => {
    let ciudadMasCaliente = ciudades[0];
    let ciudadMasFria = ciudades[0];
    let sumaTemperaturas = 0;
  
    ciudades.forEach(ciudad => {
      sumaTemperaturas = sumaTemperaturas + ciudad.temperatura;
  
      if (ciudad.temperatura > ciudadMasCaliente.temperatura) {
        ciudadMasCaliente = ciudad;
      }
  
      if (ciudad.temperatura < ciudadMasFria.temperatura) {
        ciudadMasFria = ciudad;
      }
    });
  
    const promedioTemperatura = sumaTemperaturas / ciudades.length;
  
    return {
      ciudadMasCaliente: ciudadMasCaliente.ciudad,
      ciudadMasFria: ciudadMasFria.ciudad,
      promedioTemperatura
    };
  };
  const resultado = analizarTemperaturas(ciudades);
  console.log(resultado);
  
  