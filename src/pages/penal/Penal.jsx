import WappButton from "../../components/WappBtn"
import VideoCarousel from "../../components/VideoCarousel"
import mainLogo from "../../assets/mainLogo.png"

export default function Penal(){
    return(
        <main>
            <section className="hero">
                <h1 className="hero-title" >
                    Tienes un problema de indole penal?
                </h1>
                <h2>
                    Queremos ayudarte con tu caso, contactanos via WhatsApp
                </h2>
                <h2>
                    y Te Damos la Solución En Una Consultoría 100% GRATUITA de 15 Minutos Para Que puedas Tener Una Noche Más Tranquila el Día de Hoy...
                </h2>
                <h2>
                    Solicita tu asesoría inmediata de 15 minutos completamente GRATIS...
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KIApZnr08FA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <WappButton />
            </section>

            <article className="advice" >
                entiendo el momento por el que estás pasando...
            </article>

            <section className="description" > 
                <p>
                    Se que necesitas una asesoría legal de inmediato sin pasar por los complejos procesos y trabas que conlleva contactar un abogado...
                </p>
                <br />
                <ul className="description-ul" >
                    <p>
                        No te vamos a decir:
                    </p>
                    <br />
                    <li>
                        <i className="fa-solid fa-xmark ul-mark"></i> Tienes que visitarnos primero.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-xmark ul-mark"></i> Tienes que pagar por la primera consultoría.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-xmark ul-mark"></i> Pronto te contactaremos.
                    </li>
                    <br />
                    <li>
                    <i className="fa-solid fa-xmark ul-mark"></i> Vamos a pasar tu mensaje.
                    </li>
                    <br />
                </ul>
                <p>
                    Nada de eso... 
                    <br /><br />
                    Sabemos que necesitas un abogado en Medellín ya... 
                    <br /><br />
                    y eso es lo que te vamos a brindar, sin tantos obstáculos.
                </p>
            </section>

            <article className="advice">
            </article>

            <section className="especialidades">
                <h2>Servicios</h2>
                <ul>
                    <li>
                        <i className="fa-solid fa-check"></i> Audiencias Preliminares ante Jueces de Control de Garantías.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> Audiencias ante Jueces Penales de Conocimiento.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> Representación y Acompañamiento a Victimas.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> Representación ante la Fiscalía General de la Nación.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> Acompañamiento en Celebración de Acuerdos y Negociaciones con la Fiscalía General de la Nación.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> Asesoramiento en Aplicación de Principio de Oportunidad.
                    </li>
                    <br />
                    <li>
                        <i className="fa-solid fa-check"></i> y demás.
                    </li>
                </ul>
            </section>

            <article className="advice" >
                quiero presentarte nuestra asesoría express gratuita de 15 minutos
            </article>

            <section className="proceso" >
                <h2>
                    ¿COMO ES EL PROCESO PARA TOMAR TU CASO?
                </h2>
                <ol>
                    <li>
                        1. Haces clic en el botón de WhatsApp para hablar con un abogado y tener la consultoría gratuita.
                    </li>
                    <br />
                    <li>
                        2. Te planteamos la mejor solución y estrategia a seguir para resolver tu problema.
                    </li>
                    <br />
                    <li>
                        3. Uno de nuestros abogados te visita dónde tu quieras y empezamos a trabajar en menos de 24 horas.
                    </li>
                </ol>
                <WappButton />
            </section>

            <section className="testimonios">
                <h2>
                    Testimonios
                </h2>
                <VideoCarousel />
            </section>

            <footer>  
                <figure className="footer-logo-wrapper">
                    <img src={mainLogo} alt="" className="footer-logo"/>
                </figure>
                <div className="contact-details">
                    <p>
                        <i className="fa-solid fa-location-dot"></i> Dirección Medellín: Edificio Meridian Centro empresarial Calle 5A No 43 B 25 Oficina 608.
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i> (304) 451-0771
                    </p>
                    <WappButton />
                </div>
            </footer>
        </main>
    )
}