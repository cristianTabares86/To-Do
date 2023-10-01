import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './todoView.module.css'

export const ToDoView = () => {

  const todoArray = [
    {
      "id": 11, // first 10 items were skipped
      "todo": "Text a friend I haven't talked to in a long time",
      "completed": false,
      "userId": 39
    },
    {
      "id": 12,
      "todo": "Organize pantry",
      "completed": true,
      "userId": 39
    },
    {
      "id": 13,
      "todo": "Buy a new house decoration",
      "completed": false,
      "userId": 16
    }
  ];

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
                <Form.Control className={styles.inputTodo} type="text" placeholder="text" />
              </FloatingLabel>

            </Col>
            <Col sm={3}>
              <Button className={styles.addButton} variant="primary">Add ToDo</Button>{' '}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.listTodoSection}>
        {
          todoArray.length > 0 ? (
            todoArray.map((e) => (
              <Container key={e.id}>
                <Row>
                  <InputGroup>
                    <Form.Label>{e.id}</Form.Label>
                    <Form.Control
                      defaultValue={e.todo}
                      aria-label="Recipient's username with two button addons"
                    />
                    <Button variant="outline-secondary">Delete</Button>
                    <Button variant="outline-secondary">Edit</Button>
                  </InputGroup>
                </Row>
              </Container>
            ))

          ) : (<p>No todos</p>)
        }

      </section>
    </>

  );
};