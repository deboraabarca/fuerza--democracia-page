import React from 'react'

const Description = ({ EventsDetails }) => {
    return (
        <div id="Description">
            <div className="wpo-campaign-content">
                <div className="wpo-campaign-text-top">
                    <h2>{EventsDetails.title}</h2>
                    <div className="campaign-b-text">
                        <p>El feminicidio y la violencia contra las mujeres siguen siendo una dura realidad en nuestro país. No podemos quedarnos en silencio mientras tantas vidas son arrebatadas. 
                        Es momento de alzar la voz, de exigir justicia y de construir un Perú donde todas las mujeres puedan vivir sin miedo.
                        Nuestra lucha no tiene colores políticos ni distinciones: nos une el compromiso por la igualdad, la seguridad y la vida de cada mujer. Salgamos juntos a las calles para hacer visible esta problemática y demandar acciones concretas. Porque una sociedad sin violencia es responsabilidad de todos.</p>
                        
                    </div>
                    <div className="event-bb-text">
                        <h3>Detalle del Evento</h3>
                        <p>La marcha partirá desde la Plaza San Martín, en Lima, en una jornada de unión y protesta por la vida y la seguridad de las mujeres. Te esperamos el 20 de Febrero a las 14:00 , para alzar juntos la voz contra el feminicidio y la violencia de género. Para participar, te recomendamos:</p>
                        <ul>
                            <li>Usa ropa blanca o morada como símbolo de lucha.</li>
                            <li>Trae pancartas con mensajes de justicia y apoyo.</li>
                            <li>Promovamos una marcha pacífica, pero firme en su mensaje.</li>
                            <li>Mantén el orden y respeta a los demás participantes. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;