import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './todoView.module.css'
//import axios from "axios";
import { useEffect, useState } from "react";
import { getTodosApi, updateListTodos } from '../../redux/todosActions';
import { useSelector, useDispatch } from 'react-redux';

export const ToDoView = () => {
  //let enumInitialTodo = 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosApi());
  }, [dispatch]);
  console.log("estoy aqui antes del lamado al store")
  let allTodos = useSelector((state) => state.todosState.allTodos);

  console.log(allTodos);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: allTodos.length + 1,
        todo: newTodo,
      };
      console.log("nuevo todo")
      console.log(newTodoItem)
      const updatedTodos = [...allTodos, newTodoItem];
      console.log("actualizados")
      console.log(updatedTodos)
      dispatch(updateListTodos(updatedTodos));

      setNewTodo('');
    }
  };

  const handleDeleteTodo = (e) => {
    console.log(e.target.value);
    const deleteTodo = allTodos.filter(t => t.id !== parseInt(e.target.value));
    console.log(deleteTodo);
    
    const updatedTodosWithNewIds = deleteTodo.map((todo, index) => {
      return {
        ...todo,
        id: index + 1, // Puedes asignar nuevos IDs como prefieras
      };
    });

    console.log("Este es con nuevo id")
    console.log(updatedTodosWithNewIds)

    dispatch(updateListTodos(updatedTodosWithNewIds));
    
       
  }

  return (
    <>
      <section className={styles.addSection}>
        <Container fluid>
          <Row>
            <Col sm={9}>
              <FloatingLabel
                controlId="floatingInput"
                label="Add a ToDo"
                className="mb-3"
              >
                <Form.Control className={styles.inputTodo} type="text" placeholder="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
              </FloatingLabel>

            </Col>
            <Col sm={3}>
              <Button className={styles.addButton} variant="primary" onClick={handleAddTodo}>Add ToDo</Button>{' '}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.listTodoSection}>
        {
          allTodos.length > 0 ? (
            allTodos.map((e) => (
              <Container key={e.id}>
                <Row>
                  <Col md={1}>
                    <Form.Label>{'#' + (e.id)}</Form.Label>
                  </Col>
                  <Col md={11}>
                    <InputGroup>

                      <Form.Control
                        defaultValue={e.todo}
                        aria-label="Recipient's username with two button addons"
                      />
                      <Button value={e.id} variant="outline-secondary" onClick={(e) => handleDeleteTodo(e)}>Delete</Button>
                      <Button variant="outline-secondary">Edit</Button>
                    </InputGroup>
                  </Col>

                </Row>
              </Container>
            ))

          ) : (<p>No todos</p>)
        }

      </section>
    </>

  );
};