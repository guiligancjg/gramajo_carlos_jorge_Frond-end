import { Navbar, Container, Nav } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../services/TaskService";
import { Task } from "../Types/Task";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

const NavBar = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
        //Agregar nueva tarea
  const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada:', result.id);
      navigate(`/detalle/${result.id}`); //Ir al detalle de la tarea creada
  
      // Muestra una notificación de éxito utilizando react-toastify
      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Cerrar automáticamente después de 2 segundos
      });
    } catch (error) {
      // Muestra una notificación de error si la creación de la tarea falla
      toast.error('Error al crear la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al crear la tarea:', error);
    }
  };


    return (
        <>
        <Navbar id="detalle-section" expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav.Link onClick={() => navigate('/')}> <img src="public/imagenes/logo.png" alt="Gramajo Carlos Jorge - Comisión 079" /> </Nav.Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}> Inicio </Nav.Link>
                        
                        

                        <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
                    </Nav>

                    <Nav className="d-none d-md-flex ms-auto">
                        <Nav.Link href="#carrito">
                            <Basket />
                        </Nav.Link>

                        <Nav.Link href="#usuario">
                            <Person />
                        </Nav.Link>
                    </Nav>

                    <div className="d-md-none">
                        <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#ticket">Ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#perfil">Perfil</a>
                            </li>

                        </ul>

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />
        </>
    )
}

export default NavBar