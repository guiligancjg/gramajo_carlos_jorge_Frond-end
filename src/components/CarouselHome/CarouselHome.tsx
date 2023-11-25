import { Carousel } from "react-bootstrap"


const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="imagenes/caroulogo.png"
                    alt="slide3"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="imagenes/imagen_1.webp"
                    alt="slide3"
                />

                <Carousel.Caption>
                    <h3>"Organiza, Desarrolla, Triunfa"</h3>
                    <p>"Más que código: Transforma tu visión en realidad con nuestras potentes herramientas de gestión de tareas."</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="imagenes/imagen_2.webp"
                    alt="slide3"
                />

                <Carousel.Caption>
                    <h3>"Descubre la Magia de la Gestión de Tareas para Desarrolladores"</h3>
                    <p>"Código ordenado, proyectos exitosos: Descubre el poder de la gestión de tareas inteligente."</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="imagenes/imagen_3.webp"
                    alt="slide3"
                />

                <Carousel.Caption>
                    <h3>"Herramientas Potentes para Tareas Perfectas"</h3>
                    <p>"Código claro, mente clara: Simplificando la gestión de tareas para desarrolladores apasionados."</p>
                </Carousel.Caption>
            </Carousel.Item>




        </Carousel>
    )
}

export default CarouselHome