import useClima from "../hooks/useClima"

function Resultado() {

    const { resultado } = useClima();

    const { name, main } = resultado;

    

    //Grados Kelvin
    const kelvin = 273.15

    const minima = (parseInt(main.temp_min - kelvin))
    const maxima = (parseInt(main.temp_max - kelvin))
    const actual = (parseInt(main.temp - kelvin))

  return (
    <div className="contenedor clima">
        <h2>El clima de {name} es:</h2>
       
        <p>
           { actual }  <span>&#x2103;</span>
        </p>
        <div className="temp_min_max">
            <p>
            Maxima: { maxima }  <span>&#x2103;</span>
            </p><p>
            Minima: { minima }  <span>&#x2103;</span>
            </p>
        </div>
       
    </div>
  )
}

export default Resultado