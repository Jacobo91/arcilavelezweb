import "./home.css"
import expressImg from "../../assets/image_express.jpg"
import juanesPhoto from "../../assets/juan_esteban.jpg"
import joseMiguel from "../../assets/jose_miguel.jpg"
import felipe from "../../assets/felipe.jpg"
import maria from "../../assets/maria.jpg"
import felipeFernandez from "../../assets/felipe_fernandez.jpg"
import WappButton from "../../components/WappBtn"
import VideoCarousel from "../../components/VideoCarousel"
import mainLogo from "../../assets/mainLogo.png"


export default function Home(){
    return(
        <main className="home-main">
            <section className="hero">
                <h1 className="hero-title" >
                    Te Ayudamos a Solucionar Tu Problema Legal
                </h1>
                <h2>
                    y Te Damos la Solución En Una Consultoría 100% GRATUITA de 15 Minutos Para Que puedas Tener Una Noche Más Tranquila el Día de Hoy...
                </h2>
                <h2>
                    Solicita tu asesoría inmediata de 15 minutos completamente GRATIS...
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o5usTrH6MZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <h2>Nuestras Especialidades</h2>
                <ul>
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho Penal y Procesal Penal.
                    </li>
                    <br />
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho de Familia.
                    </li>
                    <br />
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho Comercial.
                    </li>
                    <br />
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho Administrativo.
                    </li>
                    <br />
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho Civil.
                    </li>
                    <br />
                    <li>
                        <i class="fa-solid fa-check"></i> Derecho Electoral.
                    </li>
                </ul>
            </section>

            <article className="advice" >
                quiero presentarte nuestra asesoría express gratuita de 15 minutos
            </article>

            <section className="express" >

                <figure className="express-img-wrapper">
                    <img src={expressImg} alt="express image" className="express-image" />
                </figure>

                <p>
                    Es una llamada que tendrás ya sea por teléfono o video conferencia con uno de nuestros abogados en Medellín de Arcila Vélez Abogados en la cual evaluaremos tu caso y buscaremos la mejor solución para tu problema de inmediato.
                </p>
                <br />
                <p>
                    No te preocupes, juntos lo vamos a resolver y haremos hasta lo imposible por ayudarte.
                </p>
                <br />
                <p>
                    Más que tu abogado seremos un amigo y el apoyo que necesitas para resolver tu problema.
                </p>
                <br />
                <WappButton />
            </section>

            <section className="beneficios" >

            <figure className="beneficios-img-wrapper">
                <img src={juanesPhoto} alt="leader image" className="beneficios-image" />
            </figure>

            <article className="beneficios-text" >
                <h2>
                        Beneficios
                        <br />
                        de contar con nosotros...
                </h2>

                <ul className="beneficios-ul">
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i> Abogados especializados en diferentes áreas del derecho.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i> Asesoría inicial gratuita.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i> Precios justos.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i>  Acompañamiento total.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i>  Estaremos para ti los 7 días de la semana.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i>  Tu tranquilidad es nuestro objetivo .
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i>  Te hacemos las cosas fáciles.
                        </li>
                        <br />
                        <li>
                            <i className="fa-solid fa-bolt-lightning"></i>  Rápida atención.
                        </li>
                </ul>
            </article>

            </section>

            <section className="team" >
                <h2>
                    Nuestro Equipo de Trabajo
                </h2>

                <section className="gallery" >
                        <figure>
                            <img src={joseMiguel} alt="jose miguel chica" />
                        </figure>
                        <figure>
                            <img src={felipe} alt="felipe" />
                        </figure>
                        <figure>
                            <img src={maria} alt="maria" />
                        </figure>
                        <figure>
                            <img src={felipeFernandez} alt="felipe fernandez" />
                        </figure>
                </section>
            </section>

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
                        <i class="fa-solid fa-location-dot"></i> Dirección Medellín: Edificio Meridian Centro empresarial Calle 5A No 43 B 25 Oficina 608
                    </p>
                    <p>
                        <i class="fa-solid fa-phone"></i> (304) 451-0771
                    </p>
                    <WappButton />
                </div>
            </footer>

        </main>
    )
}