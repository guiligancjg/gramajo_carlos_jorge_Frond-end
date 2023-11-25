import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Task } from "../Types/Task";
import { Link } from "react-router-dom";
//import { Border } from 'react-bootstrap-icons';


const CategoriasTareas = ({ tasks }: { tasks: Task[] }) => {
  const categorias = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA'];
  const cate = ['POR HACER', 'EN PRODUCCION', 'POR TESTEAR', 'COMPLETADA'];
  const colorCate = ['#0B5ED7','#302B2B','#FFCA2C','#147347'];

  

  //console.log(tasks);
  return (

    <section className="container-fluid mt-5" id="categorias">
      {categorias.map((categoria, index) => (
        
        <section className="text-center mb-5" key={index} id="porHacerSection">
          <h3 className='display-6' style={{backgroundColor: colorCate[index], color: '#fff'}}>{cate[index]}</h3>
                  


          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-0" key={index}>

            {tasks.filter(task => task.estado === categoria.toUpperCase())
              .map(task => (



                <Card className='m-3' style={{ width: '18rem'}} key={task.id}>
                  <img style={{ minHeight: '200px', maxHeight: '100px' }} className="card-img-top gagp" src={task.imagen} alt={task.titulo} />
                  <Card.Body>
                    <Card.Title style={{ height: '8rem' }}>{task.titulo}</Card.Title>
                    <Card.Text>
                      <span>{`Tiempo: ${task.tiempo}`}</span><br />
                      <span>{`Responsable: ${task.responsable}`}</span>
                    </Card.Text>
                    
                    <Button variant={(() => {
                      switch (categoria.toUpperCase()) {
                        case 'PORHACER':
                          return 'primary';
                        case 'ENPRODUCCION':
                          return 'dark';
                        case 'PORTESTEAR':
                          return 'warning';
                        case 'COMPLETADA':
                          return 'success';
                        default:
                          return 'default';
                      }

                    })()}>

                      <Link to={`/detalle/${task.id}`} style={{ color: '#fff', textDecoration: 'none' }}>Ver más</Link>
                    </Button>



                  </Card.Body>
                </Card >



              ))
            }
          </div>

        </section>
      ))
      }
    </section >
  )
}

export default CategoriasTareas



/**
 * 
 * 
 * <div className="col" key={task.id}>
                <div className="card h-100">
                  <img style={{ minHeight: '200px', maxHeight: '100px' }} className="card-img-top" src={task.imagen} alt={task.titulo} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{task.titulo}</h5>
                      <span>{`Tiempo: ${task.tiempo}`}</span><br />
                      <span>{`Responsable: ${task.responsable}`}</span>

                    </div>

                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center d-flex gap-1 align-items-center justify-content-center">

                      <Link to={`/detalle/${task.id}`} className="btn btn-outline-secondary mt-auto">Ver más</Link>
                    </div>
                  </div>

                </div>
              </div>
 */