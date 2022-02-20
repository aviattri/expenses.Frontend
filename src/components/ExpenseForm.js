import { React, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";
export default ({ expense, setIsEditing }) => {
  const descriptions = [
    "Groceries",
    "Spotify",
    "Medicare",
    "Youtube Premimum",
    "Eat Out",
    "Travel",
    "Mobile Recharge",
    "Rent",
  ];
  const [description, setDescription] = useState(descriptions[0]);
  const [amount, setAmount] = useState(0);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create new expense
          NewExpense(dispatch, {
            description: description,
            amount: amount,
          });
        } else {
          //edit expenses
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: amount,
          });
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((item) => (
              <option>{item}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            steps="0.01"
            placeholder={`$${amount}`}
            onChange={(event) => setAmount(event.target.value)}
          ></Form.Control>
        </Col>
        <Col style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button
                style={{ marginRight: 10 }}
                variant="success"
                type="submit"
              >
                Save
              </Button>
              <Button
                style={{ marginRight: 10 }}
                variant="danger"
                onClick={() => DeleteExpense(dispatch, expense)}
              >
                Delete
              </Button>
              <Button
                style={{ marginRight: 10 }}
                border="1"
                variant="secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  );
};
